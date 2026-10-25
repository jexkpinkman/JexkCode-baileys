/**
 * Username (baca-saja) — dipasang ke socket lewat attachUsernameApi(sock, config).
 * Diport dari J.AP (@japofc/baileys, MIT), tanpa fungsi yang MENGUBAH akun
 * (set / reserve / delete / pin) dan tanpa auto-rotate dari repo luar.
 *
 * ⚠ checkUsername / getMyUsername / getUsernameRecommendations memakai GraphQL query_id yang
 * ditangkap dari WA Web dan bisa diganti WhatsApp kapan saja. Kalau error "bad request", ganti id-nya:
 *   makeWASocket({ usernameQueryIds: { CHECK: '<id baru>' } })   atau   sock.setUsernameQueryIds({...})
 * findUserByUsername & fetchContactUsernames pakai USync (tanpa query_id).
 */
import { USyncQuery, USyncUser } from '../WAUSync/index.js';
import { executeWMexQuery } from '../Socket/mex.js';

export const USERNAME_QUERY_IDS = {
    CHECK: '26124072630599520',
    CHECK_MULTI: '27134626522840290',
    GET: '32618050064506056',
    GET_RECOMMENDATIONS: '26077456248616956'
};
export const USERNAME_CHECK_RESULT = { SUCCESS: 'SUCCESS', INVALID: 'INVALID' };

export const attachUsernameApi = (sock, config = {}) => {
    const { query, generateMessageTag, executeUSyncQuery } = sock;
    const queryIds = { ...USERNAME_QUERY_IDS, ...(config?.usernameQueryIds ?? {}) };

    const mexQuery = async (variables, queryId, dataPath) => {
        try {
            return await executeWMexQuery(variables, queryId, dataPath, query, generateMessageTag);
        }
        catch (err) {
            const status = err?.output?.statusCode;
            if (status === 400 || /bad request/i.test(String(err?.message ?? ''))) {
                throw Object.assign(new Error(`${err.message} — kemungkinan query_id (${queryId}) sudah diganti WhatsApp. ` +
                    'Ganti lewat sock.setUsernameQueryIds({ CHECK: \'<id baru>\' }).'), { cause: err, output: err?.output });
            }
            throw err;
        }
    };

    sock.getUsernameQueryIds = () => ({ ...queryIds });
    sock.setUsernameQueryIds = (patch = {}) => {
        for (const [k, v] of Object.entries(patch)) {
            if (typeof v === 'string' && v) queryIds[k] = v;
        }
        return { ...queryIds };
    };
    sock.checkUsername = async (username, includeSuggestions = true) => {
        const data = await mexQuery({ username, include_suggestions: includeSuggestions }, queryIds.CHECK, 'xwa2_username_check');
        if (data?.result === USERNAME_CHECK_RESULT.SUCCESS) return { available: true, username };
        return {
            available: false, username,
            suggestions: data?.suggestions ?? [],
            rejectionReasons: data?.rejection_reasons ?? [],
            suggestionsEligible: data?.suggestions_eligible ?? true
        };
    };
    sock.checkUsernameMulti = (usernames) => mexQuery({ usernames }, queryIds.CHECK_MULTI, 'xwa2_username_check_multi');
    sock.getMyUsername = async () => (await mexQuery({}, queryIds.GET, 'xwa2_username_get'))?.username ?? null;
    sock.getUsernameRecommendations = (source = null) => mexQuery(source ? { source } : {}, queryIds.GET_RECOMMENDATIONS, 'xwa2_username_get_recommendations');
    sock.findUserByUsername = async (username, pin) => {
        const user = new USyncUser().withUsername(username);
        if (pin) user.withUsernameKey(pin);
        const result = await executeUSyncQuery(new USyncQuery().withContactProtocol().withUser(user));
        const entry = result?.list?.[0];
        return entry ? { jid: entry.id, contact: Boolean(entry.contact) } : null;
    };
    sock.fetchContactUsernames = async (...jids) => {
        const q = new USyncQuery().withUsernameProtocol();
        for (const jid of jids) q.withUser(new USyncUser().withId(jid));
        return (await executeUSyncQuery(q))?.list ?? [];
    };
    return sock;
};
