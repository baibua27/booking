const {PrismaClient} =require('@prisma/client')
const prisma = new PrismaClient()

async function run() {
  await prisma.$executeRawUnsafe('DROP Database hotel01')
  await prisma.$executeRawUnsafe('CREATE Database hotel01')
}
console.log('Reset DB')
run()