let operandOne = 0;
let operandTwo = 0;
let operator;

let mainDisplay = 0;

// this variable displays the top smaller greyed out text in the display
let altDisplay;


const allButtons = document.querySelector(".all-btn-box");

allButtons.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('number')) {
        event.target.textContent;
    }

    else if (target.classList.contains('operator')) {

    }
    switch(target.id) {
        case 'ac-button':
            break;
        
        case 'backspace-button':
            break;

        case 'decimal-button':
            break;

        case 'equal-button':
            break;
    }
})

function printer() { 
    
}


function add (a, b) { 
    return a + b;
}

function subtract (a, b) { 
    return a - b;
}

function multiply (a, b) { 
    return a * b;
}

function divide (a, b) { 
    return a / b;
}


