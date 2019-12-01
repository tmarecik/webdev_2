
let osoba = {

    imię: 'Jan',
    nazwisko: 'Nowak',

    przedstawSoe: function () {
        console.log('nazywam sie: ' + this.imię + ' ' + this.nazwisko);
    },

    zmienImie: function (moweImie) {
        this.imię = moweImie;
    }
}

osoba.przedstawSoe();
osoba.imię = 'Adam';
osoba.przedstawSoe();


osoba.zmienImie('Filemon')
osoba.przedstawSoe()