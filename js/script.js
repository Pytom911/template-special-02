/* ============ CONFIG: ganti semua data di sini ============ */
const CONFIG = {
  name: "[NAME]",
  yourName: "[YOUR NAME]",
  anniversaryDate: "[ANNIVERSARY DATE]",
  startDate: "[RELATIONSHIP START DATE]",
  startISO: "2022-02-14",
  coverNote: "Sebuah buku kecil berisi kita.",
  timeline: [
    {d:"Awal cerita", t:"Hari pertama kita ketemu. Aku belum tahu, ternyata kamu akan jadi rumahku."},
    {d:"Mulai dekat", t:"Obrolan singkat berubah jadi telepon sampai larut malam. Aku mulai nunggu notifikasi dari kamu."},
    {d:"[RELATIONSHIP START DATE]", t:"Hari kita resmi bareng. Deg-degan, tapi aku nggak pernah seyakin itu."},
    {d:"[ANNIVERSARY DATE]", t:"Dan kita masih di sini, masih saling pilih, setiap hari."}
  ],
  photoBase: "https://images.unsplash.com/",
  photos: [
    {id:"photo-1518199266791-5375a83190b7", cap:"hari yang manis"},
    {id:"photo-1529634806980-85c3dd6d34ac", cap:"selalu bareng kamu"},
    {id:"photo-1516589178581-6cd7833ae3b2", cap:"senyum favoritku"},
    {id:"photo-1522673607200-164d1b6ce486", cap:"genggam tangan ini"},
    {id:"photo-1474552226712-ac0f0961a954", cap:"jalan-jalan sore"},
    {id:"photo-1511895426328-dc8714191300", cap:"kita & tawa kita"},
    {id:"photo-1469371670807-013ccf25f16a", cap:"rumahku = kamu"},
    {id:"photo-1518568814500-bf0f8d125f46", cap:"selamanya, ya?"}
  ],
  letter: [
    "Untuk [NAME] tersayang,",
    "Aku nggak pandai merangkai kata, jadi aku tulis saja seadanya. Terima kasih sudah sabar menghadapi aku di hari-hari yang berantakan, dan tetap tertawa di hari-hari yang biasa saja.",
    "Bersamamu, hal sederhana jadi terasa istimewa: makan berdua, diam-diaman di motor, atau sekadar kirim stiker lucu jam dua pagi.",
    "Selamat ulang tahun hubungan kita. Semoga kita terus jadi tim yang saling jaga, sampai halaman terakhir dan seterusnya.",
    "Dengan sayang yang banyak,"
  ],
  signature: "[YOUR NAME]",
  notes: [
    "Aku bangga banget sama kamu, bahkan di hari kamu nggak bangga sama diri sendiri.",
    "Senyummu itu obat capek paling ampuh.",
    "Kalau kamu lagi sedih, panggil aku. Selalu.",
    "Aku suka cara kamu ketawa sampai matamu hilang.",
    "Makasih sudah jadi tempat pulangku.",
    "Kamu itu cukup. Selalu cukup."
  ],
  memories: [
    {f:"Pertama kali…", b:"Pertama kali kita jalan bareng, aku gugup sampai salah pesan minuman. Kamu cuma ketawa. Aku ingat itu."},
    {f:"Hari hujan", b:"Kita pernah kehujanan dan malah nggak mau berteduh. Basah, tapi bahagia."},
    {f:"Lagu kita", b:"Tiap dengar lagu itu, aku langsung ingat kamu. Tulis judulnya di sini ya!"},
    {f:"Makanan favorit", b:"Tempat makan langganan kita jadi saksi bisu banyak cerita dan banyak tawa."}
  ],
  quiz: [
    {q:"Di mana kencan pertama kita?", o:["Kafe kecil","Taman kota","Bioskop"], a:0},
    {q:"Apa makanan favorit kita berdua?", o:["Bakso","Nasi goreng","Pizza"], a:1},
    {q:"Siapa yang pertama bilang \"sayang\"?", o:["Aku","Kamu","Barengan"], a:2}
  ],
  choose: [
    [["Pantai 🌊","Wah, bakal kita bikin istana pasir paling jelek sedunia!"],["Gunung ⛰️","Siap! Tapi kamu yang bawa tenda ya 😆"]],
    [["Nonton film 🎬","Oke, aku siapin popcorn dan selimut!"],["Piknik 🧺","Aku bawa bekal, kamu bawa senyum!"]],
    [["Kopi ☕","Satu gelas berdua juga boleh."],["Boba 🧋","Topping extra, demi kamu!"]]
  ],
  secret: {hint:"Petunjuk: tanggal jadian kita (format DDMM).", code:"1402", message:"Rahasianya: aku sudah mantap dari awal. Kamu satu-satunya yang aku mau, hari ini dan nanti. 💍"},
  gift: "Hadiahmu: satu kencan kejutan yang aku rencanakan khusus untukmu! Siap-siap ya 🎟️💕",
  final: "Halaman ini habis, tapi buku kita belum. Masih banyak halaman kosong yang menunggu kita isi bersama."
};
/* ============ END CONFIG ============ */

