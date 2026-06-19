/* ============================================================
   NLP Midsem Study Hub — shared navigation + UI behaviour
   Injects sidebar/topbar into every page so chrome stays in sync.
   Works over file:// (no fetch/XHR used).
   ============================================================ */

const NAV = {
  topics: [
    { id:"index",            file:"index.html",            ico:"🏠", label:"Home",                          mk:"" },
    { id:"01-introduction",  file:"01-introduction.html",  ico:"🚀", label:"1 · Introduction & Applications", mk:"4" },
    { id:"02-language-models",file:"02-language-models.html",ico:"🔢", label:"2 · Language Models (N-gram)",   mk:"4" },
    { id:"03-neural-llm",    file:"03-neural-llm.html",    ico:"🧠", label:"3 · Neural LM · LLM · Prompting", mk:"4" },
    { id:"04-vector-semantics",file:"04-vector-semantics.html",ico:"📐", label:"4 · Vector Semantics",        mk:"4" },
    { id:"05-word-embeddings",file:"05-word-embeddings.html",ico:"✨", label:"5 · Word Embeddings",           mk:"5" },
    { id:"06-pos-tagging",   file:"06-pos-tagging.html",   ico:"🏷️", label:"6 · POS Tagging",                mk:"4" },
    { id:"07-pos-models",    file:"07-pos-models.html",    ico:"⚙️", label:"7 · Statistical/ML/Neural POS",  mk:"4" },
  ],
  revision: [
    { id:"revision", file:"revision.html", ico:"📝", label:"Revision & Solved Problems", mk:"30" },
  ]
};

function currentId(){
  let f = location.pathname.split("/").pop() || "index.html";
  if(f === "" ) f = "index.html";
  return f.replace(".html","");
}

function buildLink(item, active){
  const mk = item.mk ? `<span class="mk">${item.mk}m</span>` : "";
  return `<a class="nav-link ${item.id===active?"active":""}" href="${item.file}">
            <span class="ico">${item.ico}</span><span>${item.label}</span>${mk}
          </a>`;
}

function renderNav(){
  const active = currentId();
  const links = (arr)=>arr.map(i=>buildLink(i,active)).join("");

  const sidebar = document.createElement("aside");
  sidebar.id = "sidebar";
  sidebar.innerHTML = `
    <a class="brand" href="index.html">
      <span class="logo">NLP</span>
      <span><b>NLP Midsem Hub</b><span>EC2 · Theory · Numericals · Revision</span></span>
    </a>
    <div class="nav-group">Study Topics</div>
    ${links(NAV.topics)}
    <div class="nav-group">Exam Prep</div>
    ${links(NAV.revision)}
    <div class="side-foot">Built from Dr. Chetana Gavankar's lecture slides (Sessions 1–7).<br>Total midsem weight: <b>30 marks</b>.</div>
  `;

  const topbar = document.createElement("div");
  topbar.id = "topbar";
  topbar.innerHTML = `
    <span class="logo">N</span>
    <b>NLP Midsem Hub</b>
    <button id="hamburger" aria-label="Open menu">☰</button>
  `;

  const backdrop = document.createElement("div");
  backdrop.id = "backdrop";

  // Insert chrome
  document.body.insertBefore(topbar, document.body.firstChild);
  document.body.insertBefore(sidebar, document.body.firstChild);
  document.body.appendChild(backdrop);

  // progress bar
  const pb = document.createElement("div"); pb.id="progress-bar";
  document.body.appendChild(pb);

  // mobile toggle
  const ham = document.getElementById("hamburger");
  const toggle = (open)=>{
    sidebar.classList.toggle("open", open);
    backdrop.classList.toggle("show", open);
  };
  ham.addEventListener("click", ()=>toggle(!sidebar.classList.contains("open")));
  backdrop.addEventListener("click", ()=>toggle(false));
  sidebar.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>toggle(false)));
}

function progressBar(){
  const pb = document.getElementById("progress-bar");
  if(!pb) return;
  const h = document.documentElement;
  const sc = h.scrollTop || document.body.scrollTop;
  const max = (h.scrollHeight - h.clientHeight) || 1;
  pb.style.width = (sc/max*100) + "%";
}

document.addEventListener("DOMContentLoaded", ()=>{
  renderNav();
  window.addEventListener("scroll", progressBar, {passive:true});
  progressBar();
});

/* MathJax configuration — uses \( \) inline and \[ \] display only,
   so literal $ signs and currency in prose never break.            */
window.MathJax = {
  tex: { inlineMath: [['\\(','\\)']], displayMath: [['\\[','\\]']] },
  svg: { fontCache: 'global' },
  options: { skipHtmlTags: ['script','noscript','style','textarea','pre'] }
};
