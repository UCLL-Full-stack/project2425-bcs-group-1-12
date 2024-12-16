import { Volunteer } from "../../model/volunteer";

describe('Volunteer', () => {
    let volunteer: Volunteer;

    beforeEach(() => {
        volunteer = new Volunteer({
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@example.com',
            password: 'StrongPassword123!',
        });
    });

    it('should create a Volunteer instance with valid data', () => {
        expect(volunteer.getId()).toBeDefined();
        expect(volunteer.getFirstName()).toBe('John');
        expect(volunteer.getLastName()).toBe('Doe');
        expect(volunteer.getEmail()).toBe('johndoe@example.com');
        expect(volunteer.getRole()).toBe('volunteer');
    });

    it('should initialize with an empty list of assigned goals', () => {
        expect(volunteer.getAssignedGoals()).toEqual([]);
    });

    it('should allow assigning a goal', () => {
        const goalId = 'goal-123';
        volunteer.assignGoal(goalId);

        expect(volunteer.getAssignedGoals()).toContain(goalId);
    });

    it('should allow assigning multiple goals', () => {
        const goal1 = 'goal-123';
        const goal2 = 'goal-456';

        volunteer.assignGoal(goal1);
        volunteer.assignGoal(goal2);

        expect(volunteer.getAssignedGoals()).toEqual([goal1, goal2]);
    });

    it('should throw an error if email is invalid', () => {
        expect(() => {
            new Volunteer({
                firstName: 'John',
                lastName: 'Doe',
                email: 'invalid-email',
                password: 'StrongPassword123!',
            });
        }).toThrow('Invalid email format');
    });

    it('should throw an error if password is weak', () => {
        expect(() => {
            new Volunteer({
                firstName: 'John',
                lastName: 'Doe',
                email: 'johndoe@example.com',
                password: '123',
            });
        }).toThrow('Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.');
    });

    it('should throw an error if first name is missing', () => {
        expect(() => {
            new Volunteer({
                firstName: '',
                lastName: 'Doe',
                email: 'johndoe@example.com',
                password: 'StrongPassword123!',
            });
        }).toThrow('First name is required');
    });

    it('should throw an error if last name is missing', () => {
        expect(() => {
            new Volunteer({
                firstName: 'John',
                lastName: '',
                email: 'johndoe@example.com',
                password: 'StrongPassword123!',
            });
        }).toThrow('Last name is required');
    });
});
