# main

- contain functions, for starters add, multiply, divide and sub

- three variables for each part (2 operands and 1 operator)

- create buttons for each digit, operators, `=`, `ac`, `backspace`, `.`

- calculator should not evaluate more than a single pair of numbers at a time. 

- round answers with long decimals so that they don’t overflow the display.

- Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”.

- Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

- When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result. 

- the above point should not be the case with a new operator entry, it should continue with the last number

- user can't repeat floating point numbers

# maybe or for the future

- add keyboard support 

---

# Bare minimums 

- Functions to do basic math (add, sub, mult, div) 
- only 2 operands, create 3 vars one for each part 
- a function `operate` takes operator and two numbers  and then calls one of the arithmetic functions
- `=` operator, `clear` button, display for the calculator
- functions that populate or change the display when a digit button is clicked. store the content of the display in a variable for use in next steps 
- **calculator must not evaluate more than single pair of numbers at a time** 
- **round answers to avoid overflow**
- pressing `=` before entering a pair of operands should not cause error
- clear should reset everything
- division by `0` must be handled
- if consecutive `+` operators are pressed, it should be handled accordingly
- When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result. Check whether this is the case on your calculator!