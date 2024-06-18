
document.addEventListener('DOMContentLoaded', function() {

    console.log("Alex UI");

    var buttons = document.querySelectorAll('[data-cmd]');

    buttons.forEach(function(button) {

        button.addEventListener('click', function() {

            var cmd = button.getAttribute('data-cmd');

            switch (cmd) {

                case 'toggle-lightmode':

                    console.log('Toggle Lightmode');

                    break;

            }
        });
    });
});


