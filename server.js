const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars');

const users = [];
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log('Listening at port: ' + port);
});