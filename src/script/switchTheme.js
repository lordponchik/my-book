const switchThemeBtnEl = document.querySelector('.switch-theme');

switchThemeBtnEl.addEventListener('click', () => {
  let dataTheme = document.documentElement.getAttribute('data-theme'),
    newTheme;
  newTheme = dataTheme === 'light' ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', newTheme);
});

console.log(switchThemeBtnEl);
