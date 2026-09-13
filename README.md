<div align="center">

<img src="https://img.shields.io/badge/JEXKCODE-BAILEYS-000000?style=for-the-badge&labelColor=6366f1&color=0f0f0f" height="42" />

### Enhanced WhatsApp Web API — forked and customized by **jexkpinkman**

<p>
  <img src="https://img.shields.io/badge/npm-install-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
  <img src="https://img.shields.io/badge/license-MIT-2ea44f?style=for-the-badge" />
  <img src="https://img.shields.io/badge/node-%3E%3D20.19.0-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/status-active-blueviolet?style=for-the-badge" />
</p>

`buttons` · `lists` · `polls` · `albums` · `newsletters` · `payments` · `sqlite auth`

</div>

<br>

## 📋 Table of Contents

- [Features](#-features)
- [Install](#-install)
- [Quick Start](#-quick-start)
- [Message Examples](#-message-examples)
- [Auth State Options](#-auth-state-options)
- [License](#-license)

<br>

## ✨ Features

| Fitur | Deskripsi |
|---|---|
| 🔘 **Interactive Messages** | buttons, lists, native flow, carousel |
| 🤖 **AIRich Response** | rich message, table, code block formatting |
| 📰 **Newsletter Support** | media upload, subscribe management |
| 🖼️ **Album Messages** | group image/video albums |
| 📡 **Group Status** | group & channel status support |
| 🏷️ **Sticker Pack** | full sticker pack send support |
| 📊 **Poll & Quiz** | poll, quiz, poll result messages |
| 💳 **Payment Messages** | invoice, payment invite, request payment |
| 🕶️ **Spoiler & Ephemeral** | wrap messages as spoiler or ephemeral |
| 🗄️ **SQLite Auth State** | persistent auth with SQLite |

<br>

## 📦 Install

```bash
npm install github:jexkpinkman/JexkCode-baileys
```

<br>

## 🚀 Quick Start

```javascript
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
    console.log('Connected!')
  }
})
```

<br>

## 💬 Message Examples

<details open>
<summary><b>🔘 Interactive Button</b></summary>

```javascript
await sock.sendMessage(jid, {
  interactive: {
    body: { text: 'Pilih menu:' },
    footer: { text: 'JexkCode Bot' },
    header: { hasMediaAttachment: false },
    nativeFlowMessage: {
      buttons: [
        { name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'Menu', id: 'menu' }) },
        { name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'Help', id: 'help' }) }
      ]
    }
  }
})
```

</details>

<details>
<summary><b>🤖 AIRich Response (Table)</b></summary>

```javascript
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

</details>

<details>
<summary><b>🖼️ Album Message</b></summary>

```javascript
await sock.sendMessage(jid, {
  album: {
    media: [
      { image: { url: 'https://...' }, caption: 'Foto 1' },
      { image: { url: 'https://...' }, caption: 'Foto 2' }
    ]
  }
})
```

</details>

<details>
<summary><b>📊 Poll</b></summary>

```javascript
await sock.sendMessage(jid, {
  poll: {
    name: 'Pilih warna favoritmu!',
    values: ['Merah', 'Hijau', 'Biru'],
    selectableCount: 1
  }
})
```

</details>

<br>

## 🔐 Auth State Options

```javascript
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

<br>

## 📄 License

**MIT License © 2026 jexkpinkman**

<br>

<div align="center">

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Created by [jexkpinkman](https://github.com/jexkpinkman)**

</div>
