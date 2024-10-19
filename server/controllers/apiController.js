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
        res.redirect('http://localhost:5173');
    },

    logout: async(req,res,next)=> {
        req.logout((err)=> {
            if(err) {
                return next(err);
            }
            res.redirect('http://localhost:5173');
        })
    },

    upload: async(req,res) => {
        const name = req.file.originalname;
        const location = req.file.mimetype;
        const data = req.file.buffer;
        const size = req.file.size;
        const user = req.user.id;

        const newUpload = await prisma.post.create({
            data: {
                fileName:name,
                location:location,
                data:data,
                size:size,
                authorId: user,
            }
        });
        res.redirect('http://localhost:5173/homepage');
    },
    getFiles: async(req,res)=> {
        const user = req.user.id;
        const files = await prisma.post.findMany({
            where: {
                authorId: user
            }
        });
        res.json(files);
    },
    delete: async(req,res) => {
        const id = req.params.id;

        const deletePost = await prisma.post.delete({
            where: {
                id:Number(id)
            }
        });
        res.redirect('http://localhost:5173/homepage');
    },
    favorite: async(req,res) => {
        const id = req.params.id;
        const bool = await prisma.post.findFirst({
            where: {
                id:Number(id)
            }
        });

        const updateFavorite = await prisma.post.update({
            where: {
                id: Number(id)
            },
            data: {
                isFav: {
                    set: !bool.isFav
                }
            }

        })
        res.redirect('http://localhost:5173/homepage');
    },
    getRecent: async(req,res)=> {
        const curr = new Date();
        const next = new Date(curr);
        next.setDate(curr.getDate()-2);
        
        const recent = await prisma.post.findMany({
            where: {
                createdAt: {
                    lte: curr,
                    gte: next,
                }
            },
         });
        res.json(recent);
    },
    getFavs: async(req,res)=> {
        const favorites= await prisma.post.findMany({
            where:{
                isFav: true,
            }
        });
        res.json(favorites);
    }
}
