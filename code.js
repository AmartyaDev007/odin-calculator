let operandOne;
let operandTwo = 0;
let operator;
let previousOperatorButton = "";
// let mainDisplay = 0;

// this variable displays the top smaller greyed out text in the display
// let altDisplay; // probably not gonna implement it 


const allButtons = document.querySelector(".all-btn-box");
const mainTextContent = document.querySelector("#main-display");



function printer(x, y, operator) { 
    // takes 3 args 
                        
    // calls one of the opeartor functions
    // result is printed as mainTextcontent whatever is returned

    let operations = { 
        '+': add,
        '-': subtract, 
        '/': divide,
        '*': multiply,
    }
    let intX = parseFloat(x);
    let intY = parseFloat(y);

    let result = operations[operator](intX, intY);
    let boom = String(result);

      if (boom.length > 12) {
        mainTextContent.textContent = Number(result).toExponential(3); // Adjust precision as needed
    } else { 
        mainTextContent.textContent = result;
    }

    
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
    if (a == 0 || b == 0) { 
        return "Error"
    }
    return a / b;
}


// checks for text overflow 
function textOverflow(string) { 
    if (string.length > 11) { 
        return true;
    }
    return false;
}

function reset() { 
    mainTextContent.textContent = "0";
            // RESET OPERATOR VAR AND OPERAND BOTH VARS
    operandOne = undefined;
    operandTwo = undefined;
    if (previousOperatorButton) { 
        previousOperatorButton.style.backgroundColor = "";
    }
    
    operator = undefined;
    previousOperatorButton = undefined;
}








// functions go before this comment 

allButtons.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('number')) {

        if (mainTextContent.textContent == "0") { 
            mainTextContent.textContent = target.textContent;
            return;
        } else if (mainTextContent.textContent == "-0") { 
            mainTextContent.textContent = "-" + target.textContent;
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
            reset();
            break;
            

        case 'backspace-button':
            // remove textcontent last char from maintextcontent var
            // if you run out of numbers maintextcontent does default to empty instead a 0
            if (mainTextContent.textContent != 0) { 
                mainTextContent.textContent = mainTextContent.textContent.slice(0, -1);
            }

            if (mainTextContent.textContent.length == 0) { 
                mainTextContent.textContent = "0";
            }
            break;
            
            
        case 'decimal-button':
            // if there is `.` in maintextcontent var already dont add anything 
            // else add `.` 

            if (!(mainTextContent.textContent.includes("."))) { 
                mainTextContent.textContent += ".";
            }
            break;


        case 'equal-button':
            // if no operator provided do nothing
            // call operate with all 3 vars and then that function calls
            // one of the operator function which returns the result
            // into operate and operate updates textcontent buh
            // add the operandtwo into the variable 
            if (operator == undefined) { 
                return;
            }

            if (previousOperatorButton) {
                previousOperatorButton.style.backgroundColor = "";
            }
            operandTwo = mainTextContent.textContent;

            printer(operandOne, operandTwo, operator);
            break;
        
            
        case 'change-sign': 
            // append in front in `maintextcontent` var a sign 
            // if string 0th value != `-` then append `-` else 
            // if `-` exists remove it (to turn it to positive)


            // if (mainTextContent.textContent == '0') { 
            //     mainTextContent.textContent = "-";
            // } 

            // TODO add when text is 0 append `-` in front of it 
            if (mainTextContent.textContent == '0') { 
                mainTextContent.textContent = "-0";
            }
            else if (mainTextContent.textContent.charAt(0) != '-' && mainTextContent.textContent.length <= 11) { 
                mainTextContent.textContent = "-" + mainTextContent.textContent;

            } else if (mainTextContent.textContent.charAt(0) == "-") { 
                mainTextContent.textContent = mainTextContent.textContent.slice(1);
            }
            break;
    }
})

