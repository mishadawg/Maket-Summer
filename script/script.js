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

// Modal windows
var modalSumApOne = $modal({
    title: 'Summerapp 1',
  content: '<img src="media/img/modalimg.png" style="display: block; height: 100%; width: 100%;">'
});
var modalSumApTwo = $modal({
    title: 'Summerapp 2',
    content: '<img src="media/img/modalimg.png" style="display: block; height: 100%; width: 100%;">'
});
var modalSumApThree = $modal({
    title: 'Summerapp 3',
    content: '<img src="media/img/modalimg.png" style="display: block; height: 100%; width: 100%;">'
});
var modalSumApFour = $modal({
    title: 'Summerapp 4',
    content: '<img src="media/img/modalimg.png" style="display: block; height: 100%; width: 100%;">'
});
var promoVideoModal = $modal({
    title: 'Summerapp Video Case',
    content: '<iframe style = "width=560px; height=315px;" width="560" height="315" src="https://www.youtube.com/embed/3ejFKAJzlrk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
});

document.addEventListener('click', function (e) {
    if (e.target.dataset.toggle === 'summerapp1'){
        modalSumApOne.show();
    }else if(e.target.dataset.toggle === 'summerapp2'){
        modalSumApTwo.show();
    }else if(e.target.dataset.toggle === 'summerapp3'){
        modalSumApThree.show();
    }else if(e.target.dataset.toggle === 'summerapp4'){
        modalSumApFour.show();
    }else if(e.target.dataset.toggle === 'summerapp4'){
        modalSumApFour.show();
    }else if(e.target.dataset.toggle === 'promoVideo'){
        promoVideoModal.show();
    }
  });
// End Modal windows

// Carusel
let arrCards = document.getElementsByClassName('descripWhatsUp');
// Containers
let cardOneContainer = document.getElementById('cardOneContainer');
let cardTwoContainer = document.getElementById('cardTwoContainer');
let cardThreeContainer = document.getElementById('cardThreeContainer');
let cardFourContainer = document.getElementById('cardFourContainer');
//Containers of Descrip
let cardDescripOne = document.getElementById('cardDescripOne');
let cardDescripTwo = document.getElementById('cardDescripTwo');
let cardDescripThree = document.getElementById('cardDescripThree');
let cardDescripFour = document.getElementById('cardDescripFour');
// Arrs
let leftArr = document.getElementById('leftArr');
let rightArr = document.getElementById('rightArr');

// Installation carusel
for (let y = 0; y < arrCards.length; y++) {
    arrCards[y].addEventListener('click',caruselCard,false);
}
//Installation arrs
leftArr.addEventListener('click',test,false);
rightArr.addEventListener('click',test,false);
let count = 2;

function test(e){
    if (checkClassArrRight(e.target) == true) {
        if (count > 4) {
            count = 0;
            swtichingCards(count);
        }
        swtichingCards(count);
        count++;
    }else if(checkClassArrLeft(e.target) == true){
        if (count <= 0) {
            count = 4;
            swtichingCards(count);
        }
        swtichingCards(count);
        count--;
        
    }
}
function swtichingCards(content){
    switch (content) {
        case 1:
            removeAllClasses()
            zindAdd(cardOneContainer);
            addClassCard(cardDescripOne);
        break;
        case 2:
            removeAllClasses()
            zindAdd(cardTwoContainer);
            addClassCard(cardDescripTwo);
        break;
        case 3:
            removeAllClasses()
            zindAdd(cardThreeContainer);
            addClassCard(cardDescripThree);
        break;
        case 4:
            removeAllClasses()
            zindAdd(cardFourContainer);
            addClassCard(cardDescripFour);
        break;
    }
}
function checkClassArrRight(content){
    return checkContent = content.classList.contains('fa-angle-right');
}
function checkClassArrLeft(content){
    return checkContent = content.classList.contains('fa-angle-left');
}
function removeAllClasses(){
    zindDel(cardOneContainer);
    zindDel(cardTwoContainer);
    zindDel(cardThreeContainer);
    zindDel(cardFourContainer);
    deleteClassCard(cardDescripOne);
    deleteClassCard(cardDescripTwo);
    deleteClassCard(cardDescripThree);
    deleteClassCard(cardDescripFour);
}


function caruselCard(e){
    let idOfCard = e.target.id; 
    if (idOfCard == 'cardWhatsOne'){
        removeAllClasses();
        if (checkingDecrip(cardDescripOne) == true){
            deleteClassCard(cardDescripOne);
        }else if(checkingDecrip (cardDescripOne) == false){
            addClassCard(cardDescripOne);
        }
        if(checkingZindex(cardOneContainer) == true) {
            zindDel(cardOneContainer);
        }else{
            zindAdd(cardOneContainer);
        }
        
    }else if (idOfCard == 'cardWhatsTwo') {
        removeAllClasses();
        if (checkingDecrip(cardDescripTwo) == true){
            deleteClassCard(cardDescripTwo);
        }else if(checkingDecrip (cardDescripTwo) == false){
            addClassCard(cardDescripTwo);
        }
        if(checkingZindex(cardTwoContainer) == true) {
            zindDel(cardTwoContainer);
        }else{
            zindAdd(cardTwoContainer);
        }
    }else if (idOfCard == 'cardWhatsThree') {
        removeAllClasses();
        if (checkingDecrip(cardDescripThree) == true){
            deleteClassCard(cardDescripThree);
        }else if(checkingDecrip (cardDescripThree) == false){
            addClassCard(cardDescripThree);
        }
        if(checkingZindex(cardThreeContainer) == true) {
            zindDel(cardThreeContainer);
        }else{
            zindAdd(cardThreeContainer);
        }
    }else if (idOfCard == 'cardWhatsFour') {
        removeAllClasses();
        if (checkingDecrip(cardDescripFour) == true){
            deleteClassCard(cardDescripFour);
        }else if(checkingDecrip (cardDescripFour) == false){
            addClassCard(cardDescripFour);
        }
        if(checkingZindex(cardFourContainer) == true) {
            zindDel(cardFourContainer);
        }else{
            zindAdd(cardFourContainer);
        }
    }
}
function checkingZindex(content){
    return classCheck = content.classList.contains('zIndex');
}
function checkingDecrip(content){
    return classCheck = content.classList.contains('choosen');
}
function deleteClassCard(content) {
    content.classList.remove('choosen');
    content.classList.remove('choosenBorder');   
}
function addClassCard(content) {
    content.classList.add('choosen');
    content.classList.add('choosenBorder');  
}
function zindAdd(content){
    content.classList.add('zIndex');
}
function zindDel(content){
    content.classList.remove('zIndex');
}
// End Carusel