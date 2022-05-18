const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

btns[0].addEventListener('click',() => {
    btns[1].classList.toggle('red');
});

wrapper.addEventListener('click', (event) => {
    console.dir(event.target);
});