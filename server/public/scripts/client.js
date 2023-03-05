console.log('JS Sourced');

let selectedOperator = '';

function submitForm(event) {
    event.preventDefault();
    console.log('In submitForm');
    let valueOne = Number(document.querySelector('#valueOne').value);
    let valueTwo = Number(document.querySelector('#valueTwo').value);
    console.log('Value 1:', valueOne, 'Value 2:', valueTwo);
    let inputForServer = {
        valueOne: valueOne,
        valueTwo: valueTwo,
        operator: selectedOperator
    };
    console.log(inputForServer);
}

function plusKey(event) {
    selectedOperator = '+';
    console.log(selectedOperator);
}

function minusKey(event) {
    selectedOperator = '-';
    console.log(selectedOperator);
}

function timesKey(event) {
    selectedOperator = '*';
    console.log(selectedOperator);
}

function divideKey(event) {
    selectedOperator = '/';
    console.log(selectedOperator);
}

// Clears input fields
function clearFields(event) {
    console.log('In clear function');
    document.querySelector('#valueOne').value = '';
    document.querySelector('#valueTwo').value = '';
}