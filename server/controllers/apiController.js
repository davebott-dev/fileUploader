const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    getUser: async(req,res) => {
       const user = req.user;
       res.json(user)
    },

    createuser: async(req,res) => {
        const username = req.body.username;
        const password = req.body.password;

        const newUser = await prisma.user.create({
            data: {username,password},
        });
        console.log(newUser);
        res.redirect('http://localhost:5173');
    },

    logout: async(req,res,next)=> {
        req.logout((err)=> {
            if(err) {
                return next(err);
            }
            res.redirect('http://localhost:5173')
        })
    }
}


