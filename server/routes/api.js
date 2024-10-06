const express = require('express');
const router = express.Router();
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const controller = require('../controllers/apiController');

//configure the passport strategy with prisma to allow users to login
//render a different screen for the user once they log in
passport.use(
    new LocalStrategy(async(username,password, done)=> {
        try {
            const {rows} = await 
        }
    })
)

router.post('/',controller.createuser);

module.exports = router;