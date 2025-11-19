// Minimal JS for index_test
(function(){
    const backBtn = document.getElementById('back-to-top');
    window.showBack = function(){
        if(window.scrollY > 300){backBtn.style.display = 'block'} else {backBtn.style.display = 'none'}
    }
    window.hideBack = function(){ window.scrollTo({top:0,behavior:'smooth'}); }
    window.onHover = function(){ const b = document.getElementById('contact-btn'); if(b) b.style.transform='translateY(-2px)'; }
    window.onNotHover = function(){ const b = document.getElementById('contact-btn'); if(b) b.style.transform='none'; }
    window.Send = function(){
        const textarea = document.getElementById('message');
        const phone = '970592103756';
        const text = textarea && textarea.value ? textarea.value : '';
        const url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(text);
        window.open(url,'_blank');
    }
    // show/hide back button on scroll (throttle)
    let scheduled = false;
    window.addEventListener('scroll', function(){ if(!scheduled){ scheduled = true; setTimeout(()=>{ scheduled=false; showBack(); },100); } });
})();

// Additional helpers for new hero
function requestDemo(){
    const mailto = 'mailto:hashemalkeshawi@gmail.com?subject=' + encodeURIComponent('Requesting FocusFlow demo') + '&body=' + encodeURIComponent('Hi Hashem,%0A%0AI would like to request a demo of FocusFlow and learn about beta participation.%0A%0ARegards,');
    window.location.href = mailto;
}

// Small utility: smooth scroll for internal links
document.addEventListener('click', function(e){
    const a = e.target.closest && e.target.closest('a');
    if(!a) return;
    if(a.getAttribute('href') && a.getAttribute('href').startsWith('#')){
        e.preventDefault();
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    }
});

// Language toggle (EN / AR) for simple content switching
document.addEventListener('DOMContentLoaded', function(){
    function setLang(lang){
        document.documentElement.lang = (lang === 'ar') ? 'ar' : 'en';
        const enEls = document.querySelectorAll('.en');
        const arEls = document.querySelectorAll('.ar');
        enEls.forEach(e=> e.style.display = (lang==='en') ? '' : 'none');
        arEls.forEach(e=> e.style.display = (lang==='ar') ? '' : 'none');
        document.getElementById('lang-en').classList.toggle('active', lang==='en');
        document.getElementById('lang-ar').classList.toggle('active', lang==='ar');
        // set direction
        document.documentElement.dir = (lang==='ar') ? 'rtl' : 'ltr';
    }

    const enBtn = document.getElementById('lang-en');
    const arBtn = document.getElementById('lang-ar');
    if(enBtn && arBtn){
        enBtn.addEventListener('click', ()=> setLang('en'));
        arBtn.addEventListener('click', ()=> setLang('ar'));
    }
    // default to English
    setLang('en');
});
