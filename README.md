<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JexkCode Baileys</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
--bg:#09090c;--bg2:#0f0f15;--bg3:#15151e;--bg4:#1c1c28;
--ink:#eeedf0;--ink2:#8c8a98;--ink3:#46444f;
--teal:#00c896;--teal2:#009e78;--tealbg:#001510;
--purple:#9b7cf4;--purplebg:#130d28;
--blue:#3da8f5;--bluebg:#051420;
--amber:#e8962a;--amberbg:#160e00;
--bd:#1e1e2a;--bd2:#2c2c3e;
--mono:'JetBrains Mono',monospace;--sans:'Inter',sans-serif;
}
body{background:var(--bg);color:var(--ink);font-family:var(--sans);font-size:14px;line-height:1.6;overflow-x:hidden}

canvas#bg{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:.55}

.wrap{position:relative;z-index:1;max-width:720px;margin:0 auto;padding-bottom:80px}

/* HERO */
.hero{padding:56px 32px 40px}
.hero-eyebrow{font-family:var(--mono);font-size:11px;color:var(--ink3);letter-spacing:.07em;margin-bottom:16px}
.hero-title{font-size:46px;font-weight:700;letter-spacing:-.045em;line-height:1.0;color:var(--ink);margin-bottom:14px}
.hero-title em{color:var(--teal);font-style:normal}
.hero-sub{font-size:15px;color:var(--ink2);line-height:1.75;margin-bottom:24px;max-width:52ch}
.badges{display:flex;gap:6px;flex-wrap:wrap}
.badge{font-family:var(--mono);font-size:10.5px;padding:4px 10px;border-radius:5px;border:.5px solid var(--bd2);color:var(--ink3);background:var(--bg2)}
.badge.hi{color:var(--teal);border-color:var(--teal2);background:var(--tealbg)}

.divider{height:.5px;background:var(--bd);margin:0 32px}

/* INSTALL */
.install{margin:32px 32px 0;background:var(--bg2);border:.5px solid var(--bd2);border-radius:10px;overflow:hidden}
.ibar{display:flex;align-items:center;justify-content:space-between;padding:10px 16px;border-bottom:.5px solid var(--bd)}
.ilbl{font-family:var(--mono);font-size:10px;color:var(--ink3)}
.icopy{font-family:var(--mono);font-size:10px;padding:3px 10px;background:transparent;border:.5px solid var(--bd2);color:var(--ink3);border-radius:5px;cursor:pointer;transition:all .15s}
.icopy:hover,.icopy.ok{border-color:var(--teal);color:var(--teal)}
.icmd{padding:14px 16px;font-family:var(--mono);font-size:13px;color:var(--ink)}
.icmd .pfx{color:var(--ink3);margin-right:6px}

/* TERMINAL */
.terminal{margin:20px 32px 0;background:var(--bg2);border:.5px solid var(--bd2);border-radius:10px;overflow:hidden}
.tbar{display:flex;align-items:center;gap:7px;padding:12px 16px;border-bottom:.5px solid var(--bd);background:var(--bg3)}
.tdot{width:11px;height:11px;border-radius:50%}
.tdot:nth-child(1){background:#ff5f56}
.tdot:nth-child(2){background:#ffbd2e}
.tdot:nth-child(3){background:#27c93f}
.ttitle{font-family:var(--mono);font-size:11px;color:var(--ink3);margin-left:auto;margin-right:auto;padding-right:44px}
.tscreen{padding:18px 16px;font-family:var(--mono);font-size:13px;line-height:2;min-height:160px}
.tline{display:flex;align-items:baseline;gap:0;opacity:0}
.tline.show{animation:tshow .12s forwards}
@keyframes tshow{to{opacity:1}}
.tpfx{color:var(--teal);margin-right:8px;flex-shrink:0}
.tcmd{color:var(--ink)}
.tout{color:var(--ink2)}
.tok{color:var(--teal)}
.tcursor{display:inline-block;width:8px;height:14px;background:var(--teal);animation:blink .8s step-end infinite;vertical-align:middle;margin-left:2px}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}

/* SECTIONS */
.sec{padding:32px 32px 0}
.sec-head{display:flex;align-items:center;gap:10px;margin-bottom:20px}
.sec-line{flex:1;height:.5px;background:var(--bd)}
.sec-lbl{font-family:var(--mono);font-size:10.5px;color:var(--ink3);letter-spacing:.1em;white-space:nowrap}

/* FEATURES */
.feat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--bd);border-radius:10px;border:.5px solid var(--bd2);overflow:hidden}
.feat{padding:20px 18px;background:var(--bg2);position:relative;transition:background .2s}
.feat:hover{background:var(--bg3)}
.fbar{position:absolute;top:0;left:0;width:2px;height:100%}
.fico{font-size:20px;margin-bottom:10px;display:block;line-height:1}
.fname{font-size:13px;font-weight:600;color:var(--ink);margin-bottom:3px}
.fdesc{font-size:12px;color:var(--ink3);line-height:1.5}

