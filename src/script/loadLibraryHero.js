import { fetchRandomBook } from './booksAPI';
import { renderBooks } from './renderBooks';
import dictionary from './dictionary.json';

const heroEl = document.querySelector('.rndbook');
const randomBtnEl = document.querySelector('.btn-random');

fetchRandomBook(randomName()).then(item => {
  heroEl.innerHTML = renderBooks(item[0], 'random-book', true, true);
});

randomBtnEl.addEventListener('click', e => {
  e.preventDefault();

  heroEl.innerHTML = '';

  fetchRandomBook(randomName()).then(item => {
    heroEl.innerHTML = renderBooks(item[0], 'random-book', true, true);
  });
});

function randomName() {
  return dictionary[Math.floor(Math.random() * dictionary.length)];
}
