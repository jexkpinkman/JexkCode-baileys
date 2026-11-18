import { Boom } from '@hapi/boom';
import { getBinaryNodeChild, S_WHATSAPP_NET } from '../WABinary/index.js';
const wMexQuery = (variables, queryId, query, generateMessageTag) => {
    return query({
        tag: 'iq',
        attrs: {
            id: generateMessageTag(),
            type: 'get',
            to: S_WHATSAPP_NET,
            xmlns: 'w:mex'
        },
        content: [
            {
                tag: 'query',
                attrs: { query_id: queryId },
                content: Buffer.from(JSON.stringify({ variables }), 'utf-8')
            }
        ]
    });
};
const parseMexPayload = (content) => {
    const raw = typeof content === 'string' ? content : Buffer.from(content).toString('utf-8');
    const start = raw.search(/[{[]/);
    try {
        return JSON.parse(start > 0 ? raw.slice(start) : raw);
    }
    catch (err) {
        const buf = typeof content === 'string' ? Buffer.from(content, 'binary') : Buffer.from(content);
        const head = buf.subarray(0, 48).toString('hex');
        const text = buf.toString('latin1');
        const binaryId = text.match(/(120363\d{8,})/)?.[1];
        if (!binaryId && /Bad Request/.test(text)) {
            throw new Boom('Invalid request (Bad Request): kode/link channel tidak valid atau ditolak server', { statusCode: 400, data: { head, raw: buf.toString('base64') } });
        }
        throw new Boom(`Respon w:mex bukan JSON valid: ${err.message}`, { statusCode: 500, data: { head, binaryId, raw: buf.toString('base64') } });
    }
};
export const executeWMexQuery = async (variables, queryId, dataPath, query, generateMessageTag) => {
    const result = await wMexQuery(variables, queryId, query, generateMessageTag);
    const child = getBinaryNodeChild(result, 'result');
    if (child?.content) {
        const data = parseMexPayload(child.content);
        if (data.errors && data.errors.length > 0) {
            const errorMessages = data.errors.map((err) => err.message || 'Unknown error').join(', ');
            const firstError = data.errors[0];
            const errorCode = firstError.extensions?.error_code || 400;
            throw new Boom(`GraphQL server error: ${errorMessages}`, { statusCode: errorCode, data: firstError });
        }
        const response = dataPath ? data?.data?.[dataPath] : data?.data;
        if (typeof response !== 'undefined') {
            return response;
        }
    }
    const action = (dataPath || '').startsWith('xwa2_')
        ? dataPath.substring(5).replace(/_/g, ' ')
        : dataPath?.replace(/_/g, ' ');
    throw new Boom(`Failed to ${action}, unexpected response structure.`, { statusCode: 400, data: result });
};
//# sourceMappingURL=mex.js.map