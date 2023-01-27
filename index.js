require('./database/connection');
require('dotenv').config();
require("./models/user");
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const router = require("./routes/route");

const app = express();
const port = process.env.PORT || 3000;

// path allocation for simplicity
const viewpath = path.join(__dirname, './Frontend/views');
const partialpath = path.join(__dirname, './Frontend/views/partials');

// hbs connection
app.set('view engine', 'hbs');
app.set("views", viewpath);
hbs.registerPartials(partialpath);

// css,script connection
app.use('/cssb', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "./node_modules/jquery/dist")));
app.use('/css', express.static(path.join(__dirname, "./Frontend/css")));
app.use('/script', express.static(path.join(__dirname, "./Frontend/script")));

// Middleware
app.use(express.json());

// Get Data
app.use(express.urlencoded({
    extended: true
}));

// Routing
app.use('/',router);
app.use('/index',router);
app.use('/form',router);
app.use('/conn',router);

app.listen(port,()=>{
    try {
        // console.log(`App Runing on ${port}.`);
    } catch (error) {
        console.log(error);
    }
});