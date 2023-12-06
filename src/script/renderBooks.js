import svg from '../image/no-image-placeholder.svg';
import { isBookInLibrary } from './localList';

export function renderBooks(items, name = 'book', descr = false, modal = false) {
  if (modal === true) {
    const isInLibrary = isBookInLibrary(items);

    return `
  <div class="${name}" data-id="${items.id}">
             <div class="${name}__img"><img src="${thumbnail(
      items.volumeInfo
    )}" alt="" width="200"></div>
              <div class="${name}__wrapper">
                <h3 class="${name}__name">${items.volumeInfo.title}</h3>
                <p class="${name}__author">${isAuthor(items.volumeInfo.authors)}</p>
                <p class="${name}__date">${isDate(items.volumeInfo.publishedDate)}</p>
                <p class="${name}__description">${isDescr(items.volumeInfo.description)}</p>
                <button type="button" class="${name}__btn ${
      isInLibrary === false ? '' : 'hidden'
    }"  data-name="add" data-id="${items.id}">add book from library</button>
      <button type="button" class="${name}__btn ${
      isInLibrary === true ? '' : 'hidden'
    }" data-name="remove" data-id="${items.id}">remove book from library</button>
              </div>
            </div>`;
  }

  return items
    .map(item => {
      return `<li class="${name}" data-id="${item.id}">
           <div class="${name}__container"><div class="${name}__img"><img src="${thumbnail(
        item.volumeInfo
      )}" alt="" width="100"></div>
              <div class="${name}__wrapper">
                <h3 class="${name}__name">${isTitle(item.volumeInfo.title)}</h3>
                <p class="${name}__author">${isAuthor(item.volumeInfo.authors)}</p>
                <p class="${name}__date">${isDate(item.volumeInfo.publishedDate)}</p>     
              </div></div>
              ${
                descr
                  ? ` <p class="${name}__description">${isDescr(item.volumeInfo.description)}</p>`
                  : ''
              }
              </li>`;
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
  return descr.length > 585 ? `${descr.slice(0, 585)}...` : descr;
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
  return title.length > 40 ? `${title.slice(0, 40)}...` : title;
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
