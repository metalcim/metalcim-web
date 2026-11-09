// CATÁLOGO: cada opción final abre WhatsApp (55 7419 5833) preguntando por ese producto.
const WA_CATALOGO='525574195833';
function preguntarPorWhatsApp(producto){window.open('https://wa.me/'+WA_CATALOGO+'?text='+encodeURIComponent('Hola, vengo de www.metalcim.com.mx, me interesa información sobre: '+producto+'. ¿Me pueden dar precio y disponibilidad?'),'_blank','noopener')}
const products=[{name:'Puntales metálicos',icon:'prop',desc:'Rectos galvanizados en tres medidas y puntales para columna en dos medidas.',spec:'Rectos galvanizados: 160–290, 220–400 y 290–500 cm. Para columna: 160–290 y 220–400 cm.'}, {name:'Cimbra',icon:'panel',photo:'assets/img/ejemplo-de-uso-de-cimbra.jpg',alt:'Ejemplo de uso de cimbra',cap:'Ejemplo de uso de cimbra',desc:'Consulta los tipos, medidas y accesorios disponibles para tu proyecto.',spec:'Pregúntanos por tipos, medidas y accesorios disponibles.'},{name:'Andamios',icon:'frame',photo:'assets/img/ejemplo-de-uso-de-andamio.jpg',alt:'Ejemplo de uso de andamio',cap:'Ejemplo de uso de andamio',desc:'Solicita información sobre medidas, componentes y disponibilidad.',spec:'Pregúntanos por medidas, componentes y disponibilidad.'}];
const puntalesPhoto='assets/img/puntales-en-obra.jpg';const cards=document.getElementById('cards');products.forEach(p=>{let a=document.createElement('article');a.className='card';a.dataset.product=p.name;a.innerHTML=`<div class="product-art">${p.photo?`<img src="${p.photo}" alt="${p.alt}" loading="lazy">${p.cap?`<small class="cap">${p.cap}</small>`:''}`:p.icon==='prop'?`<img src="${puntalesPhoto}" alt="Puntales metálicos instalados en obra" loading="lazy">`:`<svg aria-hidden="true"><use href="#${p.icon}"/></svg>`}</div><div class="card-body"><span class="tag">CONSULTAR RENTA / VENTA</span><h3>${p.icon==='prop'?'<button type="button" class="puntal-trigger" aria-expanded="false" aria-controls="puntal-menu">Puntales metálicos ▾</button>':p.icon==='panel'?'<button type="button" class="cimbra-trigger" aria-expanded="false" aria-controls="cimbra-menu">Cimbra ▾</button>':p.icon==='frame'?'<button type="button" class="andamio-trigger" aria-expanded="false" aria-controls="andamio-menu">Andamios ▾</button>':p.name}</h3><p>${p.desc}</p><button type="button" class="text-link">Ver equipo y cotizar ↗</button></div>`;a.querySelector('.text-link').onclick=()=>{if(p.icon==='prop'){openPuntales();return;}if(p.icon==='panel'){openCimbra();return;}if(p.icon==='frame'){openAndamios();return;}document.getElementById('dialog-quote').textContent='Cotizar este equipo ↗';document.getElementById('dialog-buy').hidden=true;document.getElementById('dialog-photo-empty').hidden=true;delete document.getElementById('dialog-quote').dataset.model;delete document.getElementById('dialog-quote').dataset.mode;document.getElementById('dialog-title').textContent=p.name;document.getElementById('dialog-description').textContent=p.desc;document.getElementById('dialog-specs').textContent=p.spec;const photo=document.getElementById('dialog-photo');photo.hidden=p.icon!=='prop';if(p.icon==='prop')photo.src=puntalesPhoto;document.getElementById('dialog-quote').dataset.pick=p.name;document.getElementById('product-dialog').showModal()};cards.append(a)});
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',x===b?'true':'false')});document.querySelectorAll('[data-product]').forEach(c=>c.hidden=b.dataset.filter!=='all'&&c.dataset.product!==b.dataset.filter);if(b.dataset.filter==='Puntales metálicos')openPuntales();if(b.dataset.filter==='Cimbra')openCimbra();else closeCimbra();if(b.dataset.filter==='Andamios')openAndamios();else closeAndamios()});
document.addEventListener('click',e=>{const a=e.target.closest('[data-pick]');if(a){document.getElementById('equipment').value=a.dataset.pick;document.getElementById('product-dialog').close()}});document.querySelector('#product-dialog .close').onclick=()=>document.getElementById('product-dialog').close();
document.getElementById('quote').onsubmit=function(e){e.preventDefault();if(!this.reportValidity())return;const d=new FormData(this);const m=['Hola, vengo de www.metalcim.com.mx, quiero cotizar equipo con MetalCim.','Nombre: '+d.get('nombre'),'Teléfono: '+d.get('telefono'),'Equipo: '+d.get('equipo'),'Obra: '+d.get('ubicacion')];if(d.get('plazo'))m.push('Plazo de entrega: '+d.get('plazo'));m.push('Elemento a cimbrar: '+(d.get('estructura')==='Otros'?'Otro'+(d.get('estructura_otro')?' – '+d.get('estructura_otro'):''):d.get('estructura')));if(d.get('plano'))m.push('Cuento con foto o plano del proyecto.');window.location.href='https://wa.me/527721742831?text='+encodeURIComponent(m.join('\n'))};

