var elBtn = document.querySelector('.button');
var elMenu = document.querySelector('.menu')

elBtn.addEventListener('click', function(){
  elMenu.classList.toggle("menu--open")
})