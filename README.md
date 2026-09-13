<div align="center">

# 🚀 JexkCode Baileys

[![npm version](https://img.shields.io/badge/version-1.1.0-blue?style=for-the-badge)](https://github.com/jexkpinkman/JexkCode-baileys)
[![Node.js](https://img.shields.io/badge/node-%3E%3D20-339933?logo=node.js&labelColor=green&logoColor=white&style=for-the-badge)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![ESM](https://img.shields.io/badge/Module-ESM%20%2B%20CJS-brightgreen?logo=javascript&labelColor=yellow&logoColor=black&style=for-the-badge)](#)

**Enhanced WhatsApp Web API** — forked and customized by [jexkpinkman](https://github.com/jexkpinkman)

</div>

---

## ✨ Features

- 🔘 **Interactive Messages** — buttons, lists, native flow, carousel
- 🤖 **AIRich Response** — rich message, table, code block formatting
- 📰 **Newsletter Support** — media upload, subscribe management
- 🖼️ **Album Messages** — group image/video albums
- 📊 **Group Status** — group & channel status support
- 🔖 **Sticker Pack** — full sticker pack send support
- 📋 **Poll & Quiz** — poll, quiz, poll result messages
- 💳 **Payment Messages** — invoice, payment invite, request payment
- 🎯 **Spoiler & Ephemeral** — wrap messages as spoiler or ephemeral
- 🗂️ **SQLite Auth State** — persistent auth with SQLite

---

## 📦 Install

```bash
npm install github:jexkpinkman/JexkCode-baileys
```

---

## 🚀 Quick Start

```js
import makeWASocket, { useMultiFileAuthState, DisconnectReason } from 'jexkcode'
import { Boom } from '@hapi/boom'

const { state, saveCreds } = await useMultiFileAuthState('auth_info')

const sock = makeWASocket({ auth: state })

sock.ev.on('creds.update', saveCreds)

sock.ev.on('connection.update', ({ connection, lastDisconnect }) => {
  if (connection === 'close') {
    const shouldReconnect = new Boom(lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut
    if (shouldReconnect) connectToWhatsApp()
  } else if (connection === 'open') {
    console.log('✅ Connected!')
  }
})
```

---

## 💬 Message Examples

### Interactive Button
```js
await sock.sendMessage(jid, {
  interactive: {
    body: { text: 'Pilih menu:' },
    footer: { text: 'JexkCode Bot' },
    header: { hasMediaAttachment: false },
    nativeFlowMessage: {
      buttons: [
        { name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: '📋 Menu', id: 'menu' }) },
        { name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: '❓ Help', id: 'help' }) }
      ]
    }
  }
})
```

### AIRich Response (Table)
```js
await sock.sendMessage(jid, {
  aiRich: {
    message: { conversation: 'Data pengguna:' },
    unifiedResponse: {
      components: [{
        type: 'table',
        columns: [{ name: 'Nama' }, { name: 'Status' }],
        rows: [
          { cells: [{ content: 'User A' }, { content: 'Aktif' }] },
          { cells: [{ content: 'User B' }, { content: 'Tidak Aktif' }] }
        ]
      }]
    }
  }
})
```

### Album Message
```js
await sock.sendMessage(jid, {
  album: {
    media: [
      { image: { url: 'https://...' }, caption: 'Foto 1' },
      { image: { url: 'https://...' }, caption: 'Foto 2' }
    ]
  }
})
```

### Poll
```js
await sock.sendMessage(jid, {
  poll: {
    name: 'Pilih warna favoritmu!',
    values: ['Merah 🔴', 'Hijau 🟢', 'Biru 🔵'],
    selectableCount: 1
  }
})
```

---

## 🛠️ Auth State Options

```js
// Multi-file (default)
import { useMultiFileAuthState } from 'jexkcode'
const { state, saveCreds } = await useMultiFileAuthState('./auth_info')

// Single file
import { useSingleFileAuthState } from 'jexkcode'
const { state, saveCreds } = await useSingleFileAuthState('./auth.json')

// SQLite
import { useSQLiteAuthState } from 'jexkcode'
const { state, saveCreds } = await useSQLiteAuthState('./auth.db')
```

---

## 📄 License

MIT License © 2026 [jexkpinkman](https://github.com/jexkpinkman)

---

<div align="center">
Made with ❤️ by <a href="https://github.com/jexkpinkman">jexkpinkman</a>
</div>
