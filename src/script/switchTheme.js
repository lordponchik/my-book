const switchThemeBtnEl = document.querySelector('.switch-theme');
const LOCALE_THEME = 'theme';

switchThemeBtnEl.addEventListener('click', () => {
  const dataTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = dataTheme === 'light' ? 'dark' : 'light';

  localStorage.setItem(LOCALE_THEME, newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
});
