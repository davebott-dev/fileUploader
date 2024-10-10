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
        const name = req.body.name;
        const email = req.body.email;

        const newUser = await prisma.user.create({
            data: {username,password,name,email},
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
    },

    upload: async(req,res) => {
        const file = req.file;
        console.log(file);

      
    },
}

  //make it so that the uploaded file gets added to the table
        //add icons for editing,deleting,etc to the files
        //make filter and search functional
        //allow for creating folders 
        //create an account page