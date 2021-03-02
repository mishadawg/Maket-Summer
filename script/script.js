// Menu
const menuList = document.getElementsByClassName('containerMenu');
const home = document.getElementById('home');
const etcPage = document.getElementById('etc');

for (let i = 0; i < menuList.length; i++) {
    menuList[i].addEventListener('click',menu,false);
}
function menu(e){
    let referal = e.target.getAttribute('href');
    let checkHome = home.classList.contains('hide');
    let checkEtc = home.classList.contains('hide');
    
    if(referal == "#home"){
        addClassMenu(etcPage)
        if(checkHome == true){
            deleteClassMenu(home);
        }
        else{
            deleteClassMenu(home);
        }
    }else if(referal == '#'){
        addClassMenu(home)
        if(checkEtc == true){
            deleteClassMenu(etcPage);
        }
        else{
            deleteClassMenu(etcPage);
        }
    }
}
function deleteClassMenu(content) {
    content.classList.remove('hide');  
}
function addClassMenu(content) {
    content.classList.add('hide');  
}
// End Menu

// TODO Выпадающие тексты
// Text Opens

// End Text Opens














// TODO Сделать Модальные окна
// Modal windows

// End Modal windows

// TODO Карусель внизу
// Carusel

// End Carusel

