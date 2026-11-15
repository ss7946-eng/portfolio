(() => {
'use strict';
const data=window.PORTFOLIO;
const main=document.querySelector('#main');
const page=document.body.dataset.page;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const roll=(label,href,extra='')=>`<a class="roll" href="${esc(href)}" ${extra}><span>${esc(label)}</span><span aria-hidden="true">${esc(label)}</span></a>`;
const mark=`<svg class="mark" viewBox="0 0 24 28" aria-hidden="true">${Array.from({length:8},(_,i)=>`<circle cx="${12+9*Math.cos(i*Math.PI/4)}" cy="${14+11*Math.sin(i*Math.PI/4)}" r="${i%2?1.5:2}" fill="currentColor"/>`).join('')}</svg>`;
const contactHref=data.email?`mailto:${data.email}`:'contact.html';
document.querySelector('#header').innerHTML=`<a href="index.html" class="brand" aria-label="${esc(data.name)} home">${mark}${esc(data.name)}</a><nav class="nav" aria-label="Main navigation">${roll('Work','work.html',page==='work'?'aria-current="page"':'')}${roll('About','about.html',page==='about'?'aria-current="page"':'')}${roll('Contact',contactHref,page==='contact'?'aria-current="page"':'')}</nav>`;
document.querySelector('#footer').innerHTML=`<a class="footer-wordmark" href="index.html" aria-label="Back to home">${mark}<span>${esc(data.name)}</span></a><div class="footer-bottom"><p>Architecture & design<br>Based in ${esc(data.location)}</p><nav class="footer-nav" aria-label="Portfolio links">${roll('Work','work.html')}${roll('About','about.html')}${roll('Contact',contactHref)}</nav><nav class="footer-nav" aria-label="More links">${roll('GitHub','https://github.com/ss7946-eng/portfolio')}${roll('Privacy','privacy.html')}${roll('Back to top','#main')}</nav></div><div class="footer-credits"><p class="footer-demo">Design preview · Gallery images and sample projects are from <a class="text-link" href="https://finn.framer.media/" target="_blank" rel="noopener noreferrer">Finn</a>. They are placeholders, not projects by Hannah Shin.</p><span>${esc(data.name)} ${new Date().getFullYear()}</span></div>`;
const card=(p,i=0)=>`<a class="project-card reveal" href="project.html?id=${encodeURIComponent(p.id)}" aria-label="${esc(p.title)} — ${p.demo?'sample project':'view project'}"><div class="image-wrap"><img src="${esc(p.image)}" alt="${esc(p.title)}${p.demo?' — Finn reference sample':''}" loading="${i<2?'eager':'lazy'}" decoding="async" width="800" height="1000">${p.demo?'<span class="sample">Reference sample</span>':''}</div><div class="card-caption"><div><h3 class="card-title">${esc(p.title)}</h3><p class="card-subtitle">${esc(p.category)}</p></div><span class="card-arrow" aria-hidden="true">↗</span></div></a>`;
const gallery=(projects,heading='Selected work',more=false)=>`<section class="section ${more?'more-work':''}" aria-label="${heading}"><div class="section-heading"><h2>${heading}</h2>${more?'<a class="text-link" href="work.html">View all ↗</a>':'<span class="small-note">Sample project gallery</span>'}</div><div class="grid">${projects.map(card).join('')}</div></section>`;
const intro=()=>`<h2 class="intro reveal">${esc(data.intro)}</h2>`;
const profileSummary=()=>`<section class="profile-summary" aria-label="Profile at a glance"><p>${esc(data.profile.location)}</p><div class="profile-qualifications">${data.profile.qualifications.map(t=>`<p>${esc(t)}</p>`).join('')}</div><div class="profile-links"><a class="profile-cv" href="${esc(data.profile.cvUrl)}" target="_blank" rel="noopener noreferrer">CV <span aria-hidden="true">↗</span></a></div></section>`;
const resume=()=>`<div class="resume"><section class="resume-section" aria-labelledby="experience-heading"><h3 id="experience-heading">Professional Experience</h3>${data.profile.experience.map(e=>`<article class="resume-entry"><h4>${esc(e.organization)}${e.url?` <a class="resume-external" href="${esc(e.url)}" target="_blank" rel="noopener noreferrer" aria-label="Now Architects website (opens in a new tab)">LINK <span aria-hidden="true">↗</span></a>`:''}</h4><p class="resume-role">${esc(e.role)}</p><p class="resume-date">${esc(e.dates)}</p><ul>${e.projects.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></article>`).join('')}</section><section class="resume-section" aria-labelledby="education-heading"><h3 id="education-heading">Education</h3>${data.profile.education.map(e=>`<article class="resume-entry"><h4>${esc(e.institution)}</h4><p class="resume-date">${esc(e.dates)}</p><p class="resume-degree">${esc(e.degree)}</p>${e.details.length?`<div class="resume-details">${e.details.map(t=>`<p>${esc(t)}</p>`).join('')}</div>`:''}</article>`).join('')}</section></div>`;
const about=(detailed=false)=>`<section class="info-row"><h2>About</h2><div class="prose reveal">${data.about.map(t=>`<p>${esc(t)}</p>`).join('')}${detailed?resume():`<figure class="about-art" style="margin-left:0;margin-right:0"><img src="${esc(data.projects[8].image)}" alt="Architectural interior — reference image from Finn" loading="lazy" width="1000" height="750"><figcaption class="sample">Reference image · Portrait to be added</figcaption></figure>`}</div></section>`;
const contact=(email=data.email,phone=null,phoneHref=null)=>`<section class="info-row" id="contact"><h2>Contact</h2><div class="contact-list">${phone&&phoneHref?roll(phone,phoneHref):''}${email?roll(`${email} ↗`,`mailto:${email}`):'<p>Let’s start a conversation.</p><p class="hint">Contact details will be added soon.</p>'}<a class="contact-link" href="work.html">Explore the work ↗</a></div></section>`;
if(page==='index'){
 let i=0;
 const head=data.headline.map(line=>`<span aria-hidden="true">${[...line].map(c=>c===' '?' ':`<span class="letter" style="--i:${i++}">${esc(c)}</span>`).join('')}</span>`).join('');
 main.innerHTML=`<section class="hero"><p class="eyebrow">${esc(data.name)} from ${esc(data.location)}</p><h1 aria-label="${esc(data.headline.join(' '))}">${head}</h1><p class="tagline">${esc(data.tagline)}</p></section>${gallery(data.projects.slice(0,8))}${intro()}${about()}${contact()}`;
}else if(page==='work'){
 main.classList.add('page-work');main.innerHTML=`<div class="page-heading"><h1>Work</h1></div>${gallery(data.projects,'Selected work')}`;
}else if(page==='about'){
 main.classList.add('page-about');main.innerHTML=`<div class="page-heading"><h1>About</h1></div>${profileSummary()}${intro()}${about(true)}${contact(data.profile.email,data.profile.phone,data.profile.phoneHref)}`;
}else if(page==='contact'){
 main.classList.add('page-contact');main.innerHTML=`<div class="page-heading"><h1>Let’s make something<br>meaningful.</h1></div>${contact()}`;
}else if(page==='project'){
 const p=data.projects.find(p=>p.id===new URLSearchParams(location.search).get('id'));
 if(!p){document.title='Project not found — '+data.name;main.innerHTML='<section class="not-found"><h1>Project not found.</h1><a class="text-link" href="work.html">Back to all work ↗</a></section>';}
 else{document.title=p.title+' — '+data.name;main.innerHTML=`<div class="page-heading"><h1>${esc(p.title)}</h1><p>${esc(p.category)}</p></div><figure class="project-hero"><img src="${esc(p.image)}" alt="${esc(p.title)} — sample project" fetchpriority="high" width="1600" height="1000"></figure><div class="project-info"><section class="info-row"><h2>Info</h2><div class="prose"><p>${esc(p.description)}</p></div></section><section class="info-row"><h2>Project details</h2><dl class="facts"><div><dt>Project</dt><dd>${esc(p.title)}</dd></div><div><dt>Discipline</dt><dd>${esc(p.category)}</dd></div><div><dt>Status</dt><dd>${p.demo?'Reference sample':'Selected work'}</dd></div><div><dt>Image credit</dt><dd><a class="text-link" href="https://finn.framer.media/" target="_blank" rel="noopener noreferrer">Finn template ↗</a></dd></div></dl></section></div>${gallery(data.projects.filter(q=>q.id!==p.id).slice(0,2),'Other work',true)}`;}
}else if(page==='privacy'){
 main.innerHTML='<div class="page-heading"><h1>Privacy</h1></div><div class="legal"><h2>A simple portfolio.</h2><p>This site has no contact form, analytics scripts or advertising cookies. It does not store visitor information in a database.</p><h2>External resources</h2><p>Sample images and fonts load from Framer’s content delivery network. Hosting and external resource providers may receive technical information such as your IP address when your browser requests a page or file. External links take you to other websites with their own privacy practices.</p></div>';
}
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
 document.documentElement.classList.add('js-motion');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.05,rootMargin:'0px 0px 40px 0px'});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
if(matchMedia('(pointer:fine)').matches){const cursor=document.querySelector('.cursor');document.querySelectorAll('.image-wrap').forEach(el=>{el.addEventListener('pointerenter',()=>cursor.classList.add('active'));el.addEventListener('pointerleave',()=>cursor.classList.remove('active'));el.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'})});window.addEventListener('blur',()=>cursor.classList.remove('active'));}

// The hero trail reuses project images; it never intercepts links or touch scrolling.
const hero=document.querySelector('.hero');
const trailMedia=matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
if(hero){
 const layer=document.createElement('div');
 layer.className='hero-trail';
 layer.setAttribute('aria-hidden','true');
 hero.append(layer);
 const sources=data.projects.filter(p=>p.image).map(p=>p.image);
 const images=[];
 let loaded=false,index=0,lastPoint=null,lastTime=0,depth=0;
 const active=new Map();
 function clearTrail(){
  lastPoint=null;lastTime=0;depth=0;
  active.forEach((animation,img)=>{animation.cancel();img.remove()});
  active.clear();
 }
 function preload(){
  if(loaded||!trailMedia.matches)return;
  loaded=true;
  sources.slice(0,9).forEach(src=>{
   const img=new Image();img.decoding='async';img.alt='';
   img.onload=()=>images.push(img);
   // Framer samples have a smaller thumbnail; custom project URLs stay unchanged.
   img.src=src.replace(/scale-down-to=\d+/,'scale-down-to=512');
  });
 }
 function stamp(x,y,dx,dy){
  if(!images.length)return;
  const img=images[index++%images.length].cloneNode();
  img.className='trail-image';img.draggable=false;
  img.style.left=x+'px';img.style.top=y+'px';img.style.zIndex=String(++depth);
  layer.append(img);
  const angle=(index%5-2)*5;
  const driftX=Math.max(-45,Math.min(45,dx*.2));
  const driftY=Math.max(-30,Math.min(30,dy*.2));
  const pose=(scale,rx=0,ry=0)=>`translate(calc(-50% + ${rx}px),calc(-50% + ${ry}px)) rotate(${angle}deg) scale(${scale})`;
  const animation=img.animate([
   {opacity:0,transform:pose(.65),offset:0},
   {opacity:1,transform:pose(1),offset:.12},
   {opacity:1,transform:pose(1,driftX,driftY),offset:.55},
   {opacity:0,transform:pose(.88,driftX,driftY+24),offset:1}
  ],{duration:1400,easing:'linear',fill:'forwards'});
  active.set(img,animation);
  animation.finished.then(()=>{active.delete(img);img.remove()},()=>{});
  // Bound DOM and GPU work even during very fast movement.
  if(active.size>8){const [old,anim]=active.entries().next().value;anim.cancel();old.remove();active.delete(old)}
 }
 hero.addEventListener('pointermove',event=>{
  if(!trailMedia.matches||event.pointerType==='touch')return;
  preload();
  if(!images.length)return;
  const rect=hero.getBoundingClientRect();
  const x=event.clientX-rect.left,y=event.clientY-rect.top;
  if(event.clientY<document.querySelector('#header').getBoundingClientRect().bottom)return;
  const dx=lastPoint?x-lastPoint.x:0,dy=lastPoint?y-lastPoint.y:0;
  const now=performance.now();
  if(lastPoint&&(Math.hypot(dx,dy)<85||now-lastTime<55))return;
  stamp(x,y,dx,dy);lastPoint={x,y};lastTime=now;
 },{passive:true});
 hero.addEventListener('pointerleave',clearTrail);
 window.addEventListener('scroll',clearTrail,{passive:true});
 window.addEventListener('blur',clearTrail);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)clearTrail()});
 trailMedia.addEventListener('change',()=>{clearTrail();preload()});
 preload();
}
})();