const C=CONFIG, app=document.getElementById('app');
const tok=s=>s.replace(/\[NAME\]/g,C.name).replace(/\[YOUR NAME\]/g,C.yourName);
const rots=[-4,3,-2,5,-5,2,4,-3], noteCol=['#fff2a8','#ffc9d4','#ffd5b5','#ffe0e6','#fff2a8','#ffd5b5'];
const DD='<i class="bi bi-heart dd text-[#d64550] text-3xl" style="top:12px;right:16px"></i><i class="bi bi-flower1 dd text-pink-400 text-4xl" style="bottom:8px;left:10px;animation-delay:-1s"></i><i class="bi bi-stars dd text-amber-400 text-2xl" style="bottom:14px;right:22px;animation-delay:-2s"></i>';
const sec=(id,t,sub,b,r=0)=>`<section id="${id}" class="reveal mx-auto max-w-3xl px-3 my-14"><div class="paper relative p-5 pb-12 sm:p-9 sm:pb-14" style="--r:${r}deg"><i class="tape"></i>${DD}<h2 class="hand text-5xl sm:text-6xl text-[#d64550] leading-none">${t}</h2><p class="mb-6 mt-1 opacity-80">${sub}</p>${b}</div></section>`;
const days=C.startISO?Math.floor((Date.now()-new Date(C.startISO))/864e5):NaN;

let h=`<section class="reveal in min-h-screen flex items-center justify-center px-3 py-10"><div class="paper relative p-8 sm:p-12 text-center max-w-md w-full" style="--r:-1.5deg"><i class="tape"></i>${DD}
<span class="stk absolute text-5xl" style="top:-18px;left:-8px">🍓</span><span class="stk absolute text-5xl" style="bottom:50px;right:-10px;animation-delay:-1s">🧸</span><span class="stk absolute text-4xl" style="top:90px;right:-12px;animation-delay:-.5s">🌸</span>
<p class="hand text-3xl">${C.anniversaryDate}</p>
<h1 class="hand text-6xl sm:text-7xl text-[#d64550] leading-[.95] my-4">Happy<br>Anniversary</h1>
<div class="hand text-4xl my-3"><span class="bg-[#ffc9d4] px-3 rounded">${C.name}</span><br><i class="bi bi-heart-fill text-[#d64550] text-2xl"></i><br><span class="bg-[#ffd5b5] px-3 rounded">${C.yourName}</span></div>
<p class="opacity-80">${C.coverNote}</p>
<a href="#story" class="hand text-2xl text-[#d64550] block mt-6 animate-bounce">geser, buka halaman berikutnya ↓</a></div></section>`;

