import medicalCaseDb from "../repository/medicalCase.db";
import patientDb from "../repository/patient.db";
import { MedicalCase } from "../model/medicalCase";
import { Patient } from "../model/patient";
import { Decimal } from "@prisma/client/runtime/library";
import { MedicalCaseInput, PatientInput } from "../types";

const getAllMedicalCases = async (): Promise<MedicalCase[]> => medicalCaseDb.getAllMedicalCases();

// const getMedicalCaseById = async (id: number): Promise<MedicalCase> => {
//     const medicalCase = await medicalCaseDb.getMedicalCaseById({ id });
// }

const createMedicalCase = async ({
    patient: patientInput,
    description,
    open,
    close,
    costBDT,
    costUSD,
    paidBDT,
}: MedicalCaseInput): Promise<MedicalCase> => {
    if (!patientInput || !patientInput.id) throw new Error('Patient input is invalid');
    if (!description) throw new Error('Description is required');
    if (costBDT === undefined || costBDT === null) throw new Error('Cost BDT is required');

    const patient = await patientDb.getPatientById(patientInput.id);

    if (!patient) throw new Error('Patient not found');
    if (!patient.id) throw new Error('Patient id is required');

    const existingPatient = await medicalCaseDb.getMedicalCaseByPatient({ patientId: patient.id });

    if (existingPatient) throw new Error('Medical case already exists for this patient');

    const medicalCase = new MedicalCase({
        patient,
        description,
        open,
        close,
        costBDT: new Decimal(costBDT),
        costUSD: costUSD ? new Decimal(costUSD) : undefined,
        paidBDT: paidBDT ? new Decimal(paidBDT) : undefined
    });
    return await medicalCaseDb.createMedicalCase(medicalCase);
}

const deleteMedicalCase = async (id: number) => {
    const medicalCase = await medicalCaseDb.getMedicalCaseById({ id });

    if (!medicalCase) throw new Error('Medical case not found');

    await medicalCaseDb.deleteMedicalCase(id);
}

export default { getAllMedicalCases, createMedicalCase, deleteMedicalCase };