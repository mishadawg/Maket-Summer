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

// Text Opens
const arrButtonsCards = document.getElementsByClassName('learnMoreCard');
const arrButtonsNews = document.getElementsByClassName('buttonNews');
let firstText = document.getElementById('textOne');
let secondText = document.getElementById('textTwo');
let threeText = document.getElementById('textThree');
let fourText = document.getElementById('textFour');
let fiveText = document.getElementById('textFive');
let sixText = document.getElementById('sixText');
let sevenText = document.getElementById('sevenText');
let eightText = document.getElementById('eightText');
for (let k = 0; k < arrButtonsCards.length; k++) {
    arrButtonsCards[k].addEventListener('click',openHiddenText,false);
}
for (let l = 0; l < arrButtonsNews.length; l++) {
    arrButtonsNews[l].addEventListener('click',openHiddenText,false);
}
function openHiddenText(e){
    switch (e.target.id) {
        case 'btnOne':
            hideClassText(firstText);
            showClassText(firstText);
            changeTextInButton(e);
        break;
        case 'btnTwo':
            hideClassText(secondText);
            showClassText(secondText);
            changeTextInButton(e);
        break;
        case 'btnThree':
            hideClassText(threeText);
            showClassText(threeText);
            changeTextInButton(e);
        break;
        case 'btnFour':
            hideClassText(fourText);
            showClassText(fourText);
            changeTextInButton(e);
        break;
        case 'btnFive':
            hideClassText(fiveText);
            showClassText(fiveText);
            changeTextInButton(e);
        break;
        case 'btnSix':
            hideClassText(sixText);
            showClassText(sixText);
            changeTextInButton(e);
        break;
        case 'btnSeven':
            hideClassText(sevenText);
            showClassText(sevenText);
            changeTextInButton(e);
        break;
        case 'btnEight':
            hideClassText(eightText);
            showClassText(eightText);
            changeTextInButton(e);
        break;
    }
}
function hideClassText(content) {
    let checkStylesText = content.classList.contains('hide');
    if( checkStylesText == true){
        content.classList.remove('hide');
    }else{
        content.classList.add('hide'); 
    } 
}
function showClassText(content) {
    let checkStylesText = content.classList.contains('show');
    if( checkStylesText == true){
        content.classList.remove('show');
    }else{
        content.classList.add('show'); 
    }  
}
function changeTextInButton(e){
    let btnMore = e.target.innerText;
    if(e.target.innerText == 'More info'){
        e.target.innerText = 'Close this';
    }else if(e.target.innerText == 'Close this'){
        e.target.innerText = 'More info';
    }else if(e.target.innerText == 'Read more'){
        e.target.innerText = 'Close info';
    }else if(e.target.innerText == 'Close info'){
        e.target.innerText = 'Read more';
    }
}
// End Text Opens

// TODO Сделать Модальные окна для видео и для картинок Шоукейс
// Modal windows

// End Modal windows



















// TODO Карусель внизу
// Carusel

// End Carusel