h+=sec('story','Our Story','Perjalanan kecil kita, dari awal sampai sekarang.',
 `<div class="relative pl-8 border-l-4 border-dotted border-[#d64550]/60 space-y-7">${C.timeline.map(t=>`<div class="relative"><i class="bi bi-heart-fill absolute -left-[2.6rem] top-0 text-[#d64550] text-xl bg-[#fff6e5] rounded-full"></i><p class="hand text-3xl text-[#d64550] leading-none">${t.d}</p><p>${tok(t.t)}</p></div>`).join('')}</div>`,-.8);

h+=sec('photos','Album Foto Kita','Ditempel pakai selotip, biar kenangannya nggak lepas.',
 `<div class="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-3">${C.photos.map((p,i)=>`<figure class="pol" style="--r:${rots[i%8]}deg"><i class="tape" style="background:${i%2?'rgba(255,213,181,.85)':'rgba(255,170,190,.75)'}"></i><img loading="lazy" alt="${p.cap}" src="${C.photoBase}${p.id}?auto=format&fit=crop&w=500&q=70" onerror="this.style.opacity=.3"><p>${p.cap}</p></figure>`).join('')}</div>`,.6);

h+=sec('letter','A Letter for You','Dibaca pelan-pelan ya.',
 `<div class="letter">${C.letter.map(l=>`<p class="mb-[32px]">${tok(l)}</p>`).join('')}<p class="text-right text-4xl text-[#d64550]">${tok(C.signature)} <i class="bi bi-heart-fill text-2xl"></i></p></div>`,-.5);

h+=sec('notes','Little Things I Want You to Know','Tempel di kulkas hatimu.',
 `<div class="grid grid-cols-2 sm:grid-cols-3 gap-5 pt-3">${C.notes.map((n,i)=>`<div class="note" style="--r:${rots[(i+3)%8]}deg;background:${noteCol[i%6]}">${tok(n)}</div>`).join('')}</div>`,.5);

h+=sec('memories','Kartu Kenangan','Ketuk kartunya untuk membuka cerita.',
 `<div class="grid grid-cols-2 gap-4">${C.memories.map(m=>`<div class="fc" onclick="this.classList.toggle('o')"><div class="fi"><div class="f">${m.f} 💭</div><div class="b">${tok(m.b)}</div></div></div>`).join('')}</div>`,-.6);

h+=sec('quiz','Seberapa Kenal Kamu Sama Kita?','Quiz kecil. Jawab jujur, ya!','<div id="qz"></div>',.7);

h+=sec('game','Tangkap Hati-Hati Kecil','Ketuk sebanyak mungkin hati yang jatuh dalam 15 detik.',
 `<div class="flex items-center justify-between hand text-3xl mb-2"><span>Skor: <b id="sc" class="text-[#d64550]">0</b></span><span><i class="bi bi-clock"></i> <b id="tm">15</b>s</span></div>
 <div id="arena" class="relative h-72 overflow-hidden rounded-xl border-4 border-dashed border-[#ffc9d4] bg-white/60 select-none"><div id="gmsg" class="absolute inset-0 flex items-center justify-center text-center p-4"><button class="btn" onclick="startGame()">Mulai main</button></div></div>`,-.5);

h+=sec('choose','Pilih Salah Satu','Dua pilihan, satu favorit. Mana kita?',
 `<div class="space-y-5">${C.choose.map((r,i)=>`<div><div class="grid grid-cols-2 gap-3">${r.map((o,j)=>`<button class="opt hand text-2xl" onclick="pick(this,${i},${j})">${o[0]}</button>`).join('')}</div><p id="ch${i}" class="hand text-2xl text-[#d64550] mt-1 min-h-[1.8rem]"></p></div>`).join('')}</div>`,.5);

h+=sec('secret','Pesan Rahasia','Ada yang terkunci di sini. ' + C.secret.hint,
 `<div class="text-center"><div class="unlock-wrap inline-block relative"><i id="lock" class="bi bi-lock-fill text-6xl text-[#d64550] inline-block"></i></div><div class="flex gap-2 justify-center mt-3"><input id="code" inputmode="numeric" maxlength="8" placeholder="kode" class="hand text-3xl w-32 text-center rounded-lg border-2 border-dashed border-[#d64550] bg-white outline-none"><button class="btn" onclick="unlock()">Buka</button></div><p id="smsg" class="hand text-3xl mt-4 text-[#d64550]"></p></div>`,-.6);

