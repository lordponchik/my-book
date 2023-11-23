import { fetchGenre } from './booksAPI';
import { renderBooks } from './renderBooks';

const genreEl = document.querySelector('.hero__wrapper--genre');
const genreBtnEl = document.querySelector('.category');
let activeСurrentBtnEl = genreBtnEl.querySelector('.category__btn.active');

fetchGenre('liebe').then(data => {
  genreEl.innerHTML = renderBooks(data, 'genre', true);
});

genreBtnEl.addEventListener('click', renderCategory);

function renderCategory(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  activeСurrentBtnEl.classList.remove('active');
  const activeNewBtnEl = e.target;
  activeNewBtnEl.classList.add('active');
  activeСurrentBtnEl = activeNewBtnEl;
  genreEl.innerHTML = '';

  fetchGenre(e.target.getAttribute('data-name')).then(data => {
    genreEl.innerHTML = renderBooks(data, 'genre', true);
  });
}
