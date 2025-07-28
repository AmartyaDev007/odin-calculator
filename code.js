let operandOne;
let operandTwo = 0;
let operator;
let previousOperatorButton = "";
let mainDisplay = 0;

// this variable displays the top smaller greyed out text in the display
let altDisplay; // probably not gonna implement it 


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
        operator = target.textContent;
        target.style.backgroundColor = "yellow";

        // if (operandOne == undefined) { 
        //     operandOne = mainTextContent.textContent;
        //     mainTextContent.textContent = 0;
        // }

        operandOne = mainTextContent.textContent;
        mainTextContent.textContent = 0;
        //  else { 
        //     operandTwo = mainTextContent.textContent;
        // }

        if (previousOperatorButton) {
            previousOperatorButton.style.backgroundColor = "";
        }

        previousOperatorButton = target;

        // TODO unexpected behavior when clicking same operand multiple times
    }

    switch(target.id) {
        case 'ac-button':
            mainTextContent.textContent = "0";
            // RESET OPERATOR VAR AND OPERAND BOTH VARS
            operandOne = undefined;
            operandTwo = undefined;
            previousOperatorButton.style.backgroundColor = "";
            operator = undefined;
            previousOperatorButton = undefined;
            
        
        case 'backspace-button':
            // remove textcontent last char from maintextcontent var
            // if you run out of numbers maintextcontent does default to empty instead a 0
            if (mainTextContent.textContent != 0) { 
                mainTextContent.textContent = mainTextContent.textContent.slice(0, -1);
            }

            if (mainTextContent.textContent.length == 0) { 
                mainTextContent.textContent = "0";
            }
            

        case 'decimal-button':
            // if there is `.` in maintextcontent var already dont add anything 
            // else add `.` 

            if (!(mainTextContent.textContent.includes("."))) { 
                mainTextContent.textContent += ".";
            }

        case 'equal-button':
            // if no operator provided do nothing
            // call operate with all 3 vars and then that function calls
            // one of the operator function which returns the result
            // into operate and operate updates textcontent buh
            // add the operandtwo into the variable 
            if (operator == undefined) { 
                return;
            }
            operandTwo = mainTextContent.textContent;

            printer(operandOne, operandTwo, operator);
        
        case 'change-sign': 
            // append in front in `maintextcontent` var a sign 
            // if string 0th value != `-` then append `-` else 
            // if `-` exists remove it (to turn it to positive)

            if (mainTextContent.textContent.charAt(0) != '-' && mainTextContent.textContent.length <= 11) { 
                mainTextContent.textContent = "-" + mainTextContent.textContent;
            } else if (mainTextContent.textContent.charAt(0) == "-") { 
                mainTextContent.textContent = mainTextContent.textContent.slice(1);
            }
    }
})

