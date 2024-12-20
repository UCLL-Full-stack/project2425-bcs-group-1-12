import { v4 as uuidv4 } from 'uuid';
import { Goal as GoalPrisma } from '@prisma/client';

export class Goal {
    private id?: string; // Сделаем id необязательным
    private title: string;
    private photo?: File;
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

        this.title = goal.title;
        this.photo = goal.photo;
        this.description = goal.description;
        this.requiredAmount = goal.requiredAmount;
        this.currentAmount = 0; // Изначально собрано 0
        this.id = uuidv4(); // Если передан id, то присваиваем его
    }

    toObject(): Omit<{ id: string; title: string; photo: string | null; description: string; requiredAmount: number; currentAmount: number; }, "id"> {
        return {
            title: this.title,
            photo: this.photo ? this.photo.name : null, // Пример обработки File
            description: this.description,
            requiredAmount: this.requiredAmount,
            currentAmount: this.currentAmount,
            
        };
    }

    // Static method to create a Goal from an object, теперь поддерживает ID
    static from(goal: GoalPrisma): Goal {
        const newGoal = new Goal({
            title: goal.title,
            photo: new File([], ""),
            description: goal.description,
            requiredAmount: goal.requiredAmount,
            //id: goal.id
        });
        newGoal.id = goal.id;

        if (goal.currentAmount !== undefined) {
            newGoal.setCurrentAmount(goal.currentAmount); // Устанавливаем текущую сумму, если она передана
        }

        return newGoal;
    }

    // Пример для работы с геттерами и сеттерами
    getId(): string | undefined {
        return this.id;
    }

    getTitle(): string {
        return this.title;
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

    // Setters
    setTitle(title: string): void {
        if (!title?.trim()) {
            throw new Error('Title is required');
        }
        this.title = title;
    }

    setPhoto(photo: File): void {
        if (!(photo instanceof File)) {
            throw new Error('Photo must be a valid file');
        }
        this.photo = photo;
    }

    setDescription(description: string): void {
        if (!description?.trim()) {
            throw new Error('Description is required');
        }
        this.description = description;
    }

    setRequiredAmount(requiredAmount: number): void {
        if (requiredAmount <= 0) {
            throw new Error('Required amount must be greater than zero');
        }
        this.requiredAmount = requiredAmount;

        // Если новая требуемая сумма меньше текущей, скорректировать текущую сумму
        if (this.currentAmount > requiredAmount) {
            this.currentAmount = requiredAmount;
        }
    }

    setCurrentAmount(currentAmount: number): void {
        if (currentAmount < 0) {
            throw new Error('Current amount cannot be negative');
        }
        if (currentAmount > this.requiredAmount) {
            throw new Error('Current amount cannot exceed required amount');
        }
        this.currentAmount = currentAmount;
    }

    // Add funds to the goal
    addFunds(amount: number): void {
        if (amount <= 0) {
            throw new Error('Amount must be greater than zero');
        }

        this.currentAmount += amount;

        if (this.currentAmount > this.requiredAmount) {
            this.currentAmount = this.requiredAmount; // Ограничиваем текущую сумму
        }
    }

    // Validation for initial creation
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
