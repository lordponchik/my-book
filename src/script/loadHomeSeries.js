import { fetchBooksCategory } from './booksAPI';
import { modalShow } from './modal';
import { renderBooks } from './renderBooks';

const seriesEl = document.querySelectorAll('.book-series__list');
const potterEl = document.querySelector('.potter');
const icefireEl = document.querySelector('.icefire');
const witcherEl = document.querySelector('.witcher');
const darkTowerEl = document.querySelector('.dark-tower');

fetchBooksCategory('harry+potter').then(items => {
  potterEl.innerHTML = renderBooks(items, 'series');
});
fetchBooksCategory('a+song+of+ice+and+fire').then(items => {
  icefireEl.innerHTML = renderBooks(items, 'series');
});
fetchBooksCategory('the+witcher').then(items => {
  witcherEl.innerHTML = renderBooks(items, 'series');
});
fetchBooksCategory('the+dark+tower').then(items => {
  darkTowerEl.innerHTML = renderBooks(items, 'series');
});

seriesEl.forEach(el => {
  el.addEventListener('click', modalShow, true);
});
