window.onload = function () {

  //obsluga zdarzen dla formularza
    let form = document.getElementById('formularz');

    form.addEventListener('submit', function (e) {  //musimy wstrzymac przeglodarke przed wyslaniem formularza
        e.preventDefault();                                        //dla submit defoult -> wysłanie frmularza

        let wartosc = document.getElementById('name').value;        // to pobiera zawartosc pola tekstowego
        // console.log(wartosc);

        if(wartosc.length >= 3){
            console.log('poprawna wartosc')
            document.getElementById('error').setAttribute('hidden', '');
            e.currentTarget.submit();

        } else {
            document.getElementById('error').removeAttribute('hidden');
        }


    })
};