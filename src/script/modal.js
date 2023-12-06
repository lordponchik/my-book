import { fetchBook } from './booksAPI';
import { loadModalBtn } from './localList';
import { renderBooks } from './renderBooks';

const backdropEl = document.querySelector('.backdrop');
const backdropBtnCloseEl = document.querySelector('.backdrop__close');

backdropEl.addEventListener('click', backdropHidden);
backdropBtnCloseEl.addEventListener('click', backdropClose);

export function modalShow(e) {
  if (e.target === e.currentTarget) return;

  const item = e.target.closest('LI');

  backdropEl.classList.add('show');
  bodyHidden();

  fetchBook(item.getAttribute('data-id')).then(data => {
    backdropEl.firstElementChild.lastElementChild.innerHTML = renderBooks(data, 'book', true, true);
    loadModalBtn();
  });
}

function backdropHidden(e) {
  if (e.target !== e.currentTarget) return;

  loadModalBtn();
  e.target.firstElementChild.lastElementChild.innerHTML = '';
  e.target.classList.remove('show');
  bodyHidden();
}

function backdropClose() {
  loadModalBtn();
  backdropEl.firstElementChild.lastElementChild.innerHTML = '';
  backdropEl.classList.remove('show');
  bodyHidden();
}

function bodyHidden() {
  backdropEl.classList.contains('show')
    ? (document.body.style.overflow = 'hidden')
    : document.body.style.removeProperty('overflow');
}