h+=sec('gift','Ada Hadiah Buat Kamu','Ketuk kotaknya, ya!',
 `<div class="text-center"><button id="gbox" onclick="openGift()" class="text-[9rem] leading-none stk" aria-label="Buka hadiah">🎁</button><p id="gmsg2" class="hand text-3xl mt-2 text-[#d64550]"></p></div>`,.6);

h+=`<section id="final" class="reveal mx-auto max-w-md px-3 my-14"><div class="paper relative p-8 pb-12 text-center" style="--r:-1deg"><i class="tape"></i>${DD}
<p class="hand text-3xl">halaman terakhir</p>
<h2 class="hand text-6xl text-[#d64550] leading-none my-3">Aku sayang kamu,<br>${C.name}</h2>
<p>${C.final}</p>
${isNaN(days)?'':`<p class="hand text-3xl mt-5 bg-[#ffc9d4] inline-block px-4 rounded -rotate-2">${days.toLocaleString('id-ID')} hari bersama kamu 💕</p>`}
<p class="hand text-3xl mt-6">— ${C.yourName}</p>
<p class="mt-4 text-sm opacity-70">Sejak ${C.startDate} · Selamat ${C.anniversaryDate}</p>
<span class="stk absolute text-5xl" style="bottom:-14px;left:-10px">💌</span><span class="stk absolute text-5xl" style="top:-16px;right:-8px;animation-delay:-1s">🌷</span>
<button id="btnRestart" type="button" class="btn mt-6">Baca lagi dari awal</button></div></section>`;
app.innerHTML=h;

/* --- page-turn reveal --- */
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.1});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

/* --- loader --- */
const ld=document.getElementById('ld');
const openBook=()=>{if(ld.classList.contains('go'))return;ld.classList.add('go');setTimeout(()=>ld.style.opacity=0,900);setTimeout(()=>ld.remove(),1700)};
if(ld){
  ld.onclick=openBook;
  setTimeout(openBook,6000);
}

/* --- quiz --- */
let qi=0,qs=0;
function showQ(){const box=document.getElementById('qz'),q=C.quiz[qi];
 if(!q){box.innerHTML=`<p class="hand text-4xl text-[#d64550]">Skor kamu: ${qs}/${C.quiz.length}</p><p class="mb-3">${qs==C.quiz.length?'Sempurna! Kamu memang paling tahu tentang kita 🥰':qs>0?'Lumayan! Tapi nanti kita ulang kenangannya bareng ya 😘':'Hmm… kita perlu lebih banyak kencan nih 😆'}</p><button class="btn" onclick="qi=0;qs=0;showQ()">Main lagi</button>`;return}
 box.innerHTML=`<p class="hand text-3xl mb-3">${qi+1}. ${q.q}</p><div class="space-y-2">${q.o.map((o,i)=>`<button class="opt" onclick="ans(this,${i})">${o}</button>`).join('')}</div>`}
function ans(el,i){const q=C.quiz[qi],bs=[...el.parentNode.children];if(bs.some(b=>b.disabled))return;bs.forEach(b=>b.disabled=true);
 bs[q.a].classList.add('ok');if(i==q.a){qs++;confetti(20)}else el.classList.add('no');setTimeout(()=>{qi++;showQ()},1100)}
showQ();

