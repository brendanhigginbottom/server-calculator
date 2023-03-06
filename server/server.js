// Require express
const express = require('express');

const app = express();
// Heroku assigns us a unique PORT
// Use 5001 for localhost development
const port = process.env.PORT || 5001;
//for refactoring later
//const quoteRouter = require('./routes/quote.router.js');

//Allow req.body
app.use(express.json());

//refactor here down to express.static

let calcHistory = [];

function calculate(calcNum, value1, value2, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = (value1 + value2).toFixed(2);
            //console.log('+ switch eval true');
            break;
        case '-':
            result = (value1 - value2).toFixed(2);
            //console.log('- switch eval true');
            break;
        case '*':
            result = (value1 * value2).toFixed(2);
            //console.log('* switch eval true')
            break;
        case '/':
            result = (value1 / value2).toFixed(2);
            //console.log('/ switch eval true');
            break;
        default:
            result = 'test';
            console.log('Not working');
    }
    calcHistory.push({
        calcNum: calcNum,
        valueOne: value1,
        valueTwo: value2,
        operator: operator,
        result: result
    });
    console.log(calcHistory);
}

app.post('/calculations', (req, res) => {
    console.log('POST Request made for /calculations');
    console.log(req.body);
    let calcNum = req.body.calcNum;
    let value1 = req.body.valueOne;
    let value2 = req.body.valueTwo;
    let operator = req.body.operator;
    //console.log(operator);
    calculate(calcNum, value1, value2, operator);
    res.sendStatus(200);
});

app.get('/calculations', (req, res) => {
    console.log('GET Request made for /calculations');
    res.send(calcHistory);
});

//for refactoring later
//app.use('/calcs', calcRouter);

app.use(express.static('server/public'));
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});