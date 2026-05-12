document.addEventListener('DOMContentLoaded', () => {
  const cur = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (cur && ring) {
    let mx=0,my=0,rx=0,ry=0;
    document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
    (function tick() {
      cur.style.left=mx+'px'; cur.style.top=my+'px';
      rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
      ring.style.left=rx+'px'; ring.style.top=ry+'px';
      requestAnimationFrame(tick);
    })();
  }

  const nav = document.querySelector('nav');
  if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50));

  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href').split('/').pop() === path) a.classList.add('active');
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  const barObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const f = e.target; const w = f.dataset.width||'0';
        setTimeout(() => { f.style.transition='width 1.1s cubic-bezier(.4,0,.2,1)'; f.style.width=w+'%'; }, 200);
        barObs.unobserve(f);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.skill-bar-fill').forEach(el => barObs.observe(el));

  function animCount(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix||'';
    const dec = String(target).includes('.');
    const dur = 1600; const start = performance.now();
    (function step(now) {
      const p = Math.min((now-start)/dur,1);
      const ease = 1-Math.pow(1-p,3);
      el.textContent = (dec ? (target*ease).toFixed(2) : Math.round(target*ease)) + suffix;
      if (p<1) requestAnimationFrame(step);
    })(performance.now());
  }
  const cObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animCount(e.target); cObs.unobserve(e.target); } });
  }, { threshold: 0.5 });
  document.querySelectorAll('.count-num').forEach(el => cObs.observe(el));

  document.body.style.opacity='0'; document.body.style.transition='opacity .4s ease';
  requestAnimationFrame(() => requestAnimationFrame(() => document.body.style.opacity='1'));

  document.querySelectorAll('a[href]').forEach(a => {
    const h = a.getAttribute('href');
    if (!h||h.startsWith('#')||h.startsWith('http')||h.startsWith('mailto')) return;
    a.addEventListener('click', e => {
      e.preventDefault(); document.body.style.opacity='0';
      setTimeout(() => location.href=h, 350);
    });
  });
});
