import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reports = () => {
    const [reports, setReports] = useState([]);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const API_URL = process.env.NEXT_PUBLIC_API_URL; 

    
    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get(`${API_URL}/our_work`); // Проверьте, что этот эндпоинт соответствует вашему API
                setReports(response.data);
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        };
        fetchReports();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newReport = { title, date, content };
            await axios.post(`${API_URL}/our_work`, newReport); // Отправка нового отчета на бэкенд
            setTitle('');
            setDate('');
            setContent('');
            setError('');
            // Обновите список отчетов после успешного добавления
            const response = await axios.get(`${API_URL}/our_work`);
            setReports(response.data);
        } catch (error) {
            // Проверяем наличие response и data перед их использованием
            if (error.response && error.response.data) {
                setError('Ошибка при добавлении отчета: ' + error.response.data.message);
            } else {
                setError('Ошибка при добавлении отчета: ' + (error.message || 'Неизвестная ошибка'));
            }
            console.error('Error adding report:', error);
        }
    };

    return (
        <div>
            <h1>Reports</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Title:
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Date:
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Content:
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </label>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Add Report</button>
            </form>
            <h2>Existing Reports</h2>
            <ul>
                {reports.map((report) => (
                    <li key={report.id}>
                        <h3>{report._title}</h3>
                        <p>{report._content}</p>
                        <p>{new Date(report._date).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reports;