import { fetchBook } from './booksAPI';
import { renderModalBook } from './renderBookInModal';

const backdropEl = document.querySelector('.backdrop');
const bookCategoryEl = document.querySelectorAll('.book-series__list');
const backdropBtnCloseEl = document.querySelector('.backdrop__close');

backdropEl.addEventListener('click', backdropHidden);
backdropBtnCloseEl.addEventListener('click', backdropClose);

bookCategoryEl.forEach(el => {
  el.addEventListener('click', backdropShow);
});

function backdropShow(e) {
  if (e.target.nodeName === e.currentTarget.nodeName) return;
  const item = e.target.nodeName === 'LI' ? e.target : e.target.parentNode.parentNode;

  backdropEl.classList.add('show');
  bodyHidden();

  fetchBook(item.getAttribute('data-id')).then(data => {
    backdropEl.firstElementChild.lastElementChild.innerHTML = renderModalBook(data);
  });
}

function backdropHidden(e) {
  if (e.target !== e.currentTarget) return;

  e.target.firstElementChild.lastElementChild.innerHTML = '';
  e.target.classList.remove('show');
  bodyHidden();
}

function backdropClose() {
  backdropEl.firstElementChild.lastElementChild.innerHTML = '';
  backdropEl.classList.remove('show');
  bodyHidden();
}

function bodyHidden() {
  backdropEl.classList.contains('show')
    ? (document.body.style.overflow = 'hidden')
    : document.body.style.removeProperty('overflow');
}
