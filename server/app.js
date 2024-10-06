require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const apiRoute = require('./routes/api');

app.use(express.urlencoded({extended:true}));
app.use('/api',apiRoute);

app.listen(8080, ()=> console.log('server is running on port 8080'));
