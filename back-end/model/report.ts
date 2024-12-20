import { v4 as uuidv4 } from 'uuid';
import { Report as ReportPrisma } from '@prisma/client';

export class Report {
    private id: string;
    private title: string;
    private date: Date;
    private summary: string;
    private file: File;

    constructor(report: {
        title: string;
        date?: Date; // Дата может быть указана явно, но по умолчанию используется текущая
        summary: string;
        file: File;
    }) {
        this.validate(report);

        this.id = uuidv4(); // Генерация уникального ID
        this.title = report.title;
        this.date = report.date || new Date(); // Если дата не передана, берется текущая
        this.summary = report.summary;
        this.file = report.file;
    }

    getId(): string {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getDate(): Date {
        return this.date;
    }

    getSummary(): string {
        return this.summary;
    }

    getFile(): File {
        return this.file;
    }

    validate(report: {
        title: string;
        date?: Date;
        summary: string;
        file: File;
    }) {
        if (!report.title?.trim()) {
            throw new Error('Title is required');
        }
        if (!report.summary?.trim()) {
            throw new Error('Summary is required');
        }
        if (!(report.file instanceof File)) {
            throw new Error('File must be a valid file');
        }
    }

    static from(reportData: {
        id: string;
        title: string;
        date: string; // Date stored as string from the database
        summary: string;
        file: File;
    }): Report {
        return new Report({
            title: reportData.title,
            date: new Date(reportData.date), // Convert string to Date
            summary: reportData.summary,
            file: reportData.file,
        });
    }
}
