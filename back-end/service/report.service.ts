import ReportDB from '../repository/report.db';
import { Report } from '../model/report';
import { ReportInput } from '../types';

const getAllReports = (): Report[] => {
    return ReportDB.getAllReports();
}

const getReportById = (id: string): Report => {
    const result = ReportDB.getReportById(id);
    if (!result) {
        throw Error(`The report with id: ${id} does not exist`);
    }
    return result;
}

const addReport = (input: ReportInput): Report => {
    
    const newReport = new Report({
        title: input.title,
        date: input.date,
        summary: input.summary,
        file: new File([], input.file)
    });

    return ReportDB.addReport(newReport);
}

const deleteReportById = (id: string): void => {
    return ReportDB.deleteReportById(id);
}

export default {
    getAllReports,
    getReportById,
    addReport,
    deleteReportById
}