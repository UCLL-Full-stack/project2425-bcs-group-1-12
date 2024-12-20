import { Report } from "../../model/report";

describe('Report', () => {
    let mockFile: File;

    beforeEach(() => {
        mockFile = new File(['report content'], 'report.pdf', { type: 'application/pdf' });
    });

    it('should create a Report instance with valid data', () => {
        const report = new Report({
            title: 'Annual Report',
            summary: 'This is a summary of the annual report.',
            file: mockFile,
        });

        expect(report.getId()).toBeDefined();
        expect(report.getTitle()).toBe('Annual Report');
        expect(report.getDate()).toBeInstanceOf(Date);
        expect(report.getSummary()).toBe('This is a summary of the annual report.');
        expect(report.getFile()).toBe(mockFile);
    });

    it('should use the current date if no date is provided', () => {
        const report = new Report({
            title: 'Annual Report',
            summary: 'This is a summary of the annual report.',
            file: mockFile,
        });

        const now = new Date();
        expect(report.getDate().toDateString()).toBe(now.toDateString());
    });

    it('should allow setting a custom date', () => {
        const customDate = new Date('2023-01-01');
        const report = new Report({
            title: 'Annual Report',
            date: customDate,
            summary: 'This is a summary of the annual report.',
            file: mockFile,
        });

        expect(report.getDate()).toBe(customDate);
    });

    it('should throw an error if title is missing', () => {
        expect(() => {
            new Report({
                title: '',
                summary: 'This is a summary of the annual report.',
                file: mockFile,
            });
        }).toThrow('Title is required');
    });

    it('should throw an error if summary is missing', () => {
        expect(() => {
            new Report({
                title: 'Annual Report',
                summary: '',
                file: mockFile,
            });
        }).toThrow('Summary is required');
    });

    it('should throw an error if file is not a valid File instance', () => {
        expect(() => {
            new Report({
                title: 'Annual Report',
                summary: 'This is a summary of the annual report.',
                file: {} as File,
            });
        }).toThrow('File must be a valid file');
    });
});
