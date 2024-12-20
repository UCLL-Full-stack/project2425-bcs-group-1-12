import { MedicalCase } from "../model/medicalCase";
import { Patient } from "@prisma/client";
import database from "./database";
import { get } from "http";
import { de } from "date-fns/locale";

const getAllMedicalCases = async (): Promise<MedicalCase[]> => {
    try {
        const medicalCasePrisma = await database.medicalCase.findMany({
            include: { patient: true },
        });
        return medicalCasePrisma.map((medicalCasePrisma) => MedicalCase.from(medicalCasePrisma))
    } catch (error) {
        console.error(error);
        throw new Error('Database error: medicalCase.db.ts: see server log for details.')
    }
};

const createMedicalCase = async ({
    patient,
    description,
    close,
    costBDT,
    costUSD,
    paidBDT,
}: MedicalCase): Promise<MedicalCase> => {
    try {
        const medicalCasePrisma = await database.medicalCase.create({
            data: {
                patient: {
                    connect: { id: patient.id },
                },
                description,
                ...(close && { close }),
                costBDT,
                ...(costUSD && { costUSD }),
                ...(paidBDT && { paidBDT }),
            },
            include: {
                patient: true
            }
        });

        return MedicalCase.from(medicalCasePrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Database error: medicalCase.db.ts create')
    }
}

const getMedicalCaseByPatient = async ({
    patientId,
}: { patientId: number }): Promise<MedicalCase | null> => {
    try {
        const medicalCasePrisma = await database.medicalCase.findFirst({
            where: { patientId },
            include: { patient: true },
        });
        return medicalCasePrisma ? MedicalCase.from(medicalCasePrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error: medicalCase.db.ts delete medical case');
    }
}

const getMedicalCaseById = async ({ id }: { id: number }): Promise<MedicalCase | null> => {
    try {
        const medicalCasePrisma = await database.medicalCase.findUnique({
            where: { id },
            include: { patient: true },
        });
        return medicalCasePrisma ? MedicalCase.from(medicalCasePrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error: medicalCase.db.ts get medical case by id');
    }
};

const deleteMedicalCase = async (id: number) => {
    const medicalCase = getMedicalCaseById({ id });
    if (!medicalCase) {
        throw new Error('Medical case not found');
    }
    try {
        await database.medicalCase.delete({
            where: { id }
        });
    } catch (error) {
        console.error(error);
        throw new Error('Database error: see logs for details.')
    }
};

const closeMedicalCase = () => {
    return null
};



export default {
    getAllMedicalCases,
    createMedicalCase,
    getMedicalCaseById,
    getMedicalCaseByPatient,
    deleteMedicalCase,
}