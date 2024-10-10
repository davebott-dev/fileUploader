const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const data = await prisma.post.create({
        data: {
            fileName: 'file',
            size: 123,
            data: 'data',
            location: 'location',
            authorId: 'f7559d58-13b5-46f6-b9a7-6b494e042e03'
        }
    });
    console.log(data)
}

main();