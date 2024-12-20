import { get } from "http";
import { Patient } from "../model/patient";
import database from "./database";

const getAllPatients = async (): Promise<Patient[]> => {
    try {
        const patientPrisma = await database.patient.findMany({
            include: { medicalCases: true },
        });
        return patientPrisma.map((patientPrisma) => Patient.from(patientPrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Database error: patient.db.ts: See server log for details.')
    }
};

const createPatient = async ({
    firstName,
    lastName,
    age,
    gender,
    illness,
    status,
}: Patient): Promise<Patient> => {
    try {
        const patientPrisma = await database.patient.create({
            data: {
                firstName,
                ...(lastName && { lastName }),
                age,
                gender,
                ...(illness && { illness }),
                ...(status && { status }),
            }
        });

        return Patient.from(patientPrisma)
    } catch (error) {
        console.error(error);
        throw new Error('Database error: createPatient in patient.db.ts')
    }
}

const getPatientById = async (id: number): Promise<Patient | null> => {
    try {
        const patientPrisma = await database.patient.findUnique({
            where: { id },
        });
        return patientPrisma ? Patient.from(patientPrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error: see logs for details.')
    }
}

const getPatientByFirstAndLastAndAge = async (firstName: string, lastName: string | undefined, age: number) => {
    try {
        const patientPrisma = await database.patient.findFirst({
            where: { firstName, lastName, age },
        });
        return patientPrisma ? Patient.from(patientPrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error: see logs for details.')
    }
}

const deletePatientById = async (id: number) => {
    const patient = getPatientById(id);
    if (!patient) throw new Error('Patient not found');
    try {
        await database.patient.delete({
            where: { id },
        });
    } catch (error) {
        console.error(error);
        throw new Error('Database error: see logs for details.')
    }
}



export default {
    getAllPatients,
    getPatientById,
    getPatientByFirstAndLastAndAge,
    createPatient,
    deletePatientById,
}