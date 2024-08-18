# My-book

- 🇺🇸 [English](#en)
- 🇺🇦 [Ukrainian](#uk)
- 🇷🇺 [Russian](#ru)

---

<h3 id="en">📚 EN 📚</h3>

> Practice of layout, styles and code

<img height="32" width="32" src="https://cdn.simpleicons.org/figma/##F24E1E" title="Figma"/>Design - [Figma layout](https://www.figma.com/file/fHqJtCApL4xcUV8M8yEWGq/SEOFlow?type=design&mode=design&t=lwq3kBEsMMvaETw0-0)

## Description

A site for searching books and adding them to your library. This project is a practical work on the layout of HTML pages using CSS, SASS and JavaScript. The goal of the project is to improve the skills of responsive layout, styling with CSS and SASS, and interaction with the DOM via JavaScript.

## Technology stack

<img height="32" width="32" src="https://cdn.simpleicons.org/html5/#E34F26" title="HTML5"/> <img height="32" width="32" src="https://cdn.simpleicons.org/bem/#000000" title="BEM"/> <img height="32" width="32" src="https://cdn.simpleicons.org/css3/#1572B6" title="CSS3"/> <img height="32" width="32" src="https://cdn.simpleicons.org/sass/#CC6699" title="SASS"/> <img height="32" width="32" src="https://cdn.simpleicons.org/javascript/#F7DF1E" title="JavaScript"/>

## 🔍 APIs used:

[Google Books APIs](https://developers.google.com/books/docs/overview?hl=en)

## Libraries used

- ["parcel": "^2.10.2"](https://parceljs.org/) is a packager for web applications, which helps automate the process of creating websites.
- ["axios": "^1.6.1"](https://axios-http.com/docs/intro) - is a JavaScript library that allows you to make HTTP requests from a browser or from Node.js.
- ["tui-pagination": "^3.4.1"](https://github.com/nhn/tui.pagination) - pagination component can show you the current page within a multi-page document and also provides links for included pages.
- ["modern-normalize": "^2.0.0"](https://github.com/sindresorhus/modern-normalize) — for unifying styles across browsers.
- ["sass": "^1.69.5"](https://www.npmjs.com/package/sass) — for writing nested styles and using variables in CSS.
- [gh-pages](https://www.npmjs.com/package/gh-pages) - publish files to a gh-pages branch on GitHub

## Implemented

_General:_

- added change of site theme;
- added a button to quickly move to the top of the site;
- adding a book to the library is implemented using the localStorage web storage;
- implemented adaptive pages;
- implemented the opening of a modal window with additional information when clicking on a book;

_HomePage:_

- rendering of random books based on four book series;
- custom animation for book series categories;
- slider for books in the mobile version of the site;

_Catalog:_

- when entering this page - a render of 10 random books in the .hero section in 5 categories.
- added a slider for books in the .hero section
- when entering this page - books are rendered in the .catalog section according to the first
  category from the .hero section;
- added the ability to search for books by book title;
- added pagination for the book catalog;

_My Library:_

- in the .hero section, a random book is displayed from the array in the dictionary.json file;
- a button for updating a random book has been added to the .hero section;
- when entering the page on this page - a render of books added to the library;
- added pagination for the book library;
- the number of pages is updated when books are added or removed from the library page;

---

---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3>

> Практика верстки, стилів і коду

<img height="32" width="32" src="https://cdn.simpleicons.org/figma/##F24E1E" title="Figma"/>Дизайн - [Figma layout](https://www.figma.com/file/fHqJtCApL4xcUV8M8yEWGq/SEOFlow?type=design&mode=design&t=lwq3kBEsMMvaETw0-0)

## Опис

Сайт для пошуку книг і додавання їх до вашої бібліотеки. Цей проект являє собою практичну роботу з верстки HTML-сторінок за допомогою CSS, SASS і JavaScript. Метою проекту є вдосконалення навичок адаптивної верстки, стилізації за допомогою CSS і SASS і взаємодії з DOM через JavaScript.

## Стек технологій

<img height="32" width="32" src="https://cdn.simpleicons.org/html5/#E34F26" title="HTML5"/> <img height="32" width="32" src="https://cdn.simpleicons.org/bem/#000000" title="BEM"/> <img height="32" width="32" src="https://cdn.simpleicons.org/css3/#1572B6" title="CSS3"/> <img height="32" width="32" src="https://cdn.simpleicons.org/sass/#CC6699" title="SASS"/> <img height="32" width="32" src="https://cdn.simpleicons.org/javascript/#F7DF1E" title="JavaScript"/>

## 🔍 Використовувані API:

[Google Books APIs](https://developers.google.com/books/docs/overview?hl=en)

## Використані бібліотеки

- ["parcel": "^2.10.2"](https://parceljs.org/) – пакувальник веб-додатків, який допомагає автоматизувати процес створення веб-сайтів.
- ["axios": "^1.6.1"](https://axios-http.com/docs/intro) - це бібліотека JavaScript, яка дозволяє робити HTTP-запити з браузера або з Node.js.
- ["tui-pagination": "^3.4.1"](https://github.com/nhn/tui.pagination) - компонент пагінації може показати вам поточну сторінку в багатосторінковому документі, а також надає посилання для включені сторінки.
- ["modern-normalize": "^2.0.0"](https://github.com/sindresorhus/modern-normalize) — для уніфікації стилів у різних браузерах.
- ["sass": "^1.69.5"](https://www.npmjs.com/package/sass) — для написання вкладених стилів і використання змінних у CSS.
- [gh-pages](https://www.npmjs.com/package/gh-pages) - публікувати файли у гілці gh-pages на GitHub

## Реалізовано

_Загальне:_

- додана зміна теми сайту;
- додана кнопка для швидкого переходу в початок сайту;
- додавання книги до бібліотеки реалізовано за допомогою веб-сховища localStorage;
- реалізовані адаптивні сторінки;
- реалізовано відкриття модального вікна з додатковою інформацією при натисканні на книгу;

_Домашня сторінка:_

- відтворення випадкових книг на основі чотирьох книжкових серій;
- власна анімація для категорій книжкових серій;
- слайдер для книг у мобільній версії сайту;

_Каталог:_

- при вході на цю сторінку - рендер 10 випадкових книг у розділі .hero у 5 категоріях.
- додано повзунок для книг у розділі .hero
- при вході на цю сторінку - книги відображаються в розділі .catalog відповідно до першого
  категорія з розділу .hero;
- додана можливість пошуку книг за назвою;
- додана пагінація для каталогу книг;

_Моя бібліотека:_

- у розділі .hero виводиться випадкова книга з масиву у файлі dictionary.json;
- в розділ .hero додана кнопка для оновлення випадкової книги;
- при вході на сторінку на цій сторінці - рендер книг, доданих до бібліотеки;
- додана пагінація для бібліотеки книг;
- кількість сторінок оновлюється при додаванні або видаленні книг зі сторінки бібліотеки;

---

---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3>

> Практика верстки, стилей и кода

<img height="32" width="32" src="https://cdn.simpleicons.org/figma/##F24E1E" title="Figma"/>Дизайн - [Figma layout](https://www.figma.com/file/fHqJtCApL4xcUV8M8yEWGq/SEOFlow?type=design&mode=design&t=lwq3kBEsMMvaETw0-0)

## Описание

Сайт для поиска книг и добавления их в библиотеку. Данный проект представляет собой практическую работу по верстке HTML-страниц с использованием CSS, SASS и JavaScript. Цель проекта — улучшить навыки адаптивной верстки, стилизации с помощью CSS и SASS, а также взаимодействия с DOM через JavaScript.

## Стек технологий

<img height="32" width="32" src="https://cdn.simpleicons.org/html5/#E34F26" title="HTML5"/> <img height="32" width="32" src="https://cdn.simpleicons.org/bem/#000000" title="BEM"/> <img height="32" width="32" src="https://cdn.simpleicons.org/css3/#1572B6" title="CSS3"/> <img height="32" width="32" src="https://cdn.simpleicons.org/sass/#CC6699" title="SASS"/> <img height="32" width="32" src="https://cdn.simpleicons.org/javascript/#F7DF1E" title="JavaScript"/>

## 🔍 Используемые API:

[Google Books APIs](https://developers.google.com/books/docs/overview?hl=en)

## Используемые библиотеки

- ["parcel": "^2.10.2"](https://parceljs.org/) — упаковщик веб-приложений, который помогает автоматизировать процесс создания веб-сайтов.
- ["axios": "^1.6.1"](https://axios-http.com/docs/intro) — библиотека JavaScript, которая позволяет вам делать HTTP-запросы из браузера или из Node.js.
- ["tui-pagination": "^3.4.1"](https://github.com/nhn/tui.pagination) — компонент пагинации может показывать вам текущую страницу в многостраничном документе, а также предоставляет ссылки на включенные страницы.
- ["modern-normalize": "^2.0.0"](https://github.com/sindresorhus/modern-normalize) — для унификации стилей в разных браузерах.
- ["sass": "^1.69.5"](https://www.npmjs.com/package/sass) — для написания вложенных стилей и использования переменных в CSS.
- [gh-pages](https://www.npmjs.com/package/gh-pages) - публикация файлов в ветке gh-pages на GitHub

## Реализовано

_Общие:_

- добавлена ​​смена темы сайта;
- добавлена ​​кнопка быстрого перехода наверх сайта;
- добавление книги в библиотеку реализовано с использованием веб-хранилища localStorage;
- реализованы адаптивные страницы;
- реализовано открытие модального окна с дополнительной информацией при клике на книгу;

_Главная cтраница:_

- отрисовка случайных книг на основе четырех серий книг;
- настраиваемая анимация для категорий серий книг;
- слайдер для книг в мобильной версии сайта;

_Каталог:_

- при входе на эту страницу - отрисовка 10 случайных книг в разделе .hero в 5 категориях.
- добавлен слайдер для книг в разделе .hero
- при входе на эту страницу - отрисовка книг в разделе .catalog по первой
  категории из раздела .hero;
- добавлена ​​возможность поиска книг по названию книги;
- добавлена ​​пагинация для каталога книг;

_Моя библиотека:_

- в разделе .hero отображается случайная книга из массива в файле dictionary.json;
- в разделе .hero добавлена ​​кнопка обновления случайной книги;
- при входе на эту страницу - рендер книг, добавленных в библиотеку;
- добавлена ​​пагинация для библиотеки книг;
- количество страниц обновляется при добавлении или удалении книг со страницы библиотеки;
