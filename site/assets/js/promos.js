// Promociones: se ocultan solas después de la fecha en data-hasta y,
// en celular, avanzan una por una cada 5 segundos.
(function () {
  const sec = document.getElementById('promociones');
  if (!sec) return;
  const hasta = Date.parse(sec.dataset.hasta || '');
  if (hasta && Date.now() >= hasta) { sec.remove(); document.querySelectorAll('[data-promo-link]').forEach(l => l.remove()); return; }

  const track = sec.querySelector('.promo-track');
  const cards = [...track.children];
  const dots = sec.querySelector('.promo-dots');
  cards.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Ver promoción ' + (i + 1));
    b.onclick = () => { go(i); stop(); };
    dots.append(b);
  });

  const carrusel = () => track.scrollWidth > track.clientWidth + 4;
  const actual = () => Math.round(track.scrollLeft / (cards[0].offsetWidth || 1));
  function go(i) { track.scrollTo({ left: cards[i].offsetLeft - track.offsetLeft, behavior: quieto ? 'instant' : 'smooth' }); }
  function marcar() {
    const index = actual();
    [...dots.children].forEach((dot, i) => {
      dot.classList.toggle('on', i === index);
      dot.setAttribute('aria-current', String(i === index));
    });
  }
  track.addEventListener('scroll', () => requestAnimationFrame(marcar), { passive: true });
  marcar();

  let timer = null;
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function start() {
    if (quieto || timer) return;
    timer = setInterval(() => { if (carrusel()) go((actual() + 1) % cards.length); }, 5000);
  }
  function stop() { clearInterval(timer); timer = null; }
  ['touchstart', 'pointerdown', 'focusin'].forEach(ev => track.addEventListener(ev, stop, { passive: true }));
  start();
})();
