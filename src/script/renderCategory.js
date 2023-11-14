import { fetchBooksCategory } from './booksAPI';

import svg from '../image/no-image-placeholder.svg';

const potterEl = document.querySelector('.potter');
const icefireEl = document.querySelector('.icefire');
const witcherEl = document.querySelector('.witcher');
const darkTowerEl = document.querySelector('.dark-tower');

fetchBooksCategory('harry+potter').then(items => {
  potterEl.innerHTML = renderBooks(items);
});
fetchBooksCategory('a+song+of+ice+and+fire').then(items => {
  icefireEl.innerHTML = renderBooks(items);
});
fetchBooksCategory('the+witcher').then(items => {
  witcherEl.innerHTML = renderBooks(items);
});
fetchBooksCategory('the+dark+tower').then(items => {
  darkTowerEl.innerHTML = renderBooks(items);
});

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
  return title.length > 45 ? `${title.slice(0, 45)}...` : title;
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

function renderBooks(books) {
  return books
    .map(item => {
      return `<li class="book-series__item" data-id="${item.id}">
             <div class="book-series__img"><img src="${thumbnail(
               item.volumeInfo
             )}" alt="" width="150"></div>
              <div class="book-series__wrapper">
                <h3 class="book-series__name">${isTitle(item.volumeInfo.title)}</h3>
                <p class="book-series__author">${isAuthor(item.volumeInfo.authors)}</p>
                <p class="book-series__date">${isDate(item.volumeInfo.publishedDate)}</p>
              </div>
            </li>`;
    })
    .join('');
}
