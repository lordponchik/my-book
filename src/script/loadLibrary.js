import { renderBooks } from './renderBooks';
import { modalShow } from './modal';

const LIBRARY_LIST = 'library';
const localArr = JSON.parse(localStorage.getItem(LIBRARY_LIST));
const libraryEl = document.querySelector('.loc-library__list');

if (localArr !== null) {
  libraryEl.innerHTML = renderBooks(localArr, 'library', false, false);
}

libraryEl.addEventListener('click', modalShow);
