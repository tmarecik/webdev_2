
// window.onload  = function () {
//
//     setTimeout(function () {
//         let nowyElement = document.createElement('div');
//         nowyElement.textContent = '6';
//         nowyElement.classList.add('box');
//
//         document.getElementById('container').appendChild(nowyElement); //przekazalismy nowy element do rodzica
//
//     },2000);
//
//
//     //usowanie elementu  - tomeouty wykonywane asnchronicznie
//     setTimeout(function () {
//         let usuwany = document.getElementById('special');
//         let rodzic = document.getElementById('container');
//         rodzic.removeChild(usuwany)
//
//     },4000)
// }


$(function() {

    setTimeout(function () {
        let nowyElement = $('<div class="box">6</div>');
        $('#container').append(nowyElement);
    }, 2000);

    setTimeout(function () {
        $('#special').remove();

    },4000)

})