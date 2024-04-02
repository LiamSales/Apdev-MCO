const express = require('express');
const server = express();
require('dotenv').config(); 
const connectToMongo = require('./src/conn.js');
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars');
const hbs = require('handlebars');
const router = require('./src/routes/IndexRouter.js');
const initialize = require('./script/databaseInitialize.js');


server.use(express.json()); 
server.use(express.urlencoded({ extended: true }));
server.set('view engine', 'hbs');
server.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
server.set("view cache", false);
server.use(express.static('public'));
server.use(router);





server.listen(process.env.PORT, async function(){
    await connectToMongo();
    console.log ('Connected to MongoDB.');
    console.log('Listening at port '+ process.env.PORT);

});

// import "dotenv/config";
// import { dirname } from "path";
// import { fileURLToPath } from 'url';
// import express from 'express';

// import exphbs from 'express-handlebars';
// // Routes modules
// // import router from "./src/routes/indexRouter.js";
// // Database modules
// import { connectToMongo } from "./src/conn.js";

// async function main () {
//     const __dirname = dirname(fileURLToPath(import.meta.url)); // directory URL
//     const app = express();

//     app.use("/static", express.static(__dirname + "/public"));
//     app.engine("hbs", exphbs.engine({
//         extname: 'hbs'
//     }));
//     app.set("view engine", "hbs");
//     // directory for views folder
//     app.set("views", "./views");
//     // View cache to false
//     app.set("view cache", false);

//     // from this point onwards, we are going to receive json format data
//     app.use(express.json());

//     // app.use(router);

//     try {
//         // Connect to MongoDB
//         await connectToMongo();
//         console.log ('Connected to MongoDB.');
//         // Start Express App
//         app.listen(process.env.PORT, () => {
//             console.log("Express app now listening...");
//         });
//     } catch (err) {
//         console.error(err);
//         process.exit();
//     }

// }

// main();

