
function pierwszaFunkcja() {
    console.log('Jakaś wartość');
}

// /pierwszaFunkcja();

function wypiszTekst( parametr ) {
    console.log(parametr)
}

// wypiszTekst('przykładowy Parametr -> text');


function suma(a, b) {
    console.log(suma);
    let sum = a + b;
    console.log(sum);
}

// suma(1, 5);
// suma('ala', ' ma kota');

function suma2(a, b) {
    return a + b;
}

// let sum = suma2(3,8)
// console.log(sum);

let a = 5;

function modyfikuj(liczba) {
    liczba = 1;
}

console.log(a);
modyfikuj(a);           /*tutaj przekazano typ prymitywny, który przekazuje wartość zmiennej a nie referecje
                            dlatego wartość zmiennej nie ulegnie zmodyfikowaniu*/
console.log(a);

let array = ['jeden', 'dwa', 'trzy'];

function  modyfikuj2(tablica) {
    tablica[0] = 'nowa wartosc';
}

console.log(array);
modyfikuj2(array);        /*tutaj przekazaliśmy referencje do obiektu -> miejsca w pamiecki,
                            dlatego funkcja mogła go modyfikować*/
console.log(array);
















