import { v4 as uuidv4 } from 'uuid';

export class Goal {
    private id: string;
    private title: string;
    private photo: File;
    private description: string;
    private requiredAmount: number;
    private currentAmount: number;

    constructor(goal: {
        title: string;
        photo: File;
        description: string;
        requiredAmount: number;
    }) {
        this.validate(goal);

        this.id = uuidv4(); // Генерация уникального ID
        this.title = goal.title;
        this.photo = goal.photo;
        this.description = goal.description;
        this.requiredAmount = goal.requiredAmount;
        this.currentAmount = 0; // Изначально собрано 0
    }

    getId(): string {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getPhoto(): File {
        return this.photo;
    }

    getDescription(): string {
        return this.description;
    }

    getRequiredAmount(): number {
        return this.requiredAmount;
    }

    getCurrentAmount(): number {
        return this.currentAmount;
    }

    getProgressPercentage(): number {
        return (this.currentAmount / this.requiredAmount) * 100;
    }

    addFunds(amount: number): void {
        if (amount <= 0) {
            throw new Error('Amount must be greater than zero');
        }

        this.currentAmount += amount;

        if (this.currentAmount > this.requiredAmount) {
            this.currentAmount = this.requiredAmount; // Ограничиваем текущую сумму
        }
    }

    validate(goal: {
        title: string;
        photo: File;
        description: string;
        requiredAmount: number;
    }) {
        if (!goal.title?.trim()) {
            throw new Error('Title is required');
        }
        if (!(goal.photo instanceof File)) {
            throw new Error('Photo must be a valid file');
        }
        if (!goal.description?.trim()) {
            throw new Error('Description is required');
        }
        if (goal.requiredAmount <= 0) {
            throw new Error('Required amount must be greater than zero');
        }
    }
}
