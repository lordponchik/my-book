const switchThemeBtnEl = document.querySelector('.switch-theme');
const switchSVG = {
  light: switchThemeBtnEl.querySelector('.switch-icon__light'),
  dark: switchThemeBtnEl.querySelector('.switch-icon__dark'),
};
const LOCALE_THEME = 'theme';

switchThemeBtnEl.addEventListener('click', () => {
  const dataTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = dataTheme === 'light' ? 'dark' : 'light';

  localStorage.setItem(LOCALE_THEME, newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
  switchSVG[dataTheme].classList.toggle('hidden');
  switchSVG[newTheme].classList.toggle('hidden');
});
