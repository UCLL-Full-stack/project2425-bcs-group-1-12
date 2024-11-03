import { Report } from '../model/Report';

const reports: Report[] = [
    new Report("1", "Monthly Summary", new Date("2024-10-01"), "Summary of the month's activities."),
    new Report("2", "Quarterly Review", new Date("2024-10-15"), "Review of the last quarter's performance."),
];

const getAllReports = (): Report[] => {
    return reports;
}

const addReport = (newGivenReport: Report): Report => {
    
    reports.push(newGivenReport);
    return newGivenReport;
    
};



export default {
   getAllReports,
   addReport
};