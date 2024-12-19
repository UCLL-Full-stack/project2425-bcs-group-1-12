// components/reports/ReportOverviewTable.tsx

import React from 'react';

interface Report {
    id: string;
    title: string;
    description: string;
    createdAt: string;
}

interface Props {
    reports: Report[];
}

const ReportOverviewTable: React.FC<Props> = ({ reports }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                {reports.map((report) => (
                    <tr key={report.id}>
                        <td>{report.id}</td>
                        <td>{report.title}</td>
                        <td>{report.description}</td>
                        <td>{new Date(report.createdAt).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ReportOverviewTable;
