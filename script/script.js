// Menu
const menuList = document.getElementsByClassName('containerMenu');
for (let i = 0; i < menuList.length; i++) {
    menuList[i].addEventListener('click',menu,false);
}
//ToDo обратиться затем к боди и найти секции необходимы и при переключении выдавать нужную секцию
// Сделать Модальные окна
// Выпадающие тексты
// Карусель внизу
function menu(e){
    let referal = e.target.getAttribute('href');
    if(referal == "#home"){
        console.log('HOME');
    }else{
        console.log(referal);
    }
}