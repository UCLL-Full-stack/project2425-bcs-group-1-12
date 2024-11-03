import { Report } from '../model/Report';
import ReportDB from '../repository/report.db';
import userDb from '../repository/user.db';
import { User } from '../model/User';
import reportDb from '../repository/report.db';
import { v4 as uuidv4 } from 'uuid';
import { ReportInput } from '../types';

const getAllReports = (): Report[] => {
    return ReportDB.getAllReports();
};

const addReport = (input: ReportInput): Report => {
    
    const { title, date, content = "" } = input;

    // Generate a unique ID and create a new Report instance using the constructor
    const newReport = new Report(uuidv4(), title, new Date(date), content);

    return ReportDB.addReport(newReport);

};




export default { getAllReports, addReport };