/* --- game --- */
let score=0,tleft=15,gt,sp;
function startGame(){
  clearInterval(gt);clearInterval(sp);
  score=0;tleft=15;
  const scEl=document.getElementById('sc');
  const tmEl=document.getElementById('tm');
  const gmsgEl=document.getElementById('gmsg');
  const arenaEl=document.getElementById('arena');
  if(scEl) scEl.textContent=0;
  if(tmEl) tmEl.textContent=15;
  if(gmsgEl) gmsgEl.style.display='none';
  if(arenaEl) arenaEl.querySelectorAll('.fall').forEach(e=>e.remove());
  sp=setInterval(()=>{
    const arena=document.getElementById('arena');
    if(!arena) return;
    const e=document.createElement('button');e.className='fall';e.textContent=['💖','💗','🍓','🌸','⭐'][Math.random()*5|0];e.style.left=Math.random()*85+'%';
    e.onclick=()=>{
      score++;
      const s=document.getElementById('sc');
      if(s) s.textContent=score;
      e.textContent='✨';e.style.pointerEvents='none';setTimeout(()=>e.remove(),200)
    };
    arena.appendChild(e);setTimeout(()=>e.remove(),3300)
  },520);
  gt=setInterval(()=>{
    const tmNode=document.getElementById('tm');
    const arena=document.getElementById('arena');
    const gmsg=document.getElementById('gmsg');
    if(tmNode) tmNode.textContent=--tleft;
    if(tleft<=0){
      clearInterval(gt);clearInterval(sp);
      if(arena) arena.querySelectorAll('.fall').forEach(e=>e.remove());
      if(gmsg){
        gmsg.style.display='flex';
        gmsg.innerHTML=`<div><p class="hand text-4xl text-[#d64550]">Kamu dapat ${score} 💖</p><p class="mb-3">${score>=15?'Jago banget, sama kayak kamu nangkep hatiku 😚':'Seru! Coba lagi biar lebih banyak!'}</p><button class="btn" onclick="startGame()">Main lagi</button></div>`;
      }
      if(score>=15)confetti(60)
    }
  },1000)
}

/* --- choose one --- */
function pick(b,i,j){[...b.parentNode.children].forEach(x=>x.classList.remove('sel'));b.classList.add('sel');const ch=document.getElementById('ch'+i); if(ch) ch.textContent=C.choose[i][j][1]}

/* --- secret: animasi special --- */
function unlock(){
  const codeEl=document.getElementById('code');
  const smsgEl=document.getElementById('smsg');
  const lockEl=document.getElementById('lock');
  if(!codeEl||!smsgEl||!lockEl) return;
  const v=codeEl.value.trim();
  if(v===C.secret.code){
    lockEl.className='bi bi-unlock-fill text-6xl text-[#d64550] inline-block ok';
    smsgEl.textContent='';
    smsgEl.classList.remove('reveal-msg');
    void lockEl.offsetWidth;

    let wrap=lockEl.closest('.unlock-wrap');
    if(!wrap){
      wrap=document.createElement('div');
      wrap.className='unlock-wrap inline-block relative';
      lockEl.parentNode.insertBefore(wrap, lockEl);
      wrap.appendChild(lockEl);
    }
    let ring=wrap.querySelector('.unlock-ring');
    if(!ring){
      ring=document.createElement('div');
      ring.className='unlock-ring';
      wrap.appendChild(ring);
    }
    ring.classList.remove('go'); void ring.offsetWidth; ring.classList.add('go');

    const emojis=['💖','💗','💝','✨','🌸'];
    for(let i=0;i<8;i++){
      const h=document.createElement('span');
      h.className='heart-burst';
      h.textContent=emojis[i%emojis.length];
      h.style.left=(50+(Math.random()-0.5)*60)+'%';
      h.style.animationDelay=(i*0.07)+'s';
      wrap.appendChild(h);
      setTimeout(()=>h.remove(), 1200+i*70);
    }

    setTimeout(()=>{ smsgEl.textContent=C.secret.message; smsgEl.classList.add('reveal-msg'); }, 380);
    confetti(90);
    codeEl.value='';
  } else {
    smsgEl.textContent='Belum tepat, coba ingat lagi ya 🥺';
    lockEl.classList.add('shake');
    setTimeout(()=>lockEl.classList.remove('shake'),600);
  }
}