/* TABS */
.tabs-wrap{position:relative}
.tabs{display:flex;overflow-x:auto;border-bottom:.5px solid var(--bd);padding:0}
.tabs::-webkit-scrollbar{display:none}
.tab{font-family:var(--mono);font-size:12px;padding:12px 18px;background:transparent;border:none;color:var(--ink3);cursor:pointer;white-space:nowrap;position:relative;transition:color .2s}
.tab:hover{color:var(--ink2)}
.tab.on{color:var(--teal)}
.tink{position:absolute;bottom:0;height:1.5px;background:var(--teal);border-radius:2px 2px 0 0;transition:left .25s cubic-bezier(.4,0,.2,1),width .25s cubic-bezier(.4,0,.2,1)}

/* CODE */
.code-wrap{background:var(--bg2);border:.5px solid var(--bd2);border-radius:10px;overflow:hidden;margin-top:14px}
.cbar{display:flex;align-items:center;justify-content:space-between;padding:10px 16px;border-bottom:.5px solid var(--bd);background:var(--bg3)}
.cfn{font-family:var(--mono);font-size:10.5px;color:var(--ink3)}
.ccopy{font-family:var(--mono);font-size:10.5px;background:transparent;border:none;color:var(--ink3);cursor:pointer;transition:color .15s;padding:0}
.ccopy:hover{color:var(--teal)}
pre{padding:20px 18px;font-size:13px;line-height:1.85;overflow-x:auto;font-family:var(--mono)}
pre::-webkit-scrollbar{height:4px}
pre::-webkit-scrollbar-thumb{background:var(--bd2);border-radius:2px}
.pane{display:none}
.pane.show{display:block}
.pane.ein pre{animation:slidein .22s cubic-bezier(.4,0,.2,1) forwards}
@keyframes slidein{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:translateX(0)}}

