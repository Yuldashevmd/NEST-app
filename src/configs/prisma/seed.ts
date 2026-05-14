import dotenv from 'dotenv';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../../prisma/generated/prisma/client';
import bcrypt from 'bcrypt';

dotenv.config();

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  }),
});

async function main() {
  const hashedPassword = await bcrypt.hash('123456', 10);

  await prisma.user.upsert({
    where: { email: 'feya@mail.ru' },
    update: {},
    create: {
      name: 'Feya',
      email: 'feya@mail.ru',
      role: 'ADMIN',
      password: hashedPassword,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
