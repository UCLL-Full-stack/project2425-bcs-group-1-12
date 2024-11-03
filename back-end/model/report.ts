export class Report {
    private id: number;
    private title: string;
    private content: string;
    private date: Date;

    constructor(report: {
        id: number;
        title: string;
        content: string;
        date: Date;
    }) {
        this.validate(report);

        this.id = report.id;
        this.title = report.title;
        this.content = report.content;
        this.date = report.date;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getContent(): string {
        return this.content;
    }

    getDate(): Date {
        return this.date;
    }

    validate(report: {
        id: number;
        title: string;
        content: string;
        date: Date;
    }) {
        if (!report.id) {
            throw new Error('Report ID is required')
        }
        if (!report.title?.trim()) {
            throw new Error('Title is required')
        }
        if (!report.content?.trim()) {
            throw new Error('Content is required')
        }
        if (!report.date) {
            throw new Error('Date is required')
        }
    }
}