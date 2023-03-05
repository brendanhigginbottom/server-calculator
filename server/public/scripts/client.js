console.log('JS Sourced');

function submitForm(event) {
    event.preventDefault();
    console.log('In submitForm');
    let valueOne = Number(document.querySelector('#valueOne').value);
    let valueTwo = Number(document.querySelector('#valueTwo').value);
    console.log('Value 1:', valueOne, 'Value 2:', valueTwo);
}


function clearFields(event) {
    console.log('In clear function');
    document.querySelector('#valueOne').value = '';
    document.querySelector('#valueTwo').value = '';
};