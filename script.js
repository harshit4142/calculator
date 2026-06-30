const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function deleteLast() {
    if(display.value != 'undefined' && display.value != 'Error' && display.value != 'Infinity') {
    display.value = display.value.slice(0, -1);
    } else {
        display.value = '';
    }
}