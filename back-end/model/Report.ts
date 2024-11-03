export class Report {
    private _id?: string;
    private _title: string;
    private _date: Date;
    private _content: string;

    constructor(id: string, title: string, date: Date, content: string = "") {
        if (!title) {
            throw new Error("Title is required.");
        }
        if (!date) {
            throw new Error("Date is required.");
        }

        this._id = id;
        this._title = title;
        this._date = date;
        this._content = content;
    }

    

    public set id(value: string) {
        this._id = value;
    }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public get date(): Date {
        return this._date;
    }

    public set date(value: Date) {
        this._date = value;
    }

    public get content(): string {
        return this._content;
    }

    public set content(value: string) {
        this._content = value;
    }
}