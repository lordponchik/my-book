document
  .querySelector('.switch-theme')
  .querySelector(
    `.switch-icon__${
      localStorage.key('theme') === null
        ? 'dark'
        : localStorage.getItem('theme') === 'dark'
        ? 'light'
        : 'dark'
    }`
  )
  .classList.add('hidden');

document.documentElement.setAttribute(
  'data-theme',
  localStorage.key('theme') === null ? 'light' : localStorage.getItem('theme')
);
