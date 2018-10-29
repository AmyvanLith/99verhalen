/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var meerTonen_trigger = document.querySelector("#meer-tonen");
var genres_element = document.querySelector("#overzicht main section:first-of-type fieldset  fieldset:first-of-type div");
var download_knoppen = document.querySelectorAll("#overzicht main section:nth-of-type(2) article > ul li.download_knop");
if (meerTonen_trigger) {
    meerTonen_trigger.addEventListener('click', function(){

        genres_element.classList.toggle('is-open');

    });
}


for (var i = 0; i < download_knoppen.length; i++) {


    download_knoppen[i].addEventListener('click', function(event) {

        var element = event.srcElement.parentElement; //even navragen


        if (element.querySelector('.download').classList.contains('is-actief')) {


            document.querySelector('nav ul li .error').classList.remove('is-actief');
            document.querySelector('nav ul li .succes').classList.remove('is-actief');


            element.querySelector('.download').classList.remove('is-actief');
            element.querySelector('.laden').classList.add('is-actief');

            document.querySelector('nav ul li .laden').classList.add('is-actief');

            window.setTimeout(function() {

                element.querySelector('.laden').classList.remove('is-actief');
                document.querySelector('nav ul li .laden').classList.remove('is-actief');

                if (Math.random() > 0.2) {
                    element.querySelector('.succes').classList.add('is-actief');
                    document.querySelector('nav ul li .succes').classList.add('is-actief');
                } else {
                    element.querySelector('.error').classList.add('is-actief');
                    document.querySelector('nav ul li .error').classList.add('is-actief');

                    element.querySelector('.error').addEventListener('click', function() {
                        document.querySelector('#errorState').style.display = "block"

                    });

                }

            }, 3000);
        }

    });

}

var velden = document.querySelectorAll("#overzicht main section:first-of-type fieldset fieldset:first-of-type input");
var button = document.querySelector('#overzicht main section:first-of-type > form > fieldset > button');

for (var i = 0; i < velden.length; i++) {
    velden[i].addEventListener('click', function() {

        var velden_geselecteerd = document.querySelectorAll("#overzicht main section:first-of-type fieldset fieldset:first-of-type input:checked");

        var totaal = 0;

        for (var i = 0; i < velden_geselecteerd.length; i++) {
            totaal += parseInt(velden_geselecteerd[i].value);
        }


        if (document.querySelector("#overzicht main section:first-of-type fieldset fieldset:first-of-type input#fictie:checked") || totaal === 0) {
            button.classList.add('error');
            button.textContent = 'Geen resultaten';
        } else {
            button.classList.remove('error');
            button.textContent = 'Toon ' + totaal + ' Resultaten';
        }

    });
}


