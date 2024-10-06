const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {

    createuser: async(req,res) => {
        const username = req.body.username;
        const password = req.body.password;

        const newUser = await prisma.user.create({
            data: {username,password},
        });
        console.log(newUser);
        res.redirect('http://localhost:5173');
    }
}


