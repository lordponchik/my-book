export function sliderBooks(category, classNameSlide) {
  const books = [...document.querySelectorAll(`.${category} .${classNameSlide}`)];

  const categoryDiv = document.querySelector(`.${category}`);
  addControlsBtn(categoryDiv);
  const controlls = [...document.querySelector(`.${category}`).nextElementSibling.children];
  schowControllBtns();
  let slideIndex = 0;

  show(0);

  controlls.forEach(e => {
    e.addEventListener('click', event => {
      if (event.target.classList.contains('prev')) {
        let index = slideIndex - 1;

        if (index < 0) {
          index = books.length - 1;
        }
        show(index);
      } else if (event.target.classList.contains('next')) {
        let index = slideIndex + 1;

        if (index >= books.length) {
          index = 0;
        }

        show(index);
      }
    });
  });

  function show(index) {
    books[slideIndex].classList.remove('active');
    books[index].classList.add('active');
    slideIndex = index;
  }
  function addControlsBtn(categoryDiv) {
    categoryDiv.insertAdjacentHTML(
      'afterend',
      `<div class="controlls">
                <div class="prev"></div>
                <div class="next"></div>
              </div>`
    );
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;

      controlls[0].parentNode.style.display = 'none';
    });
    window.matchMedia('(max-width: 767px)').addEventListener('change', e => {
      if (!e.matches) return;

      controlls[0].parentNode.style.display = 'flex';
    });
  }
  function schowControllBtns() {
    if (window.innerWidth >= 768) {
      controlls[0].parentNode.style.display = 'none';
    } else if (window.innerWidth < 768) {
      controlls[0].parentNode.style.display = 'flex';
    }
  }
}
