import { fetchBooksCategory } from './booksAPI';
import { modalShow } from './modal';
import { renderBooks } from './renderBooks';
import { sliderBooks } from './slider';

const seriesEl = document.querySelectorAll('.book-series__list');
const potterEl = document.querySelector('.potter');
const icefireEl = document.querySelector('.icefire');
const witcherEl = document.querySelector('.witcher');
const darkTowerEl = document.querySelector('.dark-tower');

fetchBooksCategory('harry+potter')
  .then(items => {
    potterEl.innerHTML = renderBooks(items, 'series');
    addSlider('potter', 'series');
  })
  .catch(error => {
    potterEl.innerHTML = `<p style="align-self:center;margin:0 auto;text-align:center;color:var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We have lost the results from the server, please reload the page</p>`;
  });

fetchBooksCategory('a+song+of+ice+and+fire')
  .then(items => {
    icefireEl.innerHTML = renderBooks(items, 'series');
    addSlider('icefire', 'series');
  })
  .catch(error => {
    potterEl.innerHTML = `<p style="align-self:center;margin:0 auto;text-align:center;color:var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We have lost the results from the server, please reload the page</p>`;
  });
fetchBooksCategory('the+witcher')
  .then(items => {
    witcherEl.innerHTML = renderBooks(items, 'series');
    addSlider('witcher', 'series');
  })
  .catch(error => {
    potterEl.innerHTML = `<p style="align-self:center;margin:0 auto;text-align:center;color:var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We have lost the results from the server, please reload the page</p>`;
  });
fetchBooksCategory('the+dark+tower')
  .then(items => {
    darkTowerEl.innerHTML = renderBooks(items, 'series');
    addSlider('dark-tower', 'series');
  })
  .catch(error => {
    potterEl.innerHTML = `<p style="align-self:center;margin:0 auto;text-align:center;color:var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We have lost the results from the server, please reload the page</p>`;
  });

seriesEl.forEach(el => {
  el.addEventListener('click', modalShow, true);
});
function addSlider(cat, child) {
  sliderBooks(cat, child);
}
