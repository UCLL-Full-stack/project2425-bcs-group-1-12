import patientDb from "../../repository/patient.db";
import { Patient } from "../../model/patient";
import { PatientInput } from "../../types";
import { create } from "domain";
import patientService from "../../service/patient.service";

const existingPatient = new Patient({
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    gender: 'M',
});


const firstName = 'John';
const lastName = 'Doe';
const age = 20;
const gender = 'M';

let createPatientMock = jest.fn();

let mockPatientDBGetPatientByFirstAndLastAndAge: jest.Mock;
let mockPatientDBGetPatientById: jest.Mock;

beforeEach(() => {
    createPatientMock = jest.fn();
    mockPatientDBGetPatientByFirstAndLastAndAge = jest.fn();
    mockPatientDBGetPatientById = jest.fn();

    createPatientMock = jest.fn();
});

afterEach(() => {
    jest.clearAllMocks();
});

test('given: valid values for patient, when: new patient is created, then: patient is created', async () => {
    // given
    patientDb.getPatientByFirstAndLastAndAge = mockPatientDBGetPatientByFirstAndLastAndAge.mockResolvedValue(null);
    patientDb.createPatient = createPatientMock;

    // when
    await patientService.createPatient({ firstName, lastName, age, gender });

    // then
    expect(createPatientMock).toHaveBeenCalledTimes(1);
    expect(createPatientMock).toHaveBeenCalledWith({
        firstName,
        lastName,
        age,
        gender,
    });
});

test('given: valid id for patient, when: patient is deleted, then: patient is deleted', async () => {
    // given
    patientDb.getPatientById = mockPatientDBGetPatientByFirstAndLastAndAge.mockResolvedValue(existingPatient);
    patientDb.deletePatientById = createPatientMock;

    // when
    await patientService.deletePatient(1);

    // then
    expect(createPatientMock).toHaveBeenCalledTimes(1);
    expect(createPatientMock).toHaveBeenCalledWith(1);
    expect(mockPatientDBGetPatientById) === null;
});
