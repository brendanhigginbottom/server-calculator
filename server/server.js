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

//for refactoring later
//app.use('/calcs', calcRouter);

app.use(express.static('server/public'));
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});