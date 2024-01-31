import { fetchRandomBook } from './booksAPI';
import { renderBooks } from './renderBooks';
import dictionary from './dictionary.json';
import { objBook } from './localList';

const heroEl = document.querySelector('.rndbook');
const randomBtnEl = document.querySelector('.btn-random');

fetchRandomBook(randomName()).then(item => {
  const obj_book = [];
  obj_book.push(new objBook(item[0]));

  heroEl.innerHTML = renderBooks(item[0], 'random-book', true, true, obj_book);

  obj_book[0].addEvent();
});

randomBtnEl.addEventListener('click', e => {
  e.preventDefault();

  heroEl.innerHTML = '';

  fetchRandomBook(randomName()).then(item => {
    const obj_book = [];
    obj_book.push(new objBook(item[0]));

    heroEl.innerHTML = renderBooks(item[0], 'random-book', true, true, obj_book);
    obj_book[0].addEvent();
  });
});

function randomName() {
  return dictionary[Math.floor(Math.random() * dictionary.length)];
}
