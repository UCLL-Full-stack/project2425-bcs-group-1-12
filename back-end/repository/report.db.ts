import { PrismaClient } from '@prisma/client';
import { Report } from '../model/report';

const prisma = new PrismaClient();

// Adding a new report
export const addReport = async (report: { title: string; summary: string; file: File }) => {
    const newReport = await prisma.report.create({
        data: {
            title: report.title,
            summary: report.summary,
            file: report.file.name, // Assuming the file is represented by its name or path in the database
        },
    });
    return newReport;
};

// Getting a report by ID
export const getReportById = async (id: string): Promise<Report | null> => {
    const reportData = await prisma.report.findUnique({ where: { id } });
    if (!reportData) {
        return null;
    }
    return Report.from({
        id: reportData.id,
        title: reportData.title,
        date: reportData.date.toISOString(),
        summary: reportData.summary,
        file: new File([], reportData.file), // Reconstructing the File object
    });
};

// Deleting a report by ID
export const deleteReportById = async (id: string): Promise<void> => {
    const report = await prisma.report.findUnique({ where: { id } });
    if (!report) {
        throw new Error(`Report with ID ${id} not found.`);
    }
    await prisma.report.delete({ where: { id } });
};

// Getting all reports
export const getAllReports = async (): Promise<Report[]> => {
    const reportDataList = await prisma.report.findMany();
    return reportDataList.map((reportData) =>
        Report.from({
            id: reportData.id,
            title: reportData.title,
            date: reportData.date.toISOString(),
            summary: reportData.summary,
            file: new File([], reportData.file), // Reconstructing the File object
        })
    );
};

export default {
    getAllReports,
    deleteReportById,
    getReportById,
    addReport,
};