
function Osoba(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;

    this.przedstawSie = function () {
        console.log('nazywam sie ' + this.imie + ' ' + this.nazwisko);
    }
}

let osoba = new Osoba('Jan', 'Kowalski')  /*tutaj musimy przypisac obiekt do zmiennej i wywolac konstruktor*/
osoba.przedstawSie();

let JanKowalski = new Osoba('Trol', 'Krzysztof')    /*JanKowalski -> przechowuje referencja do obiektu
                                                                     konstruktor new wywołuje nową instancje obiektu w pamięci*/


