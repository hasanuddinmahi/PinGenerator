function getPin() {
    const pin = generatePin();
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('Pin not 3 digit found');
        getPin();
    }
}

function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    return pin;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    console.log(pin);

    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeField = document.getElementById('number-field');
    const previousNumber = typeField.value;

    if (isNaN(number)) {
        if (number == 'C') {
            typeField.value = '';
        }
        else if (number == '<') {
            const digit = previousNumber.split('');
            digit.pop();
            const remainDigit = digit.join('');
            typeField.value = remainDigit;
        }
    }
    else {
        const newNumber = previousNumber + number;
        typeField.value = newNumber;
    }
})

document.getElementById('btn-submit').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('number-field');
    const typedNumber = typeNumberField.value;
    
    const pinSuccessDisplay = document.getElementById('pin-success');
    const pinFailedDisplay = document.getElementById('pin-failed');
    const pinRetry = document.getElementById('try-left');

    if (typedNumber == currentPin) {
        pinSuccessDisplay.style.display = 'block';
        pinFailedDisplay.style.display = 'none';   
        pinRetry.style.display = 'none';

    }
    else {
        pinFailedDisplay.style.display = 'block';
        pinSuccessDisplay.style.display = 'none';
        pinRetry.style.display = 'block';
    }
})