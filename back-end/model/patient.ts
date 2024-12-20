import { Patient as PatientPrisma } from '@prisma/client/index'

export class Patient {
    readonly id?: number;
    readonly firstName: string;
    readonly lastName?: string;
    readonly age: number;
    readonly gender: string;
    readonly illness?: string;
    readonly status?: string;

    constructor(patient: {
        id?: number;
        firstName: string;
        lastName?: string;
        age: number;
        gender: string;
        illness?: string;
        status?: string;
    }) {
        this.validate(patient)

        this.id = patient.id;
        this.firstName = patient.firstName;
        this.lastName = patient.lastName;
        this.age = patient.age;
        this.gender = patient.gender;
        this.illness = patient.illness;
        this.status = patient.status;
    }

    validate(patient: {
        firstName: string;
        age: number;
        gender: string;
    }) {
        if (!patient.firstName) {
            throw new Error('First name is required');
        }
        if (!patient.age) {
            throw new Error('Age is required');
        }
        if (!patient.gender) {
            throw new Error('Gender is required');
        }
    }

    equals({ id, firstName, lastName, age, gender, illness, status }: Patient): boolean {
        return (
            this.id === id &&
            this.firstName === firstName &&
            this.lastName === lastName &&
            this.age === age &&
            this.illness === illness &&
            this.status === status
        );
    }

    getId(): number | undefined {
        return this.id;
    }
    getFirstName(): string {
        return this.firstName
    }
    getLastName(): string | undefined {
        return this.lastName
    }
    getAge(): number {
        return this.age
    }
    getGender(): string {
        return this.gender
    }
    getIllness(): string | undefined {
        return this.illness
    }
    getStatus(): string | undefined {
        return this.status
    }

    static from({
        id,
        firstName,
        lastName,
        age,
        gender,
        illness,
        status,
    }: PatientPrisma) {
        return new Patient({
            id,
            firstName,
            lastName: lastName ?? undefined,
            age,
            gender,
            illness: illness ?? undefined,
            status: status ?? undefined,
        });
    }
}