.k{color:#a78bfa}.s{color:#6ee7b7}.fn{color:var(--teal)}.cn{color:#fbbf24}.cm{color:var(--ink3);font-style:italic}.nu{color:#f87171}

/* AUTH */
.auth-list{border:.5px solid var(--bd2);border-radius:10px;overflow:hidden}
.arow{padding:18px;background:var(--bg2);display:flex;align-items:flex-start;gap:14px;border-bottom:.5px solid var(--bd);transition:background .2s}
.arow:last-child{border-bottom:none}
.arow:hover{background:var(--bg3)}
.adot{width:7px;height:7px;border-radius:50%;margin-top:6px;flex-shrink:0}
.aname{font-family:var(--mono);font-size:13px;font-weight:500;color:var(--ink);margin-bottom:4px}
.acode{font-family:var(--mono);font-size:11.5px;color:var(--ink3);margin-bottom:4px}
.adesc{font-size:13px;color:var(--ink3)}

/* FOOTER */
.foot{margin:36px 32px 0;padding-top:24px;border-top:.5px solid var(--bd);display:flex;align-items:center;justify-content:space-between}
.fl{font-family:var(--mono);font-size:11px;color:var(--ink3)}
.fr{font-family:var(--mono);font-size:11px;color:var(--teal);text-decoration:none}
.fr:hover{text-decoration:underline}

/* ANIMATION */
@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
.fu{opacity:0}
.fu.vis{animation:fadeUp .45s cubic-bezier(.4,0,.2,1) forwards}

@media(max-width:600px){
  .hero{padding:36px 20px 28px}
  .hero-title{font-size:34px}
  .sec,.install,.terminal{padding-left:0;padding-right:0;margin-left:16px;margin-right:16px}
  .divider{margin:0 16px}
  .foot{margin-left:16px;margin-right:16px}
}
</style>
</head>
<body>

<canvas id="bg"></canvas>
<div class="wrap">

<div class="hero fu">
  <p class="hero-eyebrow">github:jexkpinkman &nbsp;/&nbsp; node ≥ 20 &nbsp;/&nbsp; esm + cjs &nbsp;/&nbsp; mit</p>
  <h1 class="hero-title">JexkCode<em> Baileys</em></h1>
  <p class="hero-sub">Enhanced WhatsApp Web API — forked and customized by jexkpinkman.<br>Interactive messages, album, newsletter, sticker pack, poll &amp; quiz, payment messages, SQLite auth state, dan masih banyak lagi.</p>
  <div class="badges">
    <span class="badge hi">v1.1.0</span>
    <span class="badge">Node ≥ 20</span>
    <span class="badge">ESM + CJS</span>
    <span class="badge">Baileys</span>
    <span class="badge">MIT</span>
  </div>
</div>

<div class="divider"></div>

<div class="install fu">
  <div class="ibar">
    <span class="ilbl">$ npm install</span>
    <button class="icopy" id="ic" onclick="cpI()">copy</button>
  </div>
  <div class="icmd"><span class="pfx">$</span>npm install github:jexkpinkman/JexkCode-baileys</div>
</div>

<div class="terminal fu">
  <div class="tbar">
    <span class="tdot"></span><span class="tdot"></span><span class="tdot"></span>
    <span class="ttitle">terminal — jexkcode</span>
  </div>
  <div class="tscreen" id="tscreen"></div>
</div>

<div class="sec fu">
  <div class="sec-head"><span class="sec-lbl">features</span><span class="sec-line"></span></div>
  <div class="feat-grid">
    <div class="feat"><span class="fbar" style="background:var(--teal)"></span><span class="fico"><i class="ti ti-pointer" style="color:var(--teal);font-size:20px" aria-hidden="true"></i></span><span class="fname">Interactive Messages</span><span class="fdesc">Buttons, lists, native flow, carousel</span></div>
    <div class="feat"><span class="fbar" style="background:var(--purple)"></span><span class="fico"><i class="ti ti-sparkles" style="color:var(--purple);font-size:20px" aria-hidden="true"></i></span><span class="fname">AIRich Response</span><span class="fdesc">Rich message, table, code block formatting</span></div>
    <div class="feat"><span class="fbar" style="background:var(--blue)"></span><span class="fico"><i class="ti ti-photo" style="color:var(--blue);font-size:20px" aria-hidden="true"></i></span><span class="fname">Album Messages</span><span class="fdesc">Group image/video albums</span></div>
    <div class="feat"><span class="fbar" style="background:var(--amber)"></span><span class="fico"><i class="ti ti-chart-bar" style="color:var(--amber);font-size:20px" aria-hidden="true"></i></span><span class="fname">Poll &amp; Quiz</span><span class="fdesc">Poll, quiz, poll result messages</span></div>
    <div class="feat"><span class="fbar" style="background:var(--teal)"></span><span class="fico"><i class="ti ti-rss" style="color:var(--teal);font-size:20px" aria-hidden="true"></i></span><span class="fname">Newsletter Support</span><span class="fdesc">Media upload, subscribe management</span></div>
    <div class="feat"><span class="fbar" style="background:var(--purple)"></span><span class="fico"><i class="ti ti-database" style="color:var(--purple);font-size:20px" aria-hidden="true"></i></span><span class="fname">SQLite Auth State</span><span class="fdesc">Persistent auth with SQLite</span></div>
    <div class="feat"><span class="fbar" style="background:var(--blue)"></span><span class="fico"><i class="ti ti-news" style="color:var(--blue);font-size:20px" aria-hidden="true"></i></span><span class="fname">Group Status</span><span class="fdesc">Group &amp; channel status support</span></div>
    <div class="feat"><span class="fbar" style="background:var(--amber)"></span><span class="fico"><i class="ti ti-sticker" style="color:var(--amber);font-size:20px" aria-hidden="true"></i></span><span class="fname">Sticker Pack</span><span class="fdesc">Full sticker pack send support</span></div>
    <div class="feat"><span class="fbar" style="background:var(--teal)"></span><span class="fico"><i class="ti ti-credit-card" style="color:var(--teal);font-size:20px" aria-hidden="true"></i></span><span class="fname">Payment Messages</span><span class="fdesc">Invoice, payment invite, request payment</span></div>
    <div class="feat"><span class="fbar" style="background:var(--purple)"></span><span class="fico"><i class="ti ti-eye-off" style="color:var(--purple);font-size:20px" aria-hidden="true"></i></span><span class="fname">Spoiler &amp; Ephemeral</span><span class="fdesc">Wrap messages as spoiler or ephemeral</span></div>
  </div>
</div>

<div class="sec fu">
  <div class="sec-head"><span class="sec-lbl">quick start</span><span class="sec-line"></span></div>
  <div class="code-wrap">
    <div class="cbar"><span class="cfn">index.js</span><button class="ccopy" onclick="cpEl('qs')">copy</button></div>
    <pre><code id="qs"><span class="k">import</span> makeWASocket, { useMultiFileAuthState,
  DisconnectReason } <span class="k">from</span> <span class="s">'jexkcode'</span>
<span class="k">import</span> { <span class="cn">Boom</span> } <span class="k">from</span> <span class="s">'@hapi/boom'</span>

<span class="k">const</span> { state, saveCreds } =
  <span class="k">await</span> <span class="fn">useMultiFileAuthState</span>(<span class="s">'auth_info'</span>)

<span class="k">const</span> sock = <span class="fn">makeWASocket</span>({ auth: state })

sock.ev.<span class="fn">on</span>(<span class="s">'creds.update'</span>, saveCreds)

sock.ev.<span class="fn">on</span>(<span class="s">'connection.update'</span>, ({
  connection, lastDisconnect
}) <span class="k">=></span> {
  <span class="k">if</span> (connection === <span class="s">'close'</span>) {
    <span class="k">const</span> shouldReconnect = <span class="k">new</span> <span class="cn">Boom</span>(
      lastDisconnect?.error
    )?.output?.statusCode
      !== DisconnectReason.loggedOut
    <span class="k">if</span> (shouldReconnect) <span class="fn">connectToWhatsApp</span>()
  } <span class="k">else if</span> (connection === <span class="s">'open'</span>) {
    console.<span class="fn">log</span>(<span class="s">'✅ Connected!'</span>)
  }
})</code></pre>
  </div>
</div>

<div class="sec fu">
  <div class="sec-head"><span class="sec-lbl">message examples</span><span class="sec-line"></span></div>
  <div class="tabs-wrap">
    <div class="tabs" id="tabs">
      <button class="tab on" onclick="sw(this,'btn')">Interactive Button</button>
      <button class="tab" onclick="sw(this,'airich')">AIRich Response</button>
      <button class="tab" onclick="sw(this,'album')">Album</button>
      <button class="tab" onclick="sw(this,'poll')">Poll</button>
    </div>
    <div class="tink" id="tink"></div>
  </div>
  <div class="code-wrap">
    <div class="cbar"><span class="cfn" id="cfn">button.js</span><button class="ccopy" onclick="cpPane()">copy</button></div>

    <div id="p-btn" class="pane show">
<pre><code><span class="k">await</span> sock.<span class="fn">sendMessage</span>(jid, {
  interactive: {
    body: { text: <span class="s">'Pilih menu:'</span> },
    footer: { text: <span class="s">'JexkCode Bot'</span> },
    header: { hasMediaAttachment: <span class="k">false</span> },
    nativeFlowMessage: {
      buttons: [
        {
          name: <span class="s">'quick_reply'</span>,
          buttonParamsJson: <span class="fn">JSON.stringify</span>({
            display_text: <span class="s">'📋 Menu'</span>,
            id: <span class="s">'menu'</span>
          })
        },
        {
          name: <span class="s">'quick_reply'</span>,
          buttonParamsJson: <span class="fn">JSON.stringify</span>({
            display_text: <span class="s">'❓ Help'</span>,
            id: <span class="s">'help'</span>
          })
        }
      ]
    }
  }
})</code></pre></div>

    <div id="p-airich" class="pane">
<pre><code><span class="k">await</span> sock.<span class="fn">sendMessage</span>(jid, {
  aiRich: {
    message: { conversation: <span class="s">'Data pengguna:'</span> },
    unifiedResponse: {
      components: [{
        type: <span class="s">'table'</span>,
        columns: [
          { name: <span class="s">'Nama'</span> },
          { name: <span class="s">'Status'</span> }
        ],
        rows: [
          { cells: [
            { content: <span class="s">'User A'</span> },
            { content: <span class="s">'Aktif'</span> }
          ]},
          { cells: [
            { content: <span class="s">'User B'</span> },
            { content: <span class="s">'Tidak Aktif'</span> }
          ]}
        ]
      }]
    }
  }
})</code></pre></div>

    <div id="p-album" class="pane">
<pre><code><span class="k">await</span> sock.<span class="fn">sendMessage</span>(jid, {
  album: {
    media: [
      {
        image: { url: <span class="s">'https://...'</span> },
        caption: <span class="s">'Foto 1'</span>
      },
      {
        image: { url: <span class="s">'https://...'</span> },
        caption: <span class="s">'Foto 2'</span>
      }
    ]
  }
})</code></pre></div>

    <div id="p-poll" class="pane">
<pre><code><span class="k">await</span> sock.<span class="fn">sendMessage</span>(jid, {
  poll: {
    name: <span class="s">'Pilih warna favoritmu!'</span>,
    values: [
      <span class="s">'Merah 🔴'</span>,
      <span class="s">'Hijau 🟢'</span>,
      <span class="s">'Biru 🔵'</span>
    ],
    selectableCount: <span class="nu">1</span>
  }
})</code></pre></div>
  </div>
</div>

<div class="sec fu">
  <div class="sec-head"><span class="sec-lbl">auth state options</span><span class="sec-line"></span></div>
  <div class="auth-list">
    <div class="arow">
      <span class="adot" style="background:var(--teal)"></span>
      <div>
        <div class="aname">Multi-file (default)</div>
        <div class="acode">import { useMultiFileAuthState } from 'jexkcode'</div>
        <div class="adesc">Stores per-key JSON files in a folder.</div>
      </div>
    </div>
    <div class="arow">
      <span class="adot" style="background:var(--blue)"></span>
      <div>
        <div class="aname">Single file</div>
        <div class="acode">import { useSingleFileAuthState } from 'jexkcode'</div>
        <div class="adesc">Everything in one auth.json file.</div>
      </div>
    </div>
    <div class="arow">
      <span class="adot" style="background:var(--purple)"></span>
      <div>
        <div class="aname">SQLite</div>
        <div class="acode">import { useSQLiteAuthState } from 'jexkcode'</div>
        <div class="adesc">Persistent auth with SQLite. Recommended for production.</div>
      </div>
    </div>
  </div>
</div>

<div class="foot fu">
  <span class="fl">MIT License © 2026 jexkpinkman</span>
  <a class="fr" href="https://github.com/jexkpinkman/JexkCode-baileys">github.com/jexkpinkman →</a>
</div>

</div>

<script>
/* ── BACKGROUND PARTICLES ── */
const c = document.getElementById('bg')
const ctx = c.getContext('2d')
let W, H, pts = []

function resize(){
  W = c.width = window.innerWidth
  H = c.height = window.innerHeight
  pts = Array.from({length:60},()=>({
    x:Math.random()*W, y:Math.random()*H,
    vx:(Math.random()-.5)*.25, vy:(Math.random()-.5)*.25,
    r:Math.random()*1.6+.4
  }))
}

function drawBg(){
  ctx.clearRect(0,0,W,H)
  for(let i=0;i<pts.length;i++){
    const p=pts[i]
    p.x+=p.vx; p.y+=p.vy
    if(p.x<0||p.x>W) p.vx*=-1
    if(p.y<0||p.y>H) p.vy*=-1
    ctx.beginPath()
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
    ctx.fillStyle='rgba(0,200,150,.5)'
    ctx.fill()
    for(let j=i+1;j<pts.length;j++){
      const q=pts[j]
      const dx=p.x-q.x, dy=p.y-q.y
      const d=Math.sqrt(dx*dx+dy*dy)
      if(d<120){
        ctx.beginPath()
        ctx.moveTo(p.x,p.y)
        ctx.lineTo(q.x,q.y)
        ctx.strokeStyle=`rgba(0,200,150,${(1-d/120)*.13})`
        ctx.lineWidth=.5
        ctx.stroke()
      }
    }
  }
  requestAnimationFrame(drawBg)
}

resize()
window.addEventListener('resize', resize)
drawBg()

/* ── TERMINAL TYPEWRITER ── */
const lines = [
  {t:'cmd', txt:'npm install github:jexkpinkman/JexkCode-baileys'},
  {t:'out', txt:'added 89 packages in 3.2s'},
  {t:'cmd', txt:'node index.js'},
  {t:'out', txt:'Connecting to WhatsApp...'},
  {t:'ok',  txt:'✅ Connected! jexkcode v1.1.0 ready'},
  {t:'cmd', txt:''},
]
const ts = document.getElementById('tscreen')

function typeLine(idx){
  if(idx>=lines.length) return
  const l = lines[idx]
  const div = document.createElement('div')
  div.className = 'tline'
  if(l.t==='cmd'){
    div.innerHTML = `<span class="tpfx">~/jexkbot $</span><span class="tcmd"></span><span class="tcursor"></span>`
    div.classList.add('show')
    ts.appendChild(div)
    if(l.txt==='') return
    const span = div.querySelector('.tcmd')
    const cursor = div.querySelector('.tcursor')
    let ci = 0
    const iv = setInterval(()=>{
      if(ci<=l.txt.length){ span.textContent=l.txt.slice(0,ci); ci++ }
      else {
        clearInterval(iv)
        if(cursor) cursor.remove()
        setTimeout(()=>typeLine(idx+1), 280)
      }
    }, 28)
  } else if(l.t==='ok'){
    div.innerHTML = `<span class="tok">${l.txt}</span>`
    div.classList.add('show')
    ts.appendChild(div)
    setTimeout(()=>typeLine(idx+1), 500)
  } else {
    div.innerHTML = `<span class="tout">${l.txt}</span>`
    div.classList.add('show')
    ts.appendChild(div)
    setTimeout(()=>typeLine(idx+1), 400)
  }
}
setTimeout(()=>typeLine(0), 900)

/* ── TABS ── */
const fnames = {btn:'button.js',airich:'airich.js',album:'album.js',poll:'poll.js'}
let cur = 'btn'

function posInk(el){
  const tabs = document.getElementById('tabs')
  const ink = document.getElementById('tink')
  const r = el.getBoundingClientRect()
  const tr = tabs.getBoundingClientRect()
  ink.style.left = (r.left - tr.left + tabs.scrollLeft) + 'px'
  ink.style.width = r.width + 'px'
}

function sw(btn, id){
  if(id===cur) return
  document.getElementById('p-'+cur).classList.remove('show')
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'))
  btn.classList.add('on')
  posInk(btn)
  const next = document.getElementById('p-'+id)
  next.classList.add('show','ein')
  setTimeout(()=>next.classList.remove('ein'), 240)
  document.getElementById('cfn').textContent = fnames[id]||id+'.js'
  cur = id
}

/* ── COPY ── */
function cpI(){
  navigator.clipboard.writeText('npm install github:jexkpinkman/JexkCode-baileys')
  const b=document.getElementById('ic'); b.textContent='copied'; b.classList.add('ok')
  setTimeout(()=>{ b.textContent='copy'; b.classList.remove('ok') }, 1800)
}

function cpEl(id){
  const el=document.getElementById(id)
  if(el) navigator.clipboard.writeText(el.innerText.trim())
}

function cpPane(){
  const el=document.getElementById('p-'+cur)
  if(el) navigator.clipboard.writeText(el.innerText.trim())
}

window.addEventListener('load',()=>{
  const first=document.querySelector('.tab.on')
  if(first) posInk(first)
})

/* ── SCROLL FADE ── */
const io = new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){
      setTimeout(()=>e.target.classList.add('vis'), i*60)
      io.unobserve(e.target)
    }
  })
},{threshold:0.06})
document.querySelectorAll('.fu').forEach(el=>io.observe(el))
</script>
</body>
</html>
