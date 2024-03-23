const buttons = document.querySelectorAll('.switch-buttons');

document.addEventListener('DOMContentLoaded', function () {
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            for (let ii = 0; ii < buttons.length; ii++) {
                if (buttons[i] === buttons[ii]) {
                    buttons[ii].classList.add('switch-buttons-clicked')
                } else {
                    buttons[ii].classList.remove('switch-buttons-clicked')
                }
            }

        })
    }
})


    
