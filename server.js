require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/login',require('./route/loginroute'));
app.use('/category',require('./route/categoryRoute'));
app.listen (8000,()=>{
    console.log('Server is running on 8000 port: ');
})