const bcrypt = require('bcryptjs')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { role: 'USER', name: 'andy', email: 'andy@ggg.mail', password, phone: '0967925047' },
  { role: 'ADMIN', name: 'bobby', email: 'bobby@ggg.mail', password, phone: '0987654321' },
  { role: 'USER', name: 'candy', email: 'candy@ggg.mail', password, phone: '0970687203' },
]

const run = async () => {
  await prisma.user.createMany({
    data: userData
  })
}

run()
