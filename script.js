document.querySelector('.nav-toggle')?.addEventListener('click', (e)=>{
  const btn = e.currentTarget;
  const nav = document.getElementById('primary-nav');
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
