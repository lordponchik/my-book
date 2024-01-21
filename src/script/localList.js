import { renderBooks } from './renderBooks';

const LIBRARY_LIST = 'library';
let temporaryСell = JSON.parse(localStorage.getItem(LIBRARY_LIST)) || [];

export class objBook {
  constructor(book) {
    this.book = book;
    this.id = this.book.id;
    this.btns = null;
  }
  createBtn(name) {
    temporaryСell = JSON.parse(localStorage.getItem(LIBRARY_LIST)) || [];
    if (temporaryСell.find(el => el.id === this.id)) {
      return `<button type="button" class="${name}__btn" data-id="${this.id}">remove book from library</button>`;
    }
    return `<button type="button" class="${name}__btn" data-id="${this.id}">add book to library</button>`;
  }

  addEvent() {
    this.btns = [...document.querySelectorAll(`button[data-id="${this.id}"]`)];

    this.btns[this.btns.length === 1 ? 0 : 1].addEventListener('click', e => {
      if (e.currentTarget.textContent === 'add book to library') {
        temporaryСell.push(this.book);
        localStorage.setItem(LIBRARY_LIST, JSON.stringify(temporaryСell));
        this.btns.forEach(bt => {
          bt.textContent = 'remove book from library';
        });

        const libraryEl = document.querySelector('.loc-library__list');

        if (libraryEl !== null) {
          libraryEl.innerHTML = '';
          libraryEl.innerHTML = renderBooks(temporaryСell, 'library', false, false);
        }
      } else if (e.currentTarget.textContent === 'remove book from library') {
        temporaryСell.splice(
          temporaryСell.findIndex(el => el.id === this.id),
          1
        );
        localStorage.setItem(LIBRARY_LIST, JSON.stringify(temporaryСell));
        this.btns.forEach(bt => {
          bt.textContent = 'add book to library';
        });
        const libraryEl = document.querySelector('.loc-library__list');

        if (libraryEl !== null) {
          libraryEl.innerHTML = '';
          libraryEl.innerHTML = renderBooks(temporaryСell, 'library', false, false);
        }
      }
    });
  }
}
