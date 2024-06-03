let calculateScreen = [];
let num1 = '';
let num2 = '';
let operator = '';
const operators = '+/x-';

// math will be:
// num1 operator num2 (ex: 1123 + 4532)

$('.row').on('click' , function (event) {
    // The value you're looking for can be found in event.target.id
    // console.log(event.currentTarget.id);
    let input = event.currentTarget.id;
    let isInputValid = false;

    // Was it a number or operator or "ac"?
    if (input === 'ac') {
        clear();
        $('#top-calc')[0].innerHTML = '0';
    } else if (operators.includes(input)) {
        // Set the operator
        if (operator === '') {
            operator = input;
            isInputValid = true;
        }
    } else if (input === '=') {
        // Perform the operation.
        $('#top-calc')[0].innerHTML = math();
        clear();

    } else if (operator === '') {
        // Update the first number because they haven't selected an operator yet.
        num1 += input;
        isInputValid = true;
    } else {
        // Update the second number.
        num2 += input;
        isInputValid = true;
    }

    if (isInputValid) {
        calculateScreen.push(input);
        $('#top-calc')[0].innerHTML = calculateScreen.join(' ');
    }
    
    function math() {
        switch (operator) {
            case '+':
                return Number(num1) + Number(num2);
            case '-':
                return Number(num1) - Number(num2);
            case '/':
                return Number(num1) / Number(num2);
            case 'x':
                return Number(num1) * Number(num2);
        }
    }
    function clear() {
        num1 = '';
        num2 = '';
        operator = '';
        calculateScreen = [];
    }
});




