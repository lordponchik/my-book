import { renderBooks } from './renderBooks';
import { modalShow } from './modal';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const LIBRARY_LIST = 'library';
let localArr = JSON.parse(localStorage.getItem(LIBRARY_LIST));
const libraryEl = document.querySelector('.loc-library__list');

libraryEl.insertAdjacentHTML('afterend', `<div id="pagination" class="tui-pagination"></div>`);

const container = document.getElementById('pagination');
export let itemsPerPage = 12;
export const pagination = new Pagination(container, renderOptionsForPagination(localArr));

if (localArr !== null) {
  libraryEl.innerHTML = renderBooks(localArr.slice(0, itemsPerPage), 'library', false, false);
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

libraryEl.addEventListener('click', modalShow);

pagination.on('afterMove', event => {
  let num = (event.page - 1) * itemsPerPage;

  libraryEl.innerHTML = '';
  localArr = JSON.parse(localStorage.getItem(LIBRARY_LIST));

  libraryEl.innerHTML = renderBooks(
    localArr.slice(num, event.page * itemsPerPage),
    'library',
    false,
    false
  );

  window.scrollTo({
    top: libraryEl.getBoundingClientRect().y,
    left: 0,
    behavior: 'smooth',
  });
});
