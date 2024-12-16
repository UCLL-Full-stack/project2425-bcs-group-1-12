import { Goal } from "../../model/goal";

describe('Goal', () => {
    let mockFile: File;

    beforeEach(() => {
        mockFile = new File(['photo content'], 'photo.png', { type: 'image/png' });
    });

    it('should create a Goal instance with valid data', () => {
        const goal = new Goal({
            title: 'Build a School',
            photo: mockFile,
            description: 'We aim to build a school in a rural area.',
            requiredAmount: 1000,
        });

        expect(goal.getId()).toBeDefined();
        expect(goal.getTitle()).toBe('Build a School');
        expect(goal.getPhoto()).toBe(mockFile);
        expect(goal.getDescription()).toBe('We aim to build a school in a rural area.');
        expect(goal.getRequiredAmount()).toBe(1000);
        expect(goal.getCurrentAmount()).toBe(0);
    });

    it('should throw an error if title is missing', () => {
        expect(() => {
            new Goal({
                title: '',
                photo: mockFile,
                description: 'We aim to build a school in a rural area.',
                requiredAmount: 1000,
            });
        }).toThrow('Title is required');
    });

    it('should throw an error if photo is not a valid file', () => {
        expect(() => {
            new Goal({
                title: 'Build a School',
                photo: {} as File,
                description: 'We aim to build a school in a rural area.',
                requiredAmount: 1000,
            });
        }).toThrow('Photo must be a valid file');
    });

    it('should throw an error if description is missing', () => {
        expect(() => {
            new Goal({
                title: 'Build a School',
                photo: mockFile,
                description: '',
                requiredAmount: 1000,
            });
        }).toThrow('Description is required');
    });

    it('should throw an error if required amount is less than or equal to zero', () => {
        expect(() => {
            new Goal({
                title: 'Build a School',
                photo: mockFile,
                description: 'We aim to build a school in a rural area.',
                requiredAmount: 0,
            });
        }).toThrow('Required amount must be greater than zero');
    });

    it('should add funds to the goal', () => {
        const goal = new Goal({
            title: 'Build a School',
            photo: mockFile,
            description: 'We aim to build a school in a rural area.',
            requiredAmount: 1000,
        });

        goal.addFunds(200);
        expect(goal.getCurrentAmount()).toBe(200);
    });

    it('should not allow adding negative or zero funds', () => {
        const goal = new Goal({
            title: 'Build a School',
            photo: mockFile,
            description: 'We aim to build a school in a rural area.',
            requiredAmount: 1000,
        });

        expect(() => goal.addFunds(0)).toThrow('Amount must be greater than zero');
        expect(() => goal.addFunds(-100)).toThrow('Amount must be greater than zero');
    });

    it('should not exceed the required amount when adding funds', () => {
        const goal = new Goal({
            title: 'Build a School',
            photo: mockFile,
            description: 'We aim to build a school in a rural area.',
            requiredAmount: 1000,
        });

        goal.addFunds(1200);
        expect(goal.getCurrentAmount()).toBe(1000);
    });

    it('should return the correct progress percentage', () => {
        const goal = new Goal({
            title: 'Build a School',
            photo: mockFile,
            description: 'We aim to build a school in a rural area.',
            requiredAmount: 1000,
        });

        goal.addFunds(500);
        expect(goal.getProgressPercentage()).toBe(50);

        goal.addFunds(500);
        expect(goal.getProgressPercentage()).toBe(100);
    });
});
