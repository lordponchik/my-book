import { renderBooks } from './renderBooks';

const LIBRARY_LIST = 'library';

let temporaryСell = JSON.parse(localStorage.getItem(LIBRARY_LIST)) || [];
let isInLibrary = false;

function addBook(e) {
  let localArr = JSON.parse(localStorage.getItem(LIBRARY_LIST)) || [];

  const addId = temporaryСell.find(el => el.id === e.target.getAttribute('data-id'));

  localArr.push(addId);
  localStorage.setItem(LIBRARY_LIST, JSON.stringify(localArr));

  if (
    document.querySelector('.backdrop.show') !== null &&
    document
      .querySelector('.backdrop.show')
      .querySelector('button[data-name="add"]')
      .getAttribute('data-id') ===
      document.querySelector('button[data-name="add"]').getAttribute('data-id')
  ) {
    document.querySelector('button[data-name="add"]').classList.add('hidden');
    document.querySelector('button[data-name="remove"]').classList.remove('hidden');
  }

  e.target.classList.add('hidden');
  e.target.nextElementSibling.classList.remove('hidden');

  const libraryEl = document.querySelector('.loc-library__list');

  if (libraryEl !== null) {
    libraryEl.innerHTML = '';
    libraryEl.innerHTML = renderBooks(localArr, 'library', false, false);
  }

  localArr = [];
}
function removeBook(e) {
  let localArr = JSON.parse(localStorage.getItem(LIBRARY_LIST));

  localArr.splice(
    localArr.findIndex(el => el.id === e.target.getAttribute('data-id')),
    1
  );

  localStorage.setItem(LIBRARY_LIST, JSON.stringify(localArr));

  if (
    document.querySelector('.backdrop.show') &&
    document
      .querySelector('.backdrop.show')
      .querySelector('button[data-name="remove"]')
      .getAttribute('data-id') ===
      document.querySelector('button[data-name="remove"]').getAttribute('data-id')
  ) {
    document.querySelector('button[data-name="remove"]').classList.add('hidden');
    document.querySelector('button[data-name="add"]').classList.remove('hidden');
  }

  e.target.classList.add('hidden');
  e.target.previousElementSibling.classList.remove('hidden');

  const libraryEl = document.querySelector('.loc-library__list');

  if (libraryEl !== null) {
    libraryEl.innerHTML = '';
    libraryEl.innerHTML = renderBooks(localArr, 'library', false, false);
  }

  localArr = [];
}

export function isBookInLibrary(book) {
  if (!temporaryСell.some(el => el.id === book.id)) {
    temporaryСell.push(book);
  }

  const localeList = JSON.parse(localStorage.getItem(LIBRARY_LIST)) || [];

  isInLibrary = localeList.some(el => el.id === book.id);

  return isInLibrary;
}

export function loadBtn(e) {
  const buttonsEl = {
    addBookEl: document.querySelector('button[data-name="add"]'),
    removeBookEl: document.querySelector('button[data-name="remove"]'),
  };

  buttonsEl.addBookEl.addEventListener('click', addBook);
  buttonsEl.removeBookEl.addEventListener('click', removeBook);
}

export function loadModalBtn(e) {
  if (document.querySelector('.backdrop.show') !== null) {
    const buttonsModalEl = {
      addBookEl: document.querySelector('.backdrop.show').querySelector('button[data-name="add"]'),
      removeBookEl: document
        .querySelector('.backdrop.show')
        .querySelector('button[data-name="remove"]'),
    };

    buttonsModalEl.addBookEl.addEventListener('click', addBook);
    buttonsModalEl.removeBookEl.addEventListener('click', removeBook);

    return;
  }

  const buttonsModalEl = {
    addBookEl: document.querySelector('.backdrop.show').querySelector('button[data-name="add"]'),
    removeBookEl: document
      .querySelector('.backdrop.show')
      .querySelector('button[data-name="remove"]'),
  };

  buttonsModalEl.addBookEl.removeEventListener('click', addBook);
  buttonsModalEl.removeBookEl.removeEventListener('click', e => {
    removeBook();
  });
}
