const express = require('express');
const router = express.Router();
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const controller = require('../controllers/apiController');

//configure the passport strategy with prisma to allow users to login
//render a different screen for the user once they log in
passport.use(
    new LocalStrategy(async(username,password, done)=> {
        try {
            const user = await prisma.user.findFirst({
                where: {
                    username
                }
            });
            if(!user) {
                return done(null,false, {message: "incorrect username"});
            }
            if(user.password !==password) {
                return done(null,false, {message: "incorrect password"});
            }
            return done(null, user);
        } catch(err) {
            return done(err);
        }
    })
)
passport.serializeUser((user,done)=> {
    done(null,user.id);
});
passport.deserializeUser(async(id,done)=> {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id
            }
        });
        done(null,user)
    } catch (err) {
        done(err)
    }
});
router.use(
    session({secret:"fileUploader",resave:false,saveUninitialized:false})
)
router.use(passport.session());

router.get('/', controller.getUser);
router.post('/',controller.createuser);
router.post(
    '/log-in',
    passport.authenticate('local', {
        successRedirect: 'http://localhost:5173/homepage',
        failureRedirect: 'http://localhost:5173/signup'
    })
);
router.get('/log-out', controller.logout);

module.exports = router;