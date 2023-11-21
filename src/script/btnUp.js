const btnUpEl = document.querySelector('.btnUp');

window.addEventListener('scroll', () => {
  const scrollY = document.documentElement.scrollTop;

  scrollY > 400 ? btnUpEl.classList.remove('hide') : btnUpEl.classList.add('hide');
});

btnUpEl.addEventListener('click', () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});
