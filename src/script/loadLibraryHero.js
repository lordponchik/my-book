import { fetchRandomBook } from './booksAPI';
import { renderBooks } from './renderBooks';
import dictionary from './dictionary.json';
import { loadBtn } from './localList';

const heroEl = document.querySelector('.rndbook');
const randomBtnEl = document.querySelector('.btn-random');

fetchRandomBook(randomName()).then(item => {
  heroEl.innerHTML = renderBooks(item[0], 'random-book', true, true);
  loadBtn();
});

randomBtnEl.addEventListener('click', e => {
  e.preventDefault();

  heroEl.innerHTML = '';

  fetchRandomBook(randomName()).then(item => {
    heroEl.innerHTML = renderBooks(item[0], 'random-book', true, true);
    loadBtn();
  });
});

function randomName() {
  return dictionary[Math.floor(Math.random() * dictionary.length)];
}
