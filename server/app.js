require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:true}));

app.listen(8080, ()=> console.log('server is running on port 8080'));
