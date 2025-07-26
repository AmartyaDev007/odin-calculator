let operandOne = 0;
let operandTwo = 0;
let operator;

let mainDisplay = 0;

// this variable displays the top smaller greyed out text in the display
let altDisplay;


const allButtons = document.querySelector(".all-btn-box");
const mainTextContent = document.querySelector("#main-display");



function printer() { 
    // takes 3 args 

    // calls one of the opeartor functions
    // result is printed as mainTextcontent whatever is returned
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

    // if any of the args are 0 return cant divide by zero
}


// checks for text overflow 
function textOverflow(string) { 
    if (string.length > 11) { 
        return true;
    }
    return false;
}









// functions go before this comment 

allButtons.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('number')) {

        if (mainTextContent.textContent == "0") { 
            mainTextContent.textContent = target.textContent;
            return;
        }

        if (!(textOverflow(mainTextContent.textContent))) { 
            mainTextContent.textContent += target.textContent;
        }
        return;
        
    }

    else if (target.classList.contains('operator')) {
        // add the first operand to a variable IF EQUALS 0 ELSE ADD TO SECOND OPERAND
        // remove all textcontent 
        // update operator variable with current operator
    }
    switch(target.id) {
        case 'ac-button':
            mainTextContent.textContent = "0";
            // RESET OPERATOR VAR AND OPERAND BOTH VARS
        
        case 'backspace-button':
            // remove textcontent last char from maintextcontent var

        case 'decimal-button':
            // if there is `.` in maintextcontent var already dont add anything 
            // else add `.` 

        case 'equal-button':
            // call operate with all 3 vars and then that function calls
            // one of the operator function which returns the result
            // into operate and operate updates textcontent buh
        
        case 'change-sign': 
            // append in front in `maintextcontent` var a sign 
            // if string 0th value != `-` then append `-` else 
            // if `-` exists remove it (to turn it to positive)
    }
})

