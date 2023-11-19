import { fetchCatalog } from './booksAPI';
import { modalShow } from './modal';
import { renderBooks } from './renderBooks';

const catalogEl = document.querySelector('.sect-catalog__wrapper');
const catalogInput = document.querySelector('.sect-catalog__input');
const catalogSubmit = document.querySelector('.sect-catalog__submit');

catalogEl.innerHTML = '';
fetchCatalog('love').then(data => {
  catalogEl.innerHTML = renderBooks(data, 'catalog');
});

catalogSubmit.addEventListener('click', renderCatalog);
catalogInput.addEventListener('submit', renderCatalog);

function renderCatalog(e) {
  e.preventDefault();

  catalogEl.innerHTML = '';
  fetchCatalog(`${catalogInput.value.split(' ').join('+')}`).then(data => {
    catalogEl.innerHTML = renderBooks(data, 'catalog');
  });
}

catalogEl.addEventListener('click', modalShow);
