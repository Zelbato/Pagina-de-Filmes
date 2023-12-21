const txt = document.querySelector('.text');
const textInitialHeight = txt.clientHeight;
const overflow = document.querySelector('.overflow');
const btn = document.querySelector('.toggle');

btn.addEventListener('click', initToggle);

function initToggle(e) {
    txt.style.maxHeight =
    e.target.dataset.state === 'mais'
    ? `${txt.scrollHeight}px`
     : `${textInitialHeight}px` ;
     
     e.target.setAttribute(
        'data-state',
        e.target.dataset.state === 'mais' ? 'menos' : 'mais'
     );

     e.target.innerHTML =
     e.target.dataset.state === 'mais' ? 'Ler mais' : 'Ler menos';

     overflow.setAttribute (
        'data-state',
        e.target.dataset.state === 'mais' ? 'visible' : 'hidden'
     );

}