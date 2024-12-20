import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

async function main() {
  // Хэширование паролей
  const adminPassword1 = await hashPassword("securepassword1");
  const adminPassword2 = await hashPassword("securepassword2");
  const volunteerPassword = await hashPassword("securepassword3");

  // Создание администраторов
  const admin1 = await prisma.admin.create({
    data: {
      user: {
        create: {
          firstName: "Matthew",
          lastName: "Zavalick",
          email: "zavalickm@gmail.com",
          password: adminPassword1,
          role: "ADMIN",
        },
      },
    },
  });

  const admin2 = await prisma.admin.create({
    data: {
      user: {
        create: {
          firstName: "Dmitry",
          lastName: "Osipov",
          email: "dmitry.osipov@gmail.com",
          password: adminPassword2,
          role: "ADMIN",
        },
      },
    },
  });

  // Создание волонтёра
  const volunteer = await prisma.volunteer.create({
    data: {
      user: {
        create: {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane.doe@gmail.com",
          password: volunteerPassword,
          role: "VOLUNTEER",
        },
      },
    },
  });

  // Создание целей
  const goal1 = await prisma.goal.create({
    data: {
      title: "Medical Operation for Refugees",
      photo: "operation.jpg", // Замените на актуальный путь или URL
      description: "Funding medical operations for refugees in need.",
      requiredAmount: 10000.0,
      currentAmount: 2500.0,
    },
  });

  const goal2 = await prisma.goal.create({
    data: {
      title: "Educational Supplies for Children",
      photo: "supplies.jpg", // Замените на актуальный путь или URL
      description: "Providing educational supplies to children in camps.",
      requiredAmount: 5000.0,
      currentAmount: 1200.0,
    },
  });

  // Привязка целей к волонтёру
  await prisma.volunteer.update({
    where: { id: volunteer.id },
    data: {
      goals: {
        connect: [{ id: goal1.id }, { id: goal2.id }],
      },
    },
  });

  // Создание отчётов
  await prisma.report.create({
    data: {
      title: "Monthly Progress Report",
      date: new Date(),
      summary: "This month's progress in helping refugees and organizing goals.",
      file: "progress_report.pdf", // Замените на актуальный путь или URL
    },
  });

  await prisma.report.create({
    data: {
      title: "Donation Impact Report",
      date: new Date(),
      summary: "Impact of donations received in the last quarter.",
      file: "donation_report.pdf", // Замените на актуальный путь или URL
    },
  });

  console.log("Seed data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });








  