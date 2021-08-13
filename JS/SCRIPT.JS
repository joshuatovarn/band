let menu = document.querySelector('#menu');
let menu_bar = document.querySelector('#menu-bar');

menu_bar.addEventListener('click', () => {
  menu.classList.toggle("menu-toggle");

})

/*window.addEventListener('click', e=>{
    if(menu.classList.contains('menu-toggle') && e.target != menu && e.target != menu_bar  ){
         
        menu.classList.toggle("menu-toggle") 
    }
})*/