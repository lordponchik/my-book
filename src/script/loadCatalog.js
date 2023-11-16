import { fetchCatalog } from './booksAPI';
import svg from '../image/no-image-placeholder.svg';

const catalogEl = document.querySelector('.sect-catalog__wrapper');
const catalogInput = document.querySelector('.sect-catalog__input');
const catalogSubmit = document.querySelector('.sect-catalog__submit');

catalogEl.innerHTML = '';
fetchCatalog('love').then(data => {
  catalogEl.innerHTML = renderBook(data);
});

catalogSubmit.addEventListener('click', renderCatalog);
catalogInput.addEventListener('submit', renderCatalog);

function renderCatalog(e) {
  e.preventDefault();

  catalogEl.innerHTML = '';
  fetchCatalog(`${catalogInput.value.split(' ').join('+')}`).then(data => {
    catalogEl.innerHTML = renderBook(data);
  });
}

function renderBook(items) {
  return items
    .map(item => {
      return `
  <div class="catalog__item">
           <div class="catalog__container"><div class="catalog__img"><img src="${thumbnail(
             item.volumeInfo
           )}" alt="" width="100"></div>
              <div class="catalog__wrapper">
                <h3 class="catalog__name">${isTitle(item.volumeInfo.title)}</h3>
                <p class="catalog__author">${isAuthor(item.volumeInfo.authors)}</p>
                <p class="catalog__date">${isDate(item.volumeInfo.publishedDate)}</p>     
              </div></div>
            </div>`;
    })
    .join('');
}

function isDescr(descr) {
  if (!descr) {
    return '';
  }
  if (descr.includes('<p>')) {
    descr = descr.replaceAll('<p>', '');
    descr = descr.replaceAll('</p>', '');
  }
  return descr.length > 585 ? `${descr.slice(0, 580)}...` : descr;
}
function thumbnail({ imageLinks }) {
  if (!imageLinks || !imageLinks.thumbnail) {
    return svg;
  }
  return imageLinks.thumbnail;
}
function isTitle(title) {
  if (!title) {
    return 'Title in the registration process...';
  }
  return title;
}
function isAuthor(author) {
  if (!author) {
    return '';
  }
  return author.join(', ');
}
function isDate(date) {
  if (!date) {
    return 'in the process of writing...';
  }
  return date;
}
