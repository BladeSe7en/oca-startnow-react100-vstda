const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

function convertCurrency () {
    $.ajax({
        type: "GET",
            url: "https://api.exchangeratesapi.io/latest?base=USD",
    
            success: function(data){
                console.log(data);
                var echange_rate = '';
            }
        });
    }
    convertCurrency();
module.exports = app;