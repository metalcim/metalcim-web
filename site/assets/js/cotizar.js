// Cuestionario de cotización: en celular vive en una ventana emergente;
// en computadora se queda dentro de la sección "Hablemos de tu siguiente obra".
(function () {
  const form = document.getElementById('quote');
  const dlg = document.getElementById('quote-dialog');
  const section = document.getElementById('cotizar');
  if (!form || !dlg || !section) return;
  const home = form.parentNode, next = form.nextSibling, slot = dlg.querySelector('.quote-slot');
  const movil = matchMedia('(max-width: 900px)');
  const title = section.querySelector('h2');
  title.setAttribute('data-quote-open', '');

  function acomodar() {
    if (movil.matches) { if (form.parentNode !== slot) slot.append(form); }
    else { if (dlg.open) dlg.close(); if (form.parentNode !== home) home.insertBefore(form, next); }
  }
  function abrir() {
    if (!movil.matches) return false;
    acomodar();
    if (!dlg.open) dlg.showModal();
    return true;
  }
  movil.addEventListener('change', acomodar);
  acomodar();

  document.addEventListener('click', e => {
    if (e.target.closest('[data-quote-close]')) { dlg.close(); return; }
    if (e.target.closest('[data-quote-open]')) { abrir(); return; }
    const link = e.target.closest('a[href="#cotizar"]');
    if (link && movil.matches) {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(abrir, 450);
    }
  });
  // Cerrar al tocar fuera de la ventana
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  // Si alguien llega con metalcim.com.mx/#cotizar desde el celular
  if (location.hash === '#cotizar') setTimeout(abrir, 600);
})();
