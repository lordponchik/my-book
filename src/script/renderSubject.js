import { fetchGenre } from './booksAPI';
import svg from '../image/no-image-placeholder.svg';

const genreEl = document.querySelector('.hero__wrapper--genre');
const genreBtnEl = document.querySelector('.category');
let activeСurrentBtnEl = genreBtnEl.querySelector('.category__btn.active');

fetchGenre('love').then(data => {
  genreEl.innerHTML = renderBook(data);
});

genreBtnEl.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;

  activeСurrentBtnEl.classList.remove('active');
  const activeNewBtnEl = e.target;
  activeNewBtnEl.classList.add('active');
  activeСurrentBtnEl = activeNewBtnEl;
  genreEl.innerHTML = '';

  fetchGenre(e.target.getAttribute('data-name')).then(data => {
    genreEl.innerHTML = renderBook(data);
  });
});

function renderBook(items) {
  return items
    .map(item => {
      return `
  <div class="genre">
           <div class="genre__container"><div class="genre__img"><img src="${thumbnail(
             item.volumeInfo
           )}" alt="" width="100"></div>
              <div class="genre__wrapper">
                <h3 class="genre__name">${isTitle(item.volumeInfo.title)}</h3>
                <p class="genre__author">${isAuthor(item.volumeInfo.authors)}</p>
                <p class="genre__date">${isDate(item.volumeInfo.publishedDate)}</p>     
              </div></div>
              <p class="genre__description">${isDescr(item.volumeInfo.description)}</p>
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
