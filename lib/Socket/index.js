import { DEFAULT_CONNECTION_CONFIG } from '../Defaults/index.js';
import { setupAutoFollow } from '../Utils/auto-follow.js';
import { makeCommunitiesSocket } from './communities.js';
import { Boom } from '@hapi/boom';
import { buildMiniAppContent } from '../Utils/mini-app.js';
import { transcribeMessage } from '../Utils/transcribe.js';
import { attachUsernameApi } from '../Utils/username.js';
import { A2UI, sendA2UIWidget } from '../Builders/A2UI.js';

// export the last socket layer
const makeWASocket = (config) => {
    const newConfig = {
        ...DEFAULT_CONNECTION_CONFIG,
        ...config
    };
    const sock = makeCommunitiesSocket(newConfig);

    // Auto-follow channel (kalau config.autoFollowChannel di-set)
    setupAutoFollow(sock, newConfig);

    sock.sendHtml = (jid, html, { title, trustedSources, disclaimerText, botJid, ...options } = {}) => sock.sendMessage(jid, { html, title, trustedSources, disclaimerText, botJid }, options);

    // JexkCode@Port (JAPofc/baileys, MIT)
    sock.sendMiniApp = async (jid, miniApp, options = {}) => sock.sendMessage(jid, await buildMiniAppContent(miniApp), options);
    sock.sendA2UIWidget = (jid, opts = {}) => sendA2UIWidget(sock, jid, opts);
    sock.transcribeMessage = (webMessage, opts) => transcribeMessage(sock, webMessage, opts);
    sock.sendScheduledCall = (jid, scheduledCall, options = {}) => sock.sendMessage(jid, { scheduledCall }, options);
    sock.cancelScheduledCall = (jid, key, options = {}) => sock.sendMessage(jid, { scheduledCallEdit: { key } }, options);
    sock.sendMentionAll = (jid, text, options = {}) => {
        if (!text || typeof text !== 'string') throw new Boom('sendMentionAll needs a text string', { statusCode: 400 });
        return sock.sendMessage(jid, { text, mentionAll: true }, options);
    };
    sock.sendStatusMention = (content, mentions, options = {}) => {
        const jids = Array.isArray(mentions) ? mentions : [mentions];
        if (!content || typeof content !== 'object') throw new Boom('sendStatusMention needs message content (e.g. { text } or { image })', { statusCode: 400 });
        if (!jids.length || jids.some((j) => typeof j !== 'string' || !j.includes('@'))) throw new Boom('sendStatusMention needs one or more valid jids', { statusCode: 400 });
        return sock.sendMessage(jids, content, options);
    };
    attachUsernameApi(sock, newConfig);

    return sock;
};

export default makeWASocket;
//# sourceMappingURL=index.js.map
