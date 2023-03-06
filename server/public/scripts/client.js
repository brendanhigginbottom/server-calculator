console.log('JS Sourced');

let selectedOperator = '';
let calcNum = 1;

// Write GET function that will append here


function submitForm(event) {
    event.preventDefault();
    //Capturing values and incrementing calcNum for ID to delete by
    console.log('In submitForm');
    let valueOne = Number(document.querySelector('#valueOne').value);
    let valueTwo = Number(document.querySelector('#valueTwo').value);
    console.log('Value 1:', valueOne, 'Value 2:', valueTwo);
    let inputForServer = {
        calcNum: calcNum,
        valueOne: valueOne,
        valueTwo: valueTwo,
        operator: selectedOperator
    };
    console.log(inputForServer);
    calcNum += 1;
    //posting inputs to server for calculation
    axios.post('/calculations', inputForServer).then((response) => {
        console.log(response);
        //getCalcs();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.')
    });
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