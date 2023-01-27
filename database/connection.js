const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE, {}).then(() => {
    // console.log("Database Connection Done!");
}).catch((error) => {
    console.log(error);
});