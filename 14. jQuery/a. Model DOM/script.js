//zanim uruchomimi js musimuy poczekać na zaladowanie modelu DOM
//modyfikowanie stylow za pomoca js
$(function (){                          //zamiast window.onload


    // document.getElementById('container').style.border = '5px solid red';       //js
    $('#container').css('border', '5px solir red')                  //w jq w nawiasia zawsze selektor

    $('.box').css('border', '5px solid black')                      //jq iteruje automatycznie po wszystkich obiektach

    // document.querySelector('.box').style.border = '5px solid red'; //uwaga na kropke!!
    // let array = document.getElementsByClassName('box');

    // for(let i = 0; i < array.length; i++){
    //     array[i].style.border = '5px solid red';
    // }

    // let array = document.getElementsByTagName('div')
    // for(let i = 0; i < array.length; i++){
    //         array[i].style.border = '5px solid red';
    //     }
    // for (let element of array){                     //bez let tez zadziala
    //     element.style.border = '5px solid green';
    // }

    // document.getElementById('special').parentNode.style.border = '5px solid red'; //odwołanie do rodzica
    // document.getElementById('special').previousElementSibling.style.border = '5px solid red'; //odwołanie do rodzenstwa wczesniejszegp
    // document.getElementById('special').nextElementSibling.style.border = '5px solid red'; //odwołanie do rodzenstwa nastepnego

    // document.getElementById('container').firstElementChild.style.border = '5px solid red'; //odwolanie do pierszego dziecka elementu
    document.getElementById('container').lastElementChild.style.border = '5px solid red'; //odwolanie do ostatniego dziecka elementu

});