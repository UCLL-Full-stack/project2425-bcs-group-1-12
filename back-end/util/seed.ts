import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed Users
    const admin1 = await prisma.user.create({
        data: {
            firstName: 'Matthew',
            lastName: 'Zavalick',
            email: 'zavalickm@gmail.com',
            password: 'password1!',
            role: 'ADMIN',
            Admin: {
                create: {},
            },
        },
    });

    const admin2 = await prisma.user.create({
        data: {
            firstName: 'Dmitry',
            lastName: 'Osipov',
            email: 'mitja.osipov.2003@gmail.com',
            password: 'password2!',
            role: 'ADMIN',
            Admin: {
                create: {},
            },
        },
    });

    const volunteer = await prisma.user.create({
        data: {
            firstName: 'Tan',
            lastName: 'Nayir',
            email: 'tan.nayir@student.ucll.be',
            password: 'password3!',
            role: 'VOLUNTEER',
            Volunteer: {
                create: {},
            },
        },
    });

    // Seed Goals
    const goal1 = await prisma.goal.create({
        data: {
            title: 'Build a School in Africa',
            photo: 'https://example.com/school.jpg',
            description: 'A goal to fund building a school in Africa.',
            requiredAmount: 50000,
            currentAmount: 10000,
        },
    });

    const goal2 = await prisma.goal.create({
        data: {
            title: 'Clean the Local Park',
            photo: 'https://example.com/park.jpg',
            description: 'A goal to organize and fund a park cleanup event.',
            requiredAmount: 1000,
            currentAmount: 200,
        },
    });

    // Seed Reports
    const report1 = await prisma.report.create({
        data: {
            title: 'Monthly Financial Summary',
            date: new Date(),
            summary: 'Summary of the organization’s finances for the past month.',
            file: 'https://example.com/financial-summary.pdf',
        },
    });

    const report2 = await prisma.report.create({
        data: {
            title: 'Volunteer Engagement Report',
            date: new Date(),
            summary: 'Details of volunteer activities and participation levels.',
            file: 'https://example.com/volunteer-report.pdf',
        },
    });

    console.log('Seeding complete');
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
