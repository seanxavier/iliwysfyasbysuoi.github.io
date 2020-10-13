const express = require('express')
const app = express()
const port = process.env.PORT || 9090;
const hbs = require("hbs")
// const mongoose = require('mongoose');
const path = require('path');


const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

const routes = require('./routes/routes.js');




//helper used if a variable is equal to a value
hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});



app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + "/public"));





// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({extended: true}));

app.use('/', routes);

app.listen(port, function(){
    console.log('App listening at port ' + port)
});

//////////////////////////////


