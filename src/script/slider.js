export function sliderBooks(category, classNameSlide) {
  const books = [...document.querySelectorAll(`.${category} .${classNameSlide}`)];
  const controlls = [...document.querySelector(`.${category}`).nextElementSibling.children];
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
}
