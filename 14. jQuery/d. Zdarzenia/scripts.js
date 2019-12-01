// window.onload = function () {

$( function (){


    let clickCounter = 0;
    let doubleClickCounter = 0;
    let keyDownCounter = 0;

    $(document).on('click', function () {
       $('#click-counter').text(++clickCounter);
    });

    // //zdarzenie dla calego dokumnet
    // document.addEventListener('click', function () {            //type click jest predefiniowany
    //     document.getElementById('click-counter').textContent = ++clickCounter;      //elementId z kodu html
    // })
    //
    // document.addEventListener('dblclick', function () {
    //     document.getElementById('double-click-counter').textContent = ++doubleClickCounter;
    // })
    //
    // document.addEventListener('keydown', function () {
    //     document.getElementById('key-down-counter').textContent = ++keyDownCounter;
    // })
    //
    // //dodawanie elenetow
    // let button = document.getElementById('add-element');        //mienne ktora odwoluje sie do len=menyu html o id add-element
    // let boxContainer = document.getElementById('box-container');
    //
    // //dodajemy obserwator zdadrzezn
    // button.addEventListener('click', function () {
    //     let nowyElement = document.createElement('div');  //tworzymy element
    //     nowyElement.classList.add('box');                           //dodajemy 'box' -> predefiniowany w css -> wczesniej go nie bylo w kodzie HTML!!
    //     boxContainer.appendChild(nowyElement);
    // })
    //
    // //usuwanie elementu po kliknieciu
    // //odwolujemn=y sie do boxContainer bo on przechowuje elementy
    // boxContainer.addEventListener('click', function (e) {      // e zmienna przechowująca zdażenia ze strony - autouzupełniana
    //     //console.log(e)                                                    // mozna ja podgladnac i pewnie odwolywac sie do jaj zawartosci
    //     if (e.target.className.includes('box')){                            // sprawdzamy czy to co wywolalo zdarzenie zawiera 'box
    //         this.removeChild(e.target);
    //         //e.target.style.border = '1px red solid';                      //inne wykorzystanie e.target
    //
    //     }
    // })


    //dodawanie elementu
    let button = $('#add-element');
    let boxContainer = $('#box-container');

    button.on('click', function () {
        let nowyElement = $('<div class="box"></div>');
        boxContainer.append(nowyElement)
    });

    //usowanie elementu
    boxContainer.on('click', '.box' , function () {
        $(this).remove()     //this odnosi sie do kliknietego elementu
    })



});