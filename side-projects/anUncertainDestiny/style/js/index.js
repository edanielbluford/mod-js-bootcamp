const menuButton = document.querySelector('.menu-button');
const navElementsBar = document.querySelector('.navElementsBar');

menuButton.addEventListener('mouseover',function(){
    navElementsBar.classList.add('open');
});

menuButton.addEventListener('click',function(){
    navElementsBar.classList.remove('open');
});
