import { Report } from '../model/report';

const reports: Report[] = [];

const createReport = (report: Report): Report => {
    reports.push(report);
    return report;
}