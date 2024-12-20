import patientDb from "../repository/patient.db";
import medicalCaseDb from "../repository/medicalCase.db";
import { Patient } from "../model/patient";
import { PatientInput } from "../types";

const getAllPatients = async (): Promise<Patient[]> => patientDb.getAllPatients();

const createPatient = async ({
    firstName,
    lastName,
    age,
    gender,
    illness,
    status,
}: PatientInput): Promise<Patient> => {

    if (!firstName) throw new Error('firstname required');
    if (!age) throw new Error('age is required');
    if (!gender) throw new Error('gender is required');

    const existingPatient = await patientDb.getPatientByFirstAndLastAndAge(firstName, lastName, age);

    if (existingPatient) throw new Error('Patient already exists');

    const patient = new Patient({ firstName, lastName, age, gender, illness, status });
    return await patientDb.createPatient(patient);
}

const deletePatient = async (id: number) => {
    const patient = await patientDb.getPatientById(id);
    if (!patient) throw new Error('Patient not found');
    await patientDb.deletePatientById(id);
}

export default {
    getAllPatients,
    createPatient,
    deletePatient,
}