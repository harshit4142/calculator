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
    const lastChar = display.value.at(-1);

    if (/^[0-9]$/.test(lastChar) || /^[+\-*/.]$/.test(lastChar)) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "";
    }
}