// FOTOS: colocar la ruta o URL en photo para cada uno de los cinco modelos.
const puntalModels=[
{id:'recto-160-290',type:'rectos',name:'Puntal recto galvanizado',size:'160–290 cm',photo:'assets/img/puntal-recto-160-290.jpg'},
{id:'recto-220-400',type:'rectos',name:'Puntal recto galvanizado',size:'220–400 cm',photo:'assets/img/puntal-recto-220-400.jpg'},
{id:'recto-290-500',type:'rectos',name:'Puntal recto galvanizado',size:'290–500 cm',photo:''},
{id:'columna-160-290',type:'columnas',name:'Puntal para columna',size:'160–290 cm',photo:''},
{id:'columna-220-400',type:'columnas',name:'Puntal para columna',size:'220–400 cm',photo:'assets/img/puntal-columna-220-400.jpg'}
];
const puntalMenu=document.getElementById('puntal-menu');
function closePuntales(){puntalMenu.hidden=true;document.querySelectorAll('.puntal-trigger').forEach(b=>b.setAttribute('aria-expanded','false'))}
function openPuntales(){closeAndamios();closeCimbra();puntalMenu.hidden=false;document.querySelectorAll('.puntal-trigger').forEach(b=>b.setAttribute('aria-expanded','true'))}
puntalModels.forEach(model=>{
const card=document.createElement('article');card.className='puntal-model';
card.innerHTML=`<div class="puntal-photo">${model.photo?'<img loading="lazy" src="'+model.photo+'" alt="'+model.name+' '+model.size+'">':'<svg aria-hidden="true"><use href="#prop"/></svg><span>Fotografía próximamente</span>'}</div><div class="puntal-model-body"><span class="tag">${model.name}</span><h3>${model.size}</h3><button type="button" class="text-link">Preguntar por WhatsApp ↗</button></div>`;
card.onclick=()=>preguntarPorWhatsApp(model.name+' de '+model.size);
document.getElementById('panel-'+model.type).append(card);
});
function selectPuntalTab(tab){document.querySelectorAll('.puntal-tab').forEach(b=>{const active=b===tab;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;document.getElementById('panel-'+b.dataset.type).hidden=!active})}
document.querySelectorAll('.puntal-tab').forEach(tab=>{tab.onclick=()=>selectPuntalTab(tab);tab.onkeydown=e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const tabs=[...document.querySelectorAll('.puntal-tab')];const next=tabs[e.key==='Home'?0:e.key==='End'?tabs.length-1:(tabs.indexOf(tab)+(e.key==='ArrowLeft'?-1:1)+tabs.length)%tabs.length];selectPuntalTab(next);next.focus()}}});
document.querySelector('.puntal-close').onclick=()=>{closePuntales();document.querySelector('.puntal-trigger')?.focus()};
document.addEventListener('click',e=>{const trigger=e.target.closest('.puntal-trigger');if(trigger){puntalMenu.hidden?openPuntales():closePuntales();return}if(!puntalMenu.hidden&&!puntalMenu.contains(e.target)&&!e.target.closest('[data-filter="Puntales metálicos"]')&&!e.target.closest('[data-product="Puntales metálicos"]'))closePuntales();const a=e.target.closest('[data-model]');if(a){const form=document.getElementById('quote');form.elements.comentarios.value=a.dataset.model;if(a.dataset.mode){document.getElementById('mode').value=a.dataset.mode;document.getElementById('mode').dispatchEvent(new Event('change'))}}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!puntalMenu.hidden){closePuntales();document.querySelector('.puntal-trigger')?.focus()}});

