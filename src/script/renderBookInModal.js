import svg from '../image/no-image-placeholder.svg';

export function renderModalBook({ volumeInfo }) {
  return `
  <div class="book">
             <div class="book__img"><img src="${thumbnail(volumeInfo)}" alt="" width="200"></div>
              <div class="book__wrapper">
                <h3 class="book__name">${isTitle(volumeInfo.title)}</h3>
                <p class="book__author">${isAuthor(volumeInfo.authors)}</p>
                <p class="book__date">${isDate(volumeInfo.publishedDate)}</p>
                <p class="book__description">${isDescr(volumeInfo.description)}</p>
              </div>
            </div>`;
}

function isDescr(descr) {
  if (!descr) {
    return '';
  }
  if (descr.includes('<p>')) {
    descr = descr.replaceAll('<p>', '');
    descr = descr.replaceAll('</p>', '');
  }
  return descr.length > 550 ? `${descr.slice(0, 550)}...` : descr;
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
