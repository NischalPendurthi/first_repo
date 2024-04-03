const express = require('express');
const errorHandler = require('./middleware/errorHandler');

const dotenv = require('dotenv').config;
const app = express();
var port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use(errorHandler);
app.listen(port ,() =>{
    console.log(`i too Love you ${port}`);
});