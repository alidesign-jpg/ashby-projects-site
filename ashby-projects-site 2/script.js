(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const media = 'assets/media/';
  const sandboxUrl = 'https://www.eventbrite.com.au/e/sandbox-music-festival-melbourne-tickets-1991427952614';
  const events = [
    {id:'sandbox-2026', name:'Sandbox Music Festival ’26', meta:'25 September 2026 · PICA, Port Melbourne', flyer:'sandbox-flyer-1080x1350.jpg', status:'EVENT ENDED', description:'Electronic music at PICA, Port Melbourne. Friday 25 September 2026, 3 PM – 1 AM.', lineup:['BEAUZ', 'DJ GUESTLIST', 'HIJCKD', 'Jovynn', 'Junkie Kid', 'Lee Ann Roberts', 'Mark Blair', 'NEGITIV'], supports:['Four To Eight','Choco','Panic'], url:sandboxUrl},
    {"id":"brianna-baxter-asia-tour","name":"Brianna Baxter — Asia Tour","meta":"24 September – 17 October · Asia","flyer":"brianna-baxter-asia-tour-1080x1350.jpg","status":"ASIA TOUR","description":"Brianna Baxter takes her sound across Asia, with nine tour dates in China, Taiwan, India, Indonesia and Thailand.","tourDates":[{"date":"24.09","city":"Chengdu, China","venue":"GAP"},{"date":"26.09","city":"Taipei, Taiwan","venue":"La Fin"},{"date":"30.09","city":"Shanghai, China","venue":"Abyss"},{"date":"01.10","city":"Nanjing, China","venue":"Foundation"},{"date":"02.10","city":"Hefei, China","venue":"Atlantis"},{"date":"09.10","city":"Delhi, India","venue":"TBA"},{"date":"10.10","city":"Bengaluru, India","venue":"TBA"},{"date":"14.10","city":"Bali, Indonesia","venue":"Terminus"},{"date":"17.10","city":"Bangkok, Thailand","venue":"Subwerk"}]},
    {id:'sandbox-afterparty',name:'Sandbox Official After Party',meta:'25 September 2026 · Platform One, Melbourne',flyer:'sandbox-afterparty-1080x1350.jpg',status:'EVENT ENDED',description:'The official Sandbox afterparty at Platform One, 375 Flinders Street, Melbourne. Friday 25 September 2026, 10 PM – 6 AM.',lineup:['Junkie Kid','BAMBii','Jack Darcy','JUJU222','KERF','NAVI','BRI','RUE','Reynolds','Rickety Ric','MEP','Mimsie','FWEBO'],url:'https://www.eventbrite.com.au/e/sandbox-official-after-party-tickets-2001808209241'},
    {id:'overtime',name:'Overtime — Airwolf Paradise & Ferreck Dawn',meta:'24 September 2026 · Brown Alley, Melbourne',flyer:'overtime-flyer-1080x1350.jpg',status:'EVENT ENDED',description:'Airwolf Paradise and Ferreck Dawn (NL) at Overtime. House and techno at Brown Alley, 585 Lonsdale Street, Melbourne. Thursday 24 September 2026, 10 PM – 5 AM.',lineup:['Airwolf Paradise','Ferreck Dawn (NL)'],supports:['Panic','Coco & Ayres','Alcatrax'],url:'https://www.eventbrite.com.au/e/overtime-airwolf-paradise-ferreck-dawn-nl-tickets-1997803518102'},
    {"id":"nerve-240kmh-2026","name":"Nerve × 240/KMH — Official Afterparty","meta":"24 September 2026 · Brown Alley, Melbourne","flyer":"nerve-240kmh-2026-1080x1350.jpg","status":"EVENT ENDED","description":"The official Melbourne Face 2 Face afterparty — trance and bounce at Brown Alley. Thursday 24 September 2026, 10 PM – 6 AM.","lineup":["Part Time Killer","Ammara","Wilderich"],"url":"https://www.eventbrite.com.au/e/nerve-x-240kmh-official-afterparty-part-time-killer-ammara-wilderich-tickets-2001817409760"},
    {id:'four-to-eight', name:'Four To Eight at The Substation', meta:'The Substation · Sold-out show', flyer:'fourtoeight-flyer-1080x1350.jpg', status:'PAST EVENT', description:'Four To Eight at The Substation. A sold-out show from the Ashby Projects archive.'},
    {id:'doruksen', name:'Doruksen', meta:'Melbourne · 16 May 2026', flyer:'doruksen-flyer-1080x1350.jpg', status:'PAST EVENT', description:'Doruksen in Melbourne, 16 May 2026. Part of the Ashby Projects event archive.'},
    {"id":"stamina-teletech-2026","name":"Stamina — Teletech Afterparty","meta":"25 April 2026 · Stamina, Melbourne","flyer":"stamina-teletech-2026-1080x1350.jpg","status":"EVENT ENDED","description":"The Teletech afterparty at Stamina in Melbourne. Saturday 25 April 2026, 10 PM – 7 AM. Special guests were billed as TBA.","supports":["Burjoe","Kiara Friend","Elsewhere","Mitro","Panic","Anreal","Kill/Mill","Luna X","Jack McAuliffe","Rosax","Vlad","Cypress","Hooks","Patto","Arcade","Alfred Jay","Romos","WE OU SLEEP"],"url":"https://www.eventbrite.com.au/e/stamina-250426-teletech-afterparty-ft-special-guests-tba-tickets-1987806048401"},
    {id:'datsko-nato', name:'Datsko + Nato', meta:'Prince Bandroom · 30 January 2026', flyer:'datsko-flyer-1080x1350.jpg', status:'PAST EVENT', description:'Datsko + Nato at Prince Bandroom, 30 January 2026. Part of the Ashby Projects event archive.'},
    {id:'faster-horses', name:'Faster Horses', meta:'Nerve · Hard bounce & techno', flyer:'faster-horses-flyer-1080x1350.jpg', status:'PAST EVENT', description:'Faster Horses at Nerve. Hard bounce and techno from the Ashby Projects event archive.'},
    {id:'baxter-all-day-long',name:'Warehouse Rave 4.0 — Baxter All Day Long',meta:'1 November 2025 · The Industrique, Coburg',flyer:'baxter-all-day-long-1080x1350.jpg',status:'EVENT ENDED',description:'Baxter hosts a full day of back-to-back sets with Staffy, Akeylah, AQUA-X and Four To Eight. Held at The Industrique, 5 Louvain Street, Coburg, on Saturday 1 November 2025, 3 PM – 11 PM, with a 360° booth and an outdoor pavilion.',lineup:['Baxter B2B Staffy','Baxter B2B Akeylah','Baxter B2B AQUA-X','Baxter B2B Four To Eight'],supports:['Synesthesia','Graceless Grace','Bickeez','Burjoe','Stude On Jetta','Rev','Navi'],platform:'Humanitix',url:'https://events.humanitix.com/astraxashby-baxteralldaylong'},
    {id:'stamina-teletech-2025',name:'Stamina — Teletech Afterparty',meta:'11 October 2025 · Banana Alley Vaults, Melbourne',flyer:'stamina-teletech-2025-1080x1350.jpg',status:'EVENT ENDED',description:'The Teletech afterparty at Stamina, Banana Alley Vaults on Flinders Street, Melbourne. Saturday 11 October 2025, 9 PM – 7 AM. Special guests were billed as TBA.',supports:['Nik Sitz','Emi Baz','Four To Eight','Elsewhere','Panic','Graceless Grace','Anreal','Burjoe','Rev','BELXSXS','XVF','Flow','Neilek','Chuie','WTFJARRAD','Alfred Jay','JØEL'],url:'https://www.eventbrite.com.au/e/stamina-111025-teletech-afterparty-ft-special-guests-tba-tickets-1775791583429'},
    {"id":"nerve-teletech-2024","name":"Nerve — Teletech Australia After Party","meta":"13 December 2024 · Brown Alley, Melbourne","flyer":"nerve-teletech-2024-1080x1350.jpg","status":"EVENT ENDED","description":"The Teletech Australia afterparty at Nerve, Brown Alley, Melbourne. Friday 13 December 2024, 10 PM – 6 AM. Secret guests, plus Nerve residents.","lineup":["Secret guests","Nerve residents"],"url":"https://www.eventbrite.com.au/e/nerve-teletech-australia-after-party-tickets-1108889491319"}
  ];
  const asiaTour = events.find(e => e.id === 'brianna-baxter-asia-tour');
  const eventHref = e => 'event.html?event=' + e.id;
  const poster = e => e.flyer ? `<img src="${media + e.flyer}" alt="${e.name} event flyer" width="1080" height="1350" loading="lazy">` : '<div class="sandbox-poster" role="img" aria-label="Sandbox Music Festival 2026"><span>MELBOURNE / 2026</span><strong>SAND<br>BOX.</strong><div>MUSIC FESTIVAL<br><b>25.09.26</b></div></div>';
  const eventCard = e => `<a class="poster-card" href="${eventHref(e)}"><div class="poster-art">${poster(e)}<span class="poster-cue">MORE INFO ↗</span></div><div class="poster-info"><span class="green-label">${e.id === 'sandbox-2026' ? 'FEATURED / ' : ''}${e.status}</span><h3>${e.name}</h3><p>${e.meta}</p></div></a>`;
  if ($('#featured-events')) {
    $('#featured-events').innerHTML = [events[0], asiaTour].filter(Boolean).map(e => `<article class="featured-festival"><a class="featured-poster" href="${eventHref(e)}" aria-label="More about ${e.name}">${poster(e)}</a><div class="festival-copy"><span class="green-label">${e.tourDates ? 'FEATURED TOUR / ASIA' : 'FEATURED EVENT / 2026'}</span><h3>${e.tourDates ? 'Brianna<br>Baxter<br><em>Asia tour.</em>' : 'Sandbox<br>Music Festival<br><em>’26.</em>'}</h3><p>${e.meta}</p><span class="festival-status">${e.tourDates ? `${e.tourDates.length} DATES / 5 COUNTRIES` : e.status}</span><div class="festival-actions"><a class="solid-link" href="${eventHref(e)}">${e.tourDates ? 'VIEW TOUR DATES' : 'EVENT INFO'} ↗</a>${e.url ? `<a class="text-link" href="${e.url}" target="_blank" rel="noreferrer">EVENTBRITE ↗</a>` : ''}</div></div></article>`).join('');
  }
  if ($('#event-archive')) $('#event-archive').innerHTML = events.filter(e => e.id !== 'sandbox-2026' && !e.tourDates).slice(0,3).map(eventCard).join('') + '<a class="archive-more poster-card" href="events.html" aria-label="See more — all previous events"><div class="archive-more-art poster-art"><strong>See<br>more.</strong></div><div class="poster-info" aria-hidden="true"></div></a>';
  if ($('#event-page-upcoming')) $('#event-page-upcoming').innerHTML = eventCard(events[0]);
  if ($('#event-page-past')) $('#event-page-past').innerHTML = events.map(eventCard).join('');
  if ($('#event-detail-content')) {
    const e=events.find(e => e.id === new URLSearchParams(location.search).get('event'));
    if(e) {
      document.title = e.name + ' — Ashby Projects';
      $('#event-detail-content').innerHTML = `<div class="event-detail-grid"><div class="event-detail-poster">${poster(e)}</div><div class="event-detail-copy"><span class="green-label">ASHBY PROJECTS / ${e.status}</span><h1>${e.name}</h1><p class="event-detail-meta">${e.meta}</p><p>${e.description}</p>${e.lineup ? `<div class="event-lineup"><h2>Lineup</h2><p>${e.lineup.join(' · ')}</p></div>` : ''}${e.supports ? `<div class="event-lineup"><h2>Supports</h2><p>${e.supports.join(' · ')}</p></div>` : ''}${e.url ? `<a class="solid-link" href="${e.url}" target="_blank" rel="noreferrer">VIEW ${(e.platform || 'Eventbrite').toUpperCase()} LISTING ↗</a>` : `<a class="solid-link" href="mailto:hello@ashbyprojects.com.au?subject=${encodeURIComponent('Event enquiry — '+e.name)}">EVENT ENQUIRIES ↗</a>`}</div></div>`;
      if(e.tourDates){
        const schedule=document.createElement('div');schedule.className='event-tour-dates';
        schedule.innerHTML=`<h2>Tour dates</h2><table><caption class="sr-only">Brianna Baxter Asia tour schedule</caption><thead><tr><th scope="col">Date</th><th scope="col">City</th><th scope="col">Venue</th></tr></thead><tbody>${e.tourDates.map(date=>`<tr><td>${date.date}</td><td>${date.city}</td><td>${date.venue}</td></tr>`).join('')}</tbody></table>`;
        const enquiry=$('.event-detail-copy>.solid-link');
        enquiry.before(schedule);enquiry.textContent='TOUR ENQUIRIES ↗';enquiry.href=`mailto:matthew@ashbyprojects.com.au?subject=${encodeURIComponent('Tour enquiry — '+e.name)}`;
      }
    } else {
      $('#event-detail-content').innerHTML = '<h1>Event not found.</h1><p>Explore the Ashby archive for all events.</p><a class="solid-link" href="events.html">EXPLORE EVENTS ↗</a>';
    }
  }
  // The original script was unavailable. Keep only roster names confirmed in the uploaded HTML.
  const tours = [
    {name:'AREA ØNE',photo:'area-one.png',bio:'AREA ØNE brings his rolling acid and neo-rave energy to Australia. Supported by Charlotte de Witte, Amelie Lens and Sara Landry, his viral anthems ‘90s Baby’, ‘Balance’ and ‘Power’ have made him one of Europe’s most in-demand names, known for euphoric, high-voltage techno built for the true heads.'},
    {name:'THISO',photo:'thiso.png',bio:'THISO brings his signature raw and hypnotic sound down under— themed, immersive, and driven by precision. His sets are heavy yet meticulous, pushing boundaries in both sound design and storytelling.'},
    {name:'Niotech',photo:'niotech.png',bio:'Berlin-based DJ and producer Niotech delivers a relentless blend of hard techno and acid energy built for late-night dancefloors. Known for his euphoric yet punishing sound, Niotech channels the raw intensity of Berlin’s underground scene into every set — merging high-octane rhythms, industrial grooves, and rave-inspired emotion.'}
  ];
  if ($('#tour-list')) {
    $('#tour-list').innerHTML = tours.map((tour, i) => `<article class="tour-record has-photo"><button class="tour-profile" type="button" data-tour="${i}" aria-label="View ${tour.name} profile" aria-haspopup="dialog" aria-controls="tour-dialog"><img class="tour-portrait" src="${media+tour.photo}" alt="" loading="lazy"><span class="tour-record-content"><span class="green-label">0${i+1} / ASHBY PROJECTS PRESENTS</span><span class="tour-name">${tour.name}</span><span class="tour-profile-cue">VIEW ARTIST <span aria-hidden="true">↗</span></span></span></button></article>`).join('');
    const tourDialog = $('#tour-dialog');
    if (tourDialog) {
      $$('[data-tour]').forEach(button => button.addEventListener('click', () => {
        const tour = tours[Number(button.dataset.tour)];
        $('#tour-title', tourDialog).textContent = tour.name;
        $('.tour-bio', tourDialog).textContent = tour.bio;
        const portrait = $('.dialog-photo img', tourDialog);
        portrait.src = media + tour.photo; portrait.alt = tour.name;
        $('.solid-link', tourDialog).href = `mailto:matthew@ashbyprojects.com.au?subject=${encodeURIComponent('Enquiry — ' + tour.name)}`;
        tourDialog.showModal();
      }));
      $('.dialog-close', tourDialog).addEventListener('click', () => tourDialog.close());
      tourDialog.addEventListener('click', e => { if (e.target === tourDialog && outside(e, tourDialog)) tourDialog.close(); });
    }
  }
  if ($('#artist-grid')) {
    const names = ['Brianna Baxter', 'Panic', 'Four To Eight'];
    const artistPhotos = {'Brianna Baxter':'brianna-baxter.png','Panic':'panic.png','Four To Eight':'four-to-eight-portrait.png'};
    $('#artist-grid').innerHTML = names.map(name => `<button class="roster-card ${artistPhotos[name] ? 'has-photo' : ''}" data-artist="${name}">${artistPhotos[name] ? `<img class="roster-photo" src="${media+artistPhotos[name]}" alt="${name}" loading="lazy">` : ''}<span class="green-label">ARTIST MANAGEMENT</span><span class="roster-name">${name}</span>${name==='Brianna Baxter'&&asiaTour?'<span class="roster-update">ASIA TOUR / 24.09 — 17.10</span>':''}<span class="roster-action">ENQUIRE ABOUT THIS ARTIST ↗</span></button>`).join('');
    const dialog = $('#artist-dialog');
    if (dialog) {
      const dialogPhoto = $('.dialog-photo',dialog);
      dialogPhoto.replaceChildren();
      dialog.setAttribute('aria-labelledby', 'artist-title');
      $('h2', dialog).id = 'artist-title';
      const artistUpdate=document.createElement('div');artistUpdate.className='artist-tour-update';
      $('.dialog-info>.solid-link',dialog).before(artistUpdate);
      $$('[data-artist]').forEach(button => button.addEventListener('click', () => {
        $('h2', dialog).textContent = button.dataset.artist;
        dialogPhoto.replaceChildren();
        const photoFile=artistPhotos[button.dataset.artist];
        dialog.classList.toggle('has-photo',Boolean(photoFile));
        if(photoFile){const img=document.createElement('img');img.src=media+photoFile;img.alt=button.dataset.artist;dialogPhoto.append(img);}
        $('.dialog-info>p', dialog).textContent = 'For bookings and management enquiries, get in touch with Ashby Projects.';
        artistUpdate.replaceChildren();
        if(button.dataset.artist==='Brianna Baxter'&&asiaTour) artistUpdate.innerHTML=`<span class="green-label">ON TOUR / ASIA</span><h3>24 September – 17 October</h3><p>Nine dates across China, Taiwan, India, Indonesia and Thailand.</p><a class="text-link" href="${eventHref(asiaTour)}">VIEW TOUR DATES ↗</a>`;
        $('.dialog-info>.solid-link', dialog).href = `mailto:matthew@ashbyprojects.com.au?subject=${encodeURIComponent('Artist enquiry — ' + button.dataset.artist)}`;
        dialog.showModal();
      }));
      $('.dialog-close', dialog).addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', e => { if(e.target === dialog && outside(e, dialog)) dialog.close(); });
    }
  }
  function outside(e, el) { const r = el.getBoundingClientRect(); return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom; }
  const toggle = $('.menu-toggle'), nav = $('.main-nav');
  if (toggle && nav) {
    nav.id = 'main-navigation'; toggle.setAttribute('aria-controls', nav.id); nav.inert = true;
    function setMenu(open, returnFocus = true) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      $('span', toggle).textContent = open ? 'Close' : 'Menu';
      nav.classList.toggle('mobile-open', open); nav.inert = !open;
      document.body.classList.toggle('menu-is-open', open);
      $$('main, .site-footer, .announcement, .site-header .wordmark, .header-cta, .header-search').forEach(el => el.inert = open);
      if (open) $('a', nav).focus({preventScroll:true}); else if(returnFocus) toggle.focus({preventScroll:true});
    }
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    $$('a', nav).forEach(link => link.addEventListener('click', e => {
      const href = link.getAttribute('href'); setMenu(false, false);
      if (href.startsWith('#') && $(href)) {
        e.preventDefault(); const target = $(href);
        target.scrollIntoView({behavior: reduced.matches ? 'instant' : 'smooth'});
        history.pushState(null, '', href); target.tabIndex = -1; target.focus({preventScroll:true});
      }
    }));
    document.addEventListener('keydown', e => {
      if(toggle.getAttribute('aria-expanded') !== 'true') return;
      if(e.key === 'Escape') setMenu(false);
      if(e.key === 'Tab') {
        const list = [toggle, ...$$('a', nav)]; const first = list[0], last = list.at(-1);
        if(e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        if(!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }
  const clubGallery = $('.club-gallery .gallery-grid');
  if (clubGallery) {
    clubGallery.classList.add('gallery-track');
    clubGallery.setAttribute('role','region');
    clubGallery.setAttribute('aria-roledescription','carousel');
    clubGallery.setAttribute('aria-label','Stamina and Nerve photos');
    clubGallery.tabIndex=0;
    const lightbox=document.createElement('dialog');
    lightbox.className='lightbox'; lightbox.setAttribute('aria-label','In the room — Stamina and Nerve');
    lightbox.innerHTML='<button class="lightbox-close" aria-label="Close photo">×</button><figure><img alt=""><figcaption></figcaption></figure>';
    document.body.append(lightbox); let origin;
    $$('img',clubGallery).forEach((img,index) => {
      img.draggable=false;
      const button=document.createElement('button');button.className='gallery-item';button.setAttribute('aria-label','Open photo: '+img.alt);
      button.setAttribute('aria-label',`Open photo ${index+1}: ${img.alt}`);
      img.replaceWith(button);button.append(img);
      button.addEventListener('click',()=>{origin=button;const photo=$('figure img',lightbox);photo.src=img.src;photo.alt=img.alt;$('figcaption',lightbox).textContent=img.alt;lightbox.showModal();});
    });
    $('.lightbox-close',lightbox).addEventListener('click',()=>lightbox.close());
    lightbox.addEventListener('click',e=>{if(e.target===lightbox&&outside(e,lightbox))lightbox.close();});
    lightbox.addEventListener('close',()=>origin?.focus({preventScroll:true}));
    const slides=$$('.gallery-item',clubGallery);
    const controls=document.createElement('div');
    controls.className='gallery-navigation';
    controls.innerHTML='<div class="gallery-reading"><span class="gallery-position" role="status" aria-live="polite"></span><span class="gallery-hint">DRAG / SWIPE TO EXPLORE</span></div><div class="gallery-buttons"><button class="gallery-prev" aria-label="Previous gallery photo">←</button><button class="gallery-next" aria-label="Next gallery photo">→</button></div><div class="gallery-progress" aria-hidden="true"><span></span></div>';
    clubGallery.after(controls);
    const previous=$('.gallery-prev',controls), next=$('.gallery-next',controls);
    let current=0,frame=0,drag=null,suppressClick=false;
    function updateGallery(){
      const center=clubGallery.scrollLeft+clubGallery.clientWidth/2;
      const start=slides[0].offsetLeft;
      current=slides.reduce((closest,slide,index)=>Math.abs(slide.offsetLeft-start+slide.offsetWidth/2-center)<Math.abs(slides[closest].offsetLeft-start+slides[closest].offsetWidth/2-center)?index:closest,0);
      $('.gallery-position',controls).textContent=`${String(current+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')} — ${$('img',slides[current]).alt.split(' / ')[0]}`;
      previous.disabled=current===0;
      next.disabled=current===slides.length-1;
      $('.gallery-progress span',controls).style.width=`${(current+1)/slides.length*100}%`;
    }
    function goToSlide(index){
      const slide=slides[Math.max(0,Math.min(index,slides.length-1))];
      clubGallery.scrollTo({left:slide.offsetLeft-slides[0].offsetLeft-(clubGallery.clientWidth-slide.offsetWidth)/2,behavior:reduced.matches?'auto':'smooth'});
    }
    previous.addEventListener('click',()=>goToSlide(current-1));
    next.addEventListener('click',()=>goToSlide(current+1));
    clubGallery.addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(()=>{frame=0;updateGallery();});},{passive:true});
    clubGallery.addEventListener('keydown',e=>{
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
      e.preventDefault();
      goToSlide(e.key==='Home'?0:e.key==='End'?slides.length-1:current+(e.key==='ArrowRight'?1:-1));
    });
    clubGallery.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button===0)drag={id:e.pointerId,x:e.clientX,left:clubGallery.scrollLeft,moved:false};});
    clubGallery.addEventListener('pointermove',e=>{
      if(!drag||e.pointerId!==drag.id)return;
      const distance=e.clientX-drag.x;
      if(!drag.moved&&Math.abs(distance)>6){drag.moved=true;clubGallery.classList.add('is-dragging');clubGallery.setPointerCapture(e.pointerId);}
      if(drag.moved){e.preventDefault();clubGallery.scrollLeft=drag.left-distance;}
    });
    function finishDrag(e){
      if(!drag||e.pointerId!==drag.id)return;
      const moved=drag.moved;drag=null;clubGallery.classList.remove('is-dragging');
      if(clubGallery.hasPointerCapture(e.pointerId))clubGallery.releasePointerCapture(e.pointerId);
      if(moved){suppressClick=true;updateGallery();goToSlide(current);requestAnimationFrame(()=>suppressClick=false);}
    }
    clubGallery.addEventListener('pointerup',finishDrag);
    clubGallery.addEventListener('pointercancel',finishDrag);
    clubGallery.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopImmediatePropagation();}},true);
    clubGallery.addEventListener('dragstart',e=>e.preventDefault());
    if('ResizeObserver' in window)new ResizeObserver(updateGallery).observe(clubGallery);
    updateGallery();
  }
  // Search local events, brands, artists, touring and information. Results are real links.
  const search=$('#site-search'), searchBox=$('#search-results');
  if(search&&searchBox){
    const items=[
      ...events.map(e=>({title:e.name,type:'Event',detail:e.meta,href:eventHref(e)})),
      {title:'All events',type:'Archive',detail:'Previous events and flyers',href:'events.html'},
      {title:'Stamina',type:'Club',detail:'Saturday · Platform One · Hard techno',href:'index.html#stamina'},
      {title:'Nerve',type:'Club',detail:'Friday · Brown Alley · Techno',href:'index.html#nerve'},
      ...['Brianna Baxter','Panic','Four To Eight'].map(title=>({title,type:'Artist',detail:'Artist management',href:'index.html#management'})),
      ...tours.map(tour=>({title:tour.name,type:'Touring',detail:'Touring and bookings',href:'index.html#touring'})),
      {title:'About Ashby',type:'Information',detail:'Naarm / Melbourne · Independent events',href:'index.html#about'},
      {title:'Enquiries',type:'Contact',detail:'Bookings and partnerships',href:'index.html#contact'}
    ];
    const normalize=text=>text.toLowerCase().normalize('NFKD').replace(/ø/g,'o').replace(/[\u0300-\u036f]/g,'');
    function closeSearch(){searchBox.hidden=true;search.setAttribute('aria-expanded','false');}
    function renderSearch(){
      const query=normalize(search.value.trim());
      if(!query){closeSearch();return;}
      const words=query.split(/\s+/);const matches=items.filter(item=>words.every(word=>normalize(item.title+' '+item.type+' '+item.detail).includes(word))).slice(0,8);
      $('.search-status',searchBox).textContent=matches.length ? `${matches.length} ${matches.length === 1 ? 'result' : 'results'}` : 'No matches. Try an event or artist name.';
      const links=$('.search-links',searchBox);links.replaceChildren();
      matches.forEach(item=>{const a=document.createElement('a');a.href=item.href;const title=document.createElement('strong');title.textContent=item.title;const type=document.createElement('span');type.textContent=item.type;a.append(title,type);links.append(a);});
      searchBox.hidden=false;search.setAttribute('aria-expanded','true');
    }
    search.addEventListener('input',renderSearch);search.addEventListener('focus',()=>{if(search.value)renderSearch();});
    $('.header-search').addEventListener('submit',e=>{e.preventDefault();const first=$('a',searchBox);if(!searchBox.hidden&&first)first.click();});
    $('.header-search').addEventListener('keydown',e=>{
      const links=$$('a',searchBox);
      if(e.key==='Escape'){closeSearch();search.focus();}
      if(e.key==='ArrowDown'&&links.length&&!searchBox.hidden){e.preventDefault();const index=links.indexOf(document.activeElement);links[(index+1)%links.length].focus();}
      if(e.key==='ArrowUp'&&links.length&&!searchBox.hidden){e.preventDefault();const index=links.indexOf(document.activeElement);if(index<=0)search.focus();else links[index-1].focus();}
    });
    $$('.search-links',searchBox).forEach(list=>list.addEventListener('click',e=>{if(e.target.closest('a'))closeSearch();}));
    document.addEventListener('click',e=>{if(!e.target.closest('.header-search'))closeSearch();});
    $('.header-search').addEventListener('focusout',()=>requestAnimationFrame(()=>{if(!$('.header-search').contains(document.activeElement))closeSearch();}));
  }
  // One-shot reveals leave content visible without JavaScript or with reduced motion.
  const reveals = $$('.section-index, .intro-grid > *, .section-heading > *, .brand-card, .detail-copy > *, .gallery-strip, .tour-record, .roster-card, .about-copy > *, .contact-grid > *, .poster-card, .archive-more, .featured-festival, .event-detail-copy');
  let observer;
  function motionSetup() {
    observer?.disconnect();
    if (reduced.matches) { reveals.forEach(el => el.classList.remove('reveal')); return; }
    observer = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting) {entry.target.classList.add('is-visible'); observer.unobserve(entry.target);}}), {threshold:0.08});
    reveals.forEach(el => {el.classList.add('reveal'); observer.observe(el);});
  }
  if ('IntersectionObserver' in window) motionSetup();
  reduced.addEventListener('change', motionSetup);
  document.documentElement.classList.add('motion-ready');
})();
