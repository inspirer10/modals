'use strict';

(function () {
    // funkcja otwierającą modal:

    var modalLinks = document.querySelectorAll('.show-modal');
    var modals = document.querySelectorAll('.modal');

    var showModal = function (event) {
        event.preventDefault();

        for (var i = 0; i < modals.length; i++) {
            modals[i].classList.remove('show');
        };

        var attribute = this.getAttribute('href');
        console.log(attribute); //pomocnicze
        var targetElement = document.querySelector(attribute); //modalHref
        targetElement.classList.add('show'); //modalHref
        document.querySelector('#modal-overlay').classList.add('show');
    };


    // obecnie mamy tylko 1 link, stosujemy kod dla wielu linków. W ten sposób nie będzie trzeba go zmieniać, kiedy zechcemy mieć więcej linków lub guzików otwierających modale

    for (var i = 0; i < modalLinks.length; i++) {
        modalLinks[i].addEventListener('click', showModal);
    }


    // Dodajemy też funkcję zamykającą modal, oraz przywiązujemy ją do kliknięć na elemencie z klasą "close". 

    var hideModal = function (event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.remove('show');
    };

    var closeButtons = document.querySelectorAll('.modal .close');

    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', hideModal);
    }


    // Dobrą praktyką jest również umożliwianie zamykania modala poprzez kliknięcie w overlay. 

    document.querySelector('#modal-overlay').addEventListener('click', hideModal);


    // Musimy jednak pamiętać, aby zablokować propagację kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go. 


    for (var i = 0; i < modals.length; i++) {
        modals[i].addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }

    // I to wszystko - mamy już działający modal! 

})();