if (document.querySelector('#verhaal')) {
    // Verhalen pagina
    var section1 = document.querySelector('#verhaal > main > section:first-of-type');
    var section2 = document.querySelector('#verhaal > main > section:nth-of-type(2)');
    var section3 = document.querySelector('#verhaal > main > section:nth-of-type(3)');
    var section4 = document.querySelector('#verhaal > main > section:nth-of-type(4)');
    var klikNummer = 0;

    section1.addEventListener('click', klik);
    section2.addEventListener('click', klik);
    section3.addEventListener('click', klik);

    function klik() {
         klikNummer++;


        if  (klikNummer == 1 ){
            document.querySelector('#verhaal > main > div').classList.add('is-hidden');
            window.setTimeout(function() {
                section1.scrollIntoView({behavior: "smooth"});
            }, 500);
            window.setTimeout(function() {
                document.querySelector('#verhaal section:first-of-type div p:nth-of-type(1)').classList.add('current');
                document.querySelector('#verhaal section:first-of-type div p:nth-of-type(2)').classList.add('current');
            }, 800);
        }

        if  (klikNummer == 2 ){
            document.querySelector('#verhaal section:first-of-type div p:nth-of-type(1)').classList.remove('current');
            document.querySelector('#verhaal section:first-of-type div p:nth-of-type(2)').classList.remove('current');

            window.setTimeout(function() {
                document.querySelector('#verhaal section:first-of-type div').classList.add('rotate1');
            }, 500);

            window.setTimeout(function() {
                document.querySelector('#verhaal section:first-of-type div p:nth-of-type(3)').classList.add('current');
                document.querySelector('#verhaal section:first-of-type div p:nth-of-type(4)').classList.add('current');
                document.querySelector('#verhaal section:first-of-type div p:nth-of-type(5)').classList.add('current');
            }, 1000);
        }

        if  (klikNummer == 3 ){
            document.querySelector('#verhaal section:first-of-type div p:nth-of-type(3)').classList.remove('current');
            document.querySelector('#verhaal section:first-of-type div p:nth-of-type(4)').classList.remove('current');
            document.querySelector('#verhaal section:first-of-type div p:nth-of-type(5)').classList.remove('current');

            window.setTimeout(function() {
                document.querySelector('#verhaal section:first-of-type div').classList.remove('rotate1');
                document.querySelector('#verhaal section:first-of-type div').classList.add('rotate2');
            }, 500);

            window.setTimeout(function() {
                document.querySelector('#verhaal section:first-of-type div p:nth-of-type(6)').classList.add('current');
                document.querySelector('#verhaal section:first-of-type div p:nth-of-type(7)').classList.add('current');
            }, 1000);
        }

        if  (klikNummer == 4 ){
            document.querySelector('#verhaal section:first-of-type div p:nth-of-type(6)').classList.remove('current');
            document.querySelector('#verhaal section:first-of-type div p:nth-of-type(7)').classList.remove('current');

            window.setTimeout(function() {
                document.querySelector('#verhaal section:first-of-type div').classList.remove('rotate2');
                document.querySelector('#verhaal section:first-of-type div').classList.add('rotate3');
            }, 500);

            window.setTimeout(function() {
                document.querySelector('#verhaal section:first-of-type div p:nth-of-type(8)').classList.add('current');
                document.querySelector('#verhaal section:first-of-type div p:nth-of-type(9)').classList.add('current');
            }, 1000);
        }

        if  (klikNummer == 5 ){
            document.querySelector('#verhaal section:first-of-type div p:nth-of-type(8)').classList.remove('current');
            document.querySelector('#verhaal section:first-of-type div p:nth-of-type(9)').classList.remove('current');

            window.setTimeout(function() {
                section2.scrollIntoView({behavior: "smooth"});
            }, 500);

            window.setTimeout(function() {
                document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(1)').classList.add('current');
                document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(2)').classList.add('current');
            }, 800);
        }

        if  (klikNummer == 6 ){
            document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(1)').classList.remove('current');
            document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(2)').classList.remove('current');

            window.setTimeout(function() {
                document.querySelector('#verhaal section:nth-of-type(2) div').classList.add('rotate1');
            }, 500);

            window.setTimeout(function() {
                document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(3)').classList.add('current');
                document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(4)').classList.add('current');
                document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(5)').classList.add('current');
            }, 1000);
        }

        if  (klikNummer == 7 ){
            document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(3)').classList.remove('current');
            document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(4)').classList.remove('current');
            document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(5)').classList.remove('current');

            window.setTimeout(function() {
                document.querySelector('#verhaal section:nth-of-type(2) div').classList.add('rotate2');
            }, 500);

            window.setTimeout(function() {
                document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(6)').classList.add('current');
                document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(7)').classList.add('current');
            }, 1000);
        }

        if  (klikNummer == 8 ){
            document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(6)').classList.remove('current');
            document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(7)').classList.remove('current');

            window.setTimeout(function() {
                document.querySelector('#verhaal section:nth-of-type(2) div').classList.add('rotate3');
            }, 500);

            window.setTimeout(function() {
                document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(8)').classList.add('current');
                document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(9)').classList.add('current');
            }, 1000);
        }

            if  (klikNummer == 9 ){
            document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(8)').classList.remove('current');
            document.querySelector('#verhaal section:nth-of-type(2) div p:nth-of-type(9)').classList.remove('current');

            window.setTimeout(function() {
                section3.scrollIntoView({behavior: "smooth"});
            }, 500);

            window.setTimeout(function() {
                document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(1)').classList.add('current');
                document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(2)').classList.add('current');
                document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(3)').classList.add('current');
            }, 800);
        }

        if  (klikNummer == 10 ){
            document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(1)').classList.remove('current');
            document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(2)').classList.remove('current');
            document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(3)').classList.remove('current');

            window.setTimeout(function() {
                document.querySelector('#verhaal section:nth-of-type(3) div').classList.add('rotate1');
            }, 500);

            window.setTimeout(function() {
                document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(4)').classList.add('current');
                document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(5)').classList.add('current');
                document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(6)').classList.add('current');
                document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(7)').classList.add('current');
            }, 1000);
        }

        if  (klikNummer == 11 ){
            document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(4)').classList.remove('current');
            document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(5)').classList.remove('current');
            document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(6)').classList.remove('current');
            document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(7)').classList.remove('current');

            window.setTimeout(function() {
                document.querySelector('#verhaal section:nth-of-type(3) div').classList.add('rotate2');
            }, 500);

            window.setTimeout(function() {
                document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(8)').classList.add('current');
                document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(9)').classList.add('current');
                document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(10)').classList.add('current');
            }, 1000);
        }

        if  (klikNummer == 12 ){
            document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(8)').classList.remove('current');
            document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(9)').classList.remove('current');
            document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(10)').classList.remove('current');

            window.setTimeout(function() {
                document.querySelector('#verhaal section:nth-of-type(3) div').classList.add('rotate3');
            }, 500);

            window.setTimeout(function() {
                document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(11)').classList.add('current');
                document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(12)').classList.add('current');
                document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(13)').classList.add('current');
            }, 1000);
        }

        if  (klikNummer == 13 ){
            document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(11)').classList.remove('current');
            document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(12)').classList.remove('current');
            document.querySelector('#verhaal section:nth-of-type(3) div p:nth-of-type(13)').classList.remove('current');

            window.setTimeout(function() {
                section4.scrollIntoView({behavior: "smooth"});
            }, 500);
        }

    }
}
