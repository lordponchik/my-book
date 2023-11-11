import { fetchBooks } from './booksAPI';
import svg from '../image/no-image-placeholder.svg';

const potterEl = document.querySelector('.potter');

fetchBooks('harry+potter').then(items => {
  potterEl.innerHTML = renderPotter(items);
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
    return '...';
  }
  return author.join(', ');
}
function isDate(date) {
  if (!date) {
    return 'in the process of writing...';
  }
  return date;
}

function renderPotter(books) {
  return books
    .map(({ volumeInfo }) => {
      return `<li class="book-series__item">
              <div class="book-series__img"><img src="${thumbnail(
                volumeInfo
              )}" alt="" width="150"></div>
              <div class="book-series__wrapper">
                <h3 class="book-series__name">${isTitle(volumeInfo.title)}</h3>
                <p class="book-series__author">${isAuthor(volumeInfo.authors)}</p>
                <p class="book-series__date">${isDate(volumeInfo.publishedDate)}</p>
              </div>
            </li>`;
    })
    .join('');
}