function closeCimbra(){document.getElementById('cimbra-menu').hidden=true;document.querySelectorAll('.cimbra-trigger,[data-filter="Cimbra"]').forEach(b=>b.setAttribute('aria-expanded','false'))}
function openCimbra(){closeAndamios();closePuntales();document.getElementById('cimbra-menu').hidden=false;document.querySelectorAll('.cimbra-trigger,[data-filter="Cimbra"]').forEach(b=>{b.setAttribute('aria-expanded','true');b.setAttribute('aria-controls','cimbra-menu')});document.getElementById('cimbra-menu').scrollIntoView({behavior:'smooth',block:'nearest'})}
document.querySelectorAll('.cimbra-trigger').forEach(b=>b.onclick=()=>{document.getElementById('cimbra-menu').hidden?openCimbra():closeCimbra()});
document.querySelectorAll('[data-cimbra]').forEach(b=>b.onclick=()=>{const t=b.dataset.cimbra.toLowerCase();preguntarPorWhatsApp(t.charAt(0).toUpperCase()+t.slice(1))});

function closeAndamios(){document.getElementById('andamio-menu').hidden=true;document.querySelectorAll('.andamio-trigger,[data-filter="Andamios"]').forEach(b=>b.setAttribute('aria-expanded','false'))}
function openAndamios(){closePuntales();closeCimbra();document.getElementById('andamio-menu').hidden=false;document.querySelectorAll('.andamio-trigger,[data-filter="Andamios"]').forEach(b=>{b.setAttribute('aria-expanded','true');b.setAttribute('aria-controls','andamio-menu')});document.getElementById('andamio-menu').scrollIntoView({behavior:'smooth',block:'nearest'})}
document.querySelectorAll('.andamio-trigger').forEach(b=>b.onclick=()=>{document.getElementById('andamio-menu').hidden?openAndamios():closeAndamios()});
document.querySelectorAll('[data-andamio]').forEach(b=>b.onclick=()=>preguntarPorWhatsApp(b.dataset.andamio));
document.getElementById('anio').textContent=new Date().getFullYear();

(function(){const sel=document.getElementById('estructura'),otro=document.querySelector('.otro-elemento');if(!sel||!otro)return;const inp=otro.querySelector('input');sel.addEventListener('change',()=>{const o=sel.value==='Otros';otro.hidden=!o;inp.required=o;if(o)inp.focus()})})();

// Menú de navegación en el encabezado móvil.
const mobileMenuButton = document.querySelector('.mobile-menu-toggle');
if (mobileMenuButton) {
  const mobileMenu = document.getElementById(mobileMenuButton.getAttribute('aria-controls'));
  function setMobileMenu(open) {
    mobileMenuButton.setAttribute('aria-expanded', String(open));
    mobileMenuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }
  mobileMenuButton.addEventListener('click', () => setMobileMenu(mobileMenuButton.getAttribute('aria-expanded') !== 'true'));
  mobileMenu.addEventListener('click', event => {
    if (event.target.closest('a')) setMobileMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenuButton.getAttribute('aria-expanded') === 'true') {
      setMobileMenu(false);
      mobileMenuButton.focus();
    }
  });
  matchMedia('(max-width: 900px)').addEventListener('change', () => setMobileMenu(false));
}
