import { Report } from '../model/report';

// Инициализация списка отчетов
const reports: Report[] = [];

const report1 = new Report({
    title: "Monthly Financial Report",
    summary: "This report provides an overview of the financial performance for the month.",
    file: new File([], ""), // Пустое место вместо файла
});

const report2 = new Report({
    title: "Annual Impact Report",
    summary: "Summary of the organization's impact and achievements over the year.",
    file: new File([], ""), // Пустое место вместо файла
});

// Добавляем отчеты в массив
reports.push(report1, report2);

// Добавление отчета
export const addReport = (report: Report): Report => {
    reports.push(report);
    return report;
};

// Получение отчета по ID
export const getReportById = (id: string): Report | null => {
    return reports.find((report) => report.getId() === id) || null;
};

// Удаление отчета по ID
export const deleteReportById = (id: string): void => {
    const index = reports.findIndex((report) => report.getId() === id);
    if (index === -1) {
        throw new Error(`Report with ID ${id} not found.`);
    }
    reports.splice(index, 1);
};

// Получение всех отчетов
export const getAllReports = (): Report[] => {
    return reports;
};

export default {
    getAllReports,
    deleteReportById,
    getReportById,
    addReport
};
