let headerBurger = document.querySelector('.header-burger');
let headerBlock = document.querySelector('.header-block1');
let back = document.querySelector('body');

headerBurger.onclick = function(){
    headerBurger.classList.toggle('active');
    headerBlock.classList.toggle('active');
    back.classList.toggle('lock');
}


let headerBurger2 = document.querySelector('.header-burger2');
let headerBlock2 = document.querySelector('.header-block2');
let back2 = document.querySelector('body');

headerBurger2.onclick = function(){
    headerBurger2.classList.toggle('active');
    headerBlock2.classList.toggle('active');
    back2.classList.toggle('lock');
}

