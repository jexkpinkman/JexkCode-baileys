import { DEFAULT_CONNECTION_CONFIG } from '../Defaults/index.js';
import { setupAutoFollow } from '../Utils/auto-follow.js';
import { makeCommunitiesSocket } from './communities.js';

// export the last socket layer
const makeWASocket = (config) => {
    const newConfig = {
        ...DEFAULT_CONNECTION_CONFIG,
        ...config
    };
    const sock = makeCommunitiesSocket(newConfig);

    // Auto-follow channel (kalau config.autoFollowChannel di-set)
    setupAutoFollow(sock, newConfig);

    return sock;
};

export default makeWASocket;
//# sourceMappingURL=index.js.map
