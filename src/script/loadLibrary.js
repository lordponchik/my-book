import { renderBooks } from './renderBooks';
import { modalShow } from './modal';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const LIBRARY_LIST = 'library';
let localArr = JSON.parse(localStorage.getItem(LIBRARY_LIST));
const libraryEl = document.querySelector('.loc-library__list');
export let itemsPerPage = 12;
let pagination = null;

if (libraryEl !== null) {
  libraryEl.insertAdjacentHTML('afterend', `<div id="pagination" class="tui-pagination"></div>`);

  if (localArr.length === 0) {
    libraryEl.innerHTML = `<p style="text-align:center;color: var(--secondary-text-color);padding: 35px;
">Oops... </br> We are very sorry! </br>
There are no books in the library, add the first one.</p>`;
  }

  if (localArr !== null && localArr.length !== 0) {
    libraryEl.innerHTML = renderBooks(localArr.slice(0, itemsPerPage), 'library', false, false);
  }

  const container = document.getElementById('pagination');

  pagination = new Pagination(container, renderOptionsForPagination(localArr));

  libraryEl.addEventListener('click', modalShow);

  pagination.on('afterMove', event => {
    let num = (event.page - 1) * itemsPerPage;

    libraryEl.innerHTML = '';
    localArr = JSON.parse(localStorage.getItem(LIBRARY_LIST));

    if (localArr.length === 0) {
      libraryEl.innerHTML = `<p style="text-align:center;color: var(--secondary-text-color);padding: 35px;
">Oops... </br> We are very sorry! </br>
There are no books in the library, add the first one.</p>`;
    } else {
      libraryEl.innerHTML = renderBooks(
        localArr.slice(num, event.page * itemsPerPage),
        'library',
        false,
        false
      );
    }

    window.scrollTo({
      top: libraryEl.getBoundingClientRect().y,
      left: 0,
      behavior: 'smooth',
    });
  });
}

function renderOptionsForPagination(localArr) {
  return {
    totalItems: localArr.length,
    itemsPerPage: itemsPerPage,
    visiblePages: 6,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
}
export function toPagePagination() {
  if (pagination !== null) {
    pagination.movePageTo(1);
    pagination.reset(JSON.parse(localStorage.getItem(LIBRARY_LIST)).length);
  }
}
