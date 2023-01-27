require('./database/connection');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Hello Manuj!");
});

app.listen(port,()=>{
    try {
        console.log(`App Runing on ${port}.`);
    } catch (error) {
        console.log(error);
    }
});