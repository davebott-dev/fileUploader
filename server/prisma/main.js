const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const data = await prisma.post.deleteMany({});
    console.log(data);
}

main();