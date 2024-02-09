import { fetchGenre } from './booksAPI';
import { renderBooks } from './renderBooks';
import { objBook } from './localList';

const genreEl = document.querySelector('.hero__wrapper--genre');
const genreBtnEl = document.querySelector('.category');
let activeСurrentBtnEl = genreBtnEl.querySelector('.category__btn.active');

fetchGenre('liebe')
  .then(data => {
    const obj_book = [];
    data.map(el => obj_book.push(new objBook(el)));

    genreEl.innerHTML = renderBooks(data, 'genre', true, false, obj_book);

    obj_book.forEach(element => element.addEvent());
  })
  .catch(error => {
    genreEl.innerHTML = `<p style="align-self:center;margin:0 auto;text-align:center;color:var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We have lost the results from the server, please reload the page</p>`;
  });

genreBtnEl.addEventListener('click', renderCategory);

function renderCategory(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  activeСurrentBtnEl.classList.remove('active');
  const activeNewBtnEl = e.target;
  activeNewBtnEl.classList.add('active');
  activeСurrentBtnEl = activeNewBtnEl;
  genreEl.innerHTML = '';

  fetchGenre(e.target.getAttribute('data-name'))
    .then(data => {
      genreEl.innerHTML = renderBooks(data, 'genre', true);
    })
    .catch(error => {
      genreEl.innerHTML = `<p style="align-self:center;margin:0 auto;text-align:center;color:var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We have lost the results from the server, please reload the page</p>`;
    });
}
