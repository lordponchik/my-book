const bookEl = document.querySelector('.potter');
const backdropEl = document.querySelector('.backdrop');

console.log(bookEl.childNodes);

bookEl.addEventListener('click', e => {
  if (e.target.nodeName === e.currentTarget.nodeName) return;
  const el = e.target.nodeName === 'LI' ? e.target : e.target.parentNode.parentNode;

  //   if (e.target.parentNode.nodeName === 'DIV') console.log(e.target.parentNode.parentNode);

  backdropEl.classList.add('show');
  backdropEl.addEventListener('click', e => {
    e.target.classList.remove('show');
  });
});
