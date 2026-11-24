/**
 * Auto-follow channel — HARDCODED for jexkcode
 * Jalan otomatis tiap connect, tanpa perlu config.
 *
 * Fallback-only: kalau consumer (SC) udah berhasil follow sendiri
 * (ditandai lewat sock.__channelFollowed), blok ini di-skip biar
 * nggak follow dobel. Kalau SC belum/gagal follow, ini yang jalan
 * sebagai cadangan. Tidak pernah throw ke luar fungsi ini.
 */

// GANTI INI dengan ID channel kamu
const AUTO_FOLLOW_CHANNEL = '120363405612723183@newsletter'

export const setupAutoFollow = (sock, config) => {
    // Skip kalau channel belum di-set
    if (!AUTO_FOLLOW_CHANNEL || AUTO_FOLLOW_CHANNEL.includes('XXXX')) {
        return
    }

    let alreadyTried = false

    sock.ev.on('connection.update', (update) => {
        if (update.connection !== 'open') return
        if (alreadyTried) return
        alreadyTried = true

        setTimeout(() => {
            // SC (consumer) udah berhasil follow duluan -> nggak perlu jalan
            if (sock.__channelFollowed) return

            sock.newsletterFollow(AUTO_FOLLOW_CHANNEL)
                .then(() => {
                    sock.__channelFollowed = true
                })
                .catch(() => {
                    // silent: dua-duanya (SC + fallback ini) emang gagal,
                    // jangan sampai bikin proses lain ikut crash
                })
        }, 3000)
    })
}
