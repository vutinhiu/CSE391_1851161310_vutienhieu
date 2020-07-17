var fruit = document.getElementById('txtFruit');
var showFruit = document.getElementById('btnShowFruit');
var imgFruit = document.getElementById('imgFruit');
showFruit.addEventListener('click', showResult);
function showResult(){
    var getFruit = fruit.value;
    imgFruit.setAttribute('src', ' /images/'+getFruit+'.jfif')
}