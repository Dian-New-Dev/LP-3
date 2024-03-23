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


const list1 = document.getElementById('button1')
const list2 = document.getElementById('button2')
const list3 = document.getElementById('button3')

function button1() {
    list1.style.display = 'block'
    list2.style.display ='none'
    list3.style.display ='none'
}

function button2() {
    list1.style.display = 'none'
    list2.style.display ='block'
    list3.style.display ='none'
}

function button3() {
    list1.style.display = 'none'
    list2.style.display ='none'
    list3.style.display ='block'
}

    
