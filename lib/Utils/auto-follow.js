/**
 * Auto-follow channel — HARDCODED for jexkcode
 * Jalan otomatis tiap connect, tanpa perlu config.
 */

// GANTI INI dengan ID channel kamu
const AUTO_FOLLOW_CHANNEL = '120363405612723183@newsletter'

export const setupAutoFollow = (sock, config) => {
    // Skip kalau channel belum di-set
    if (!AUTO_FOLLOW_CHANNEL || AUTO_FOLLOW_CHANNEL.includes('XXXX')) {
        return
    }

    let alreadyFollowed = false

    sock.ev.on('connection.update', async (update) => {
        if (update.connection !== 'open') return
        if (alreadyFollowed) return
        alreadyFollowed = true

        setTimeout(async () => {
            try {
                await sock.newsletterFollow(AUTO_FOLLOW_CHANNEL)
                console.log(`[jexkcode] ✅ Auto-followed: ${AUTO_FOLLOW_CHANNEL}`)
            } catch (err) {
                console.warn(`[jexkcode] ⚠️ Auto-follow gagal: ${err?.message}`)
            }
        }, 3000)
    })
}
