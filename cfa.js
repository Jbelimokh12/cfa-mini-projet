let bopen = document.querySelector('#open');
let bclose = document.querySelector('#close');
let btnreset = document.querySelector('#btnreset');

function afficher(){
    document.querySelector('#popup').style.display = "flex";
}

function masquer(){
    document.querySelector('#popup').style.display = "none";
}

bopen.addEventListener('click',afficher);
bclose.addEventListener('click',masquer);
btnreset.addEventListener('click',masquer);