/* --- gift + confetti --- */
function openGift(){
  const g=document.getElementById('gbox');
  const gmsg2=document.getElementById('gmsg2');
  if(!g) return;
  g.classList.add('shake');
  setTimeout(()=>{
    g.textContent='💝';
    g.onclick=null;
    if(gmsg2) gmsg2.textContent=C.gift;
    confetti(160)
  },600)
}
function confetti(n=140){
  const c=document.getElementById('cv');
  if(!c) return;
  const x=c.getContext('2d');
  const dpr=window.devicePixelRatio||1;
  c.width=window.innerWidth*dpr;
  c.height=window.innerHeight*dpr;
  c.style.width=window.innerWidth+'px';
  c.style.height=window.innerHeight+'px';
  x.setTransform(dpr,0,0,dpr,0,0);
  const cols=['#d64550','#ffc9d4','#ffd5b5','#ffe08a','#ff8fa3'];
  const p=Array.from({length:n},()=>({x:window.innerWidth/2,y:window.innerHeight*.65,vx:(Math.random()-.5)*16,vy:-Math.random()*17-4,s:6+Math.random()*7,c:cols[Math.random()*5|0],r:Math.random()*6,h:Math.random()<.4}));
  let f=0;(function d(){
    x.clearRect(0,0,window.innerWidth,window.innerHeight);
    p.forEach(q=>{q.x+=q.vx;q.y+=q.vy;q.vy+=.35;q.r+=.12;x.fillStyle=q.c;
     if(q.h){x.font=q.s*2+'px serif';x.fillText('♥',q.x,q.y)}else{x.save();x.translate(q.x,q.y);x.rotate(q.r);x.fillRect(0,0,q.s,q.s*.6);x.restore()}});
    if(++f<220) requestAnimationFrame(d); else x.clearRect(0,0,window.innerWidth,window.innerHeight)
  })()
}

/* --- fix: Baca lagi dari awal -> scroll smooth + reset total --- */
document.getElementById('btnRestart')?.addEventListener('click', ()=>{
  qi=0;qs=0;showQ();
  clearInterval(gt);clearInterval(sp);
  score=0; tleft=15;
  const scEl=document.getElementById('sc'); if(scEl) scEl.textContent=0;
  const tmEl=document.getElementById('tm'); if(tmEl) tmEl.textContent=15;
  const arenaEl=document.getElementById('arena'); if(arenaEl) arenaEl.querySelectorAll('.fall').forEach(e=>e.remove());
  const gmsgEl=document.getElementById('gmsg');
  if(gmsgEl){ gmsgEl.style.display='flex'; gmsgEl.innerHTML='<button class="btn" onclick="startGame()">Mulai main</button>'; }

  document.querySelectorAll('.opt.sel').forEach(b=>b.classList.remove('sel'));
  document.querySelectorAll('[id^="ch"]').forEach(p=>p.textContent='');
  document.querySelectorAll('.fc.o').forEach(el=>el.classList.remove('o'));

  const codeEl=document.getElementById('code'); if(codeEl) codeEl.value='';
  const smsgEl=document.getElementById('smsg'); if(smsgEl){ smsgEl.textContent=''; smsgEl.classList.remove('reveal-msg'); }
  const lockEl=document.getElementById('lock'); if(lockEl){
    lockEl.className='bi bi-lock-fill text-6xl text-[#d64550] inline-block';
    const wrap=lockEl.closest('.unlock-wrap');
    if(wrap) wrap.querySelectorAll('.heart-burst,.unlock-ring').forEach(e=>{
      if(e.classList.contains('unlock-ring')) e.classList.remove('go');
      else e.remove();
    });
  }

  const gboxEl=document.getElementById('gbox');
  if(gboxEl){ gboxEl.textContent='🎁'; gboxEl.onclick=openGift; gboxEl.classList.remove('shake'); }
  const gmsg2El=document.getElementById('gmsg2'); if(gmsg2El) gmsg2El.textContent='';

  document.querySelectorAll('.reveal').forEach(el=>{ el.classList.remove('in'); io.observe(el); });
  window.scrollTo({top:0, behavior:'smooth'});
  confetti(80);
});
