# My-book

A site for searching books and adding them to your library. Created to improve skills in using
various technologies when creating websites.

### 🔧 Technologies used:

- HTML
- CSS
- BEM
- SCSS
- JS

### 🔍 APIs used:

[Google Books APIs](https://developers.google.com/books/docs/overview?hl=en)

### 🔌 Added dependencies:

- ["parcel": "^2.10.2"](https://parceljs.org/)
- ["axios": "^1.6.1"](https://axios-http.com/docs/intro)
- ["tui-pagination": "^3.4.1"](https://github.com/nhn/tui.pagination)
- ["modern-normalize": "^2.0.0"](https://github.com/sindresorhus/modern-normalize)
- ["sass": "^1.69.5"](https://www.npmjs.com/package/sass)

### ✅ Implemented:

*General:*

- added change of site theme;
- added a button to quickly move to the top of the site;
- adding a book to the library is implemented using the localStorage web storage;
- implemented adaptive pages;
- implemented the opening of a modal window with additional information when clicking on a book;

*Home:*

- rendering of random books based on four book series;
- custom animation for book series categories;
- slider for books in the mobile version of the site;

*Catalog:*

- when entering this page - a render of 10 random books in the .hero section in 5 categories.
- added a slider for books in the .hero section
- when entering this page - books are rendered in the .catalog section according to the first
  category from the .hero section;
- added the ability to search for books by book title;
- added pagination for the book catalog;

*My Library:*

- in the .hero section, a random book is displayed from the array in the dictionary.json file;
- a button for updating a random book has been added to the .hero section;
- when entering the page on this page - a render of books added to the library;
- added pagination for the book library;
- the number of pages is updated when books are added or removed from the library page;



<details>
	<summary>:ukraine: Russian</summary>

Сайт для поиска книг и добавления их в свою библиотеку. Создан для улучшения навыков использования
различных технологий при создании сайтов.

### 🔧 Использованные технологии:

- HTML
- CSS
- BEM
- SCSS
- JS

### 🔍 Использованные APIs:

[Google Books APIs](https://developers.google.com/books/docs/overview?hl=en)

### 🔌 Добавленные зависимости:

- ["parcel": "^2.10.2"](https://parceljs.org/)
- ["axios": "^1.6.1"](https://axios-http.com/docs/intro)
- ["tui-pagination": "^3.4.1"](https://github.com/nhn/tui.pagination)
- ["modern-normalize": "^2.0.0"](https://github.com/sindresorhus/modern-normalize)
- ["sass": "^1.69.5"](https://www.npmjs.com/package/sass)

### ✅ Реализовано:

*Общее:*

- смена темы сайта;
- добавлена кнопка для быстрого перемещения наверх сайта;
- добавление книги в библиотеку реализовано - с помощью веб-хранилища localStorage;
- реализован адаптив страниц;
- реализовано открытие модального окна с дополнительной информацией при нажатии на книгу;

*Главная страница:*

- рендер случайных книг по четырем сериям книг;
- своя анимация для категорий серий книг;
- слайдер для книг в мобильной версии сайта;

*Каталог:*

- рендер 10 случайных книг в секции .hero по 5 категориям.
- слайдер для книг в секции .hero
- при входе на данную страницу - рендер книг в секцию .catalog согласно первой категории из секции
  .hero;
- возможность поиска книг по наименованию книги;
- добавлена пагинация для каталога книг;

*Библиотека:*

- в секции .hero выводится рандомная книга из массива в файле dictionary.json;
- в секции .hero добавлена кнопка для обновления рандомной книги;
- при входе на страницу на данную страницу - рендер книг добавленных в библиотеку;
- добавлена пагинация для библиотеки книг;
- количество страниц обновляется и при добавлении и удалении книг со страницы библиотеки;
</details>
