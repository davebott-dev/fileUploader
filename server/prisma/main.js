const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const post = await prisma.post.create({
        data:{
            fileName: 'txt',
            location: '/txt',
            size: 123,
            authorId: '17c647d2-e605-4e0d-b4d3-61a9f1b463cc',
        }
    })
    const data = await prisma.user.findMany({
     
        include: {
            post: true,
        }
     })
    console.dir(data, {depth:null});
}

main();

/*
implement this in the backend apiController...
now the posts will be connected to the user
*/