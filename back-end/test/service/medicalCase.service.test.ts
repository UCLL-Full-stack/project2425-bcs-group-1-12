import patientDb from "../../repository/patient.db";
import medicalCaseDb from "../../repository/medicalCase.db";
import { MedicalCase } from "../../model/medicalCase";
import { Patient } from "../../model/patient";
import medicalCaseService from "../../service/medicalCase.service";
import { Decimal } from "@prisma/client/runtime/library";

const patient = new Patient({
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
    age: 15,
    gender: 'F',
    illness: 'Measles',
    status: 'In treatment'
});

const existingMedicalCase = new MedicalCase({
    id: 1,
    patient,
    description: 'Patient has a fever and a rash. Suspected measles.',
    costBDT: new Decimal(5000)
});

const description = 'Patient has a fever and a rash. Suspected measles.';
const costBDT = 5000;

let createMedicalCaseMock: jest.Mock;
let mockMedicalCaseDbGetMedicalCaseByPatient: jest.Mock;
let mockPatientDbGetPatientById: jest.Mock;
let mockMedicalCaseDbDeleteMedicalCase: jest.Mock;

beforeEach(() => {
    createMedicalCaseMock = jest.fn();
    mockMedicalCaseDbGetMedicalCaseByPatient = jest.fn();
    mockPatientDbGetPatientById = jest.fn();
    mockMedicalCaseDbDeleteMedicalCase = jest.fn();
})

afterEach(() => {
    jest.clearAllMocks();
});

test('given: valid values for medicalCase, when: new medicalCase is created, then: medicalCase is created', async () => {
    //given
    patientDb.getPatientById = mockPatientDbGetPatientById.mockResolvedValue(patient);
    medicalCaseDb.getMedicalCaseById = mockMedicalCaseDbGetMedicalCaseByPatient.mockResolvedValue(null);
    medicalCaseDb.createMedicalCase = createMedicalCaseMock;

    //when
    await medicalCaseService.createMedicalCase({ patient, description, costBDT });

    //then
    expect(createMedicalCaseMock).toHaveBeenCalledTimes(1);
    expect(createMedicalCaseMock).toHaveBeenCalledWith({
        patient,
        description,
        costBDT: new Decimal(costBDT), //the Decimal type is being converted to a string when serialized
        costUSD: undefined,
        paidBDT: undefined,
        close: undefined,
        open: undefined,
        id: undefined
    });
});

test('given a medicalCase with an existing patient, when: new medicalCase is created, then: error is thrown', async () => {
    //given
    patientDb.getPatientById = mockPatientDbGetPatientById.mockResolvedValue(patient);
    medicalCaseDb.getMedicalCaseByPatient = mockMedicalCaseDbGetMedicalCaseByPatient.mockResolvedValue(new MedicalCase({
        id: 1,
        patient,
        description: 'Patient has a fever and a rash. Suspected measles.',
        costBDT: new Decimal(5000)
    }));

    //when
    const createMedicalCase = () => medicalCaseService.createMedicalCase({ patient, description, costBDT });

    //then
    await expect(createMedicalCase).rejects.toThrowError('Medical case already exists for this patient');
});

test('given: valid id for medicalCase, when: medicalCase is deleted, then: medicalCase is deleted', async () => {
    //given
    medicalCaseDb.getMedicalCaseById = mockMedicalCaseDbGetMedicalCaseByPatient.mockResolvedValue(existingMedicalCase);
    medicalCaseDb.deleteMedicalCase = createMedicalCaseMock;

    //when
    await medicalCaseService.deleteMedicalCase(1);

    //then
    expect(createMedicalCaseMock).toHaveBeenCalledTimes(1);
    expect(createMedicalCaseMock).toHaveBeenCalledWith(1);
});