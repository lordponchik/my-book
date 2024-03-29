import { fetchCatalog } from './booksAPI';
import { modalShow } from './modal';
import { pagination } from './pagination';
import { renderBooks } from './renderBooks';

const catalogEl = document.querySelector('.sect-catalog__wrapper');
const catalogInput = document.querySelector('.sect-catalog__input');
const catalogSubmit = document.querySelector('.sect-catalog__submit');
let search = 'liebe';

catalogEl.innerHTML = '';
fetchCatalog(search)
  .then(data => {
    catalogEl.innerHTML = renderBooks(data, 'catalog');
  })
  .catch(error => {
    catalogEl.innerHTML = `<p style="text-align:center;color: var(--secondary-text-color);">OOPS... <br />
We are very sorry!</p>`;
  });

catalogSubmit.addEventListener('click', renderCatalog);
catalogInput.addEventListener('submit', renderCatalog);

function renderCatalog(e) {
  e.preventDefault();

  search = `${catalogInput.value.split(' ').join('+')}`;
  catalogEl.innerHTML = '';
  fetchCatalog(search)
    .then(data => {
      catalogEl.innerHTML = renderBooks(data, 'catalog');
      pagination.reset();
    })
    .catch(error => {
      catalogEl.innerHTML = `<p style="text-align:center;color: var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We don’t have any results matching your search.</p>`;
    });
}

catalogEl.addEventListener('click', modalShow);

pagination.on('afterMove', event => {
  let num = (event.page - 1) * 33;

  catalogEl.innerHTML = '';

  fetchCatalog(search, num)
    .then(data => {
      catalogEl.innerHTML = renderBooks(data, 'catalog');
    })
    .catch(error => {
      catalogEl.innerHTML = `<p style="text-align:center;color: var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We don’t have any results matching your search.</p>`;
    });

  window.scrollTo({
    top: catalogInput.getBoundingClientRect().y,
    left: 0,
    behavior: 'smooth',
  });
});
