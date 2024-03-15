const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars');

const users = [];
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('login.html')
});


const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log('Listening at port: ' + port);
});