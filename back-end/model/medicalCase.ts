import { Decimal } from '@prisma/client/runtime/library';
import { Patient } from './patient';
import {
    MedicalCase as MedicalCasePrisma,
    Patient as PatientPrisma
} from '@prisma/client/index'

export class MedicalCase {
    readonly id?: number;
    readonly patient: Patient;
    readonly description: string;
    readonly open?: Date;
    readonly close?: Date;
    readonly costBDT: Decimal;
    readonly costUSD?: Decimal;
    readonly paidBDT?: Decimal;

    constructor(medicalCase: {
        id?: number;
        patient: Patient;
        description: string;
        open?: Date;
        close?: Date;
        costBDT: Decimal;
        costUSD?: Decimal;
        paidBDT?: Decimal;
    }) {
        this.validate(medicalCase);

        this.id = medicalCase.id;
        this.patient = medicalCase.patient;
        this.description = medicalCase.description;
        this.open = medicalCase.open;
        this.close = medicalCase.close;
        this.costBDT = medicalCase.costBDT;
        this.costUSD = medicalCase.costUSD;
        this.paidBDT = medicalCase.paidBDT;
    }

    validate(medicalCase: {
        patient: Patient;
        description: string;
        open?: Date;
        close?: Date;
        costBDT: Decimal;
        paidBDT?: Decimal;
    }) {
        if (!medicalCase.patient) {
            throw new Error('Patient is required');
        }
        if (!medicalCase.description) {
            throw new Error('Description is required');
        }
        if (medicalCase.open && medicalCase.close) {
            if (medicalCase.open > medicalCase.close) {
                throw new Error('Close date must be after open date');
            }
        }
        if (medicalCase.paidBDT) {
            if (medicalCase.paidBDT > medicalCase.costBDT) {
                throw new Error('Paid BDT must be less than or equal to cost BDT. Please update the cost.');
            }
        }
    }

    getId(): number | undefined {
        return this.id;
    }

    getPatient(): Patient {
        return this.patient;
    }

    getDescription(): string {
        return this.description;
    }

    getOpen(): Date | undefined {
        return this.open
    }

    getClose(): Date | undefined {
        return this.close
    }

    getCostBDT(): Decimal | undefined {
        return this.costBDT
    }

    getCostUSD(): Decimal | undefined {
        return this.costUSD
    }

    getPaidBDT(): Decimal | undefined {
        return this.paidBDT
    }

    static from({
        id,
        patient,
        description,
        open,
        close,
        costBDT,
        costUSD,
        paidBDT,
    }: MedicalCasePrisma & { patient: PatientPrisma; }) {
        return new MedicalCase({
            id,
            patient: Patient.from(patient),
            description,
            open,
            close: close ?? undefined,
            costBDT,
            costUSD: costUSD ?? undefined,
            paidBDT: paidBDT ?? undefined,
        });
    }
}