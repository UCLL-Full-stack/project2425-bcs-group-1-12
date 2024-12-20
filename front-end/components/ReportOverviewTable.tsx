import React from 'react';

interface Report {
    id: string;
    title: string;
    summary: string;
}

interface Props {
    reports: Report[];
}

const ReportOverviewCards: React.FC<Props> = ({ reports }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center',
                backgroundColor: '#000',
                padding: '20px',
                borderRadius: '10px',
            }}
        >
            {reports.map((report) => (
                <div
                    key={report.id}
                    style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        border: '1px solid #fff',
                        borderRadius: '10px',
                        padding: '15px',
                        width: '250px',
                        boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <h2 style={{ fontSize: '1.2em', marginBottom: '10px' }}>{report.title}</h2>
                    <p style={{ fontSize: '0.9em', color: '#ccc' }}>{report.summary}</p>
                </div>
            ))}
        </div>
    );
};

export default ReportOverviewCards;
