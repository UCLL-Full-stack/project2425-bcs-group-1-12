import { set } from "date-fns";
import { Patient } from "../../../model/patient";

const firstName = 'Jane';
const lastName = 'Doe';
const age = 15;
const gender = 'F';
const illness = 'Measles';
const status = 'In treatment';

const existingPatient = new Patient({
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    gender: 'M',
});

test('given: valid values for patient, when: new patient is created, then: patient is created', () => {
    // given

    // when
    const patient = new Patient({
        firstName,
        lastName,
        age,
        gender,
        illness,
        status
    });

    // then
    expect(patient.firstName).toEqual(firstName);
    expect(patient.lastName).toEqual(lastName);
    expect(patient.age).toEqual(age);
    expect(patient.gender).toEqual(gender);
    expect(patient.illness).toEqual(illness);
    expect(patient.status).toEqual(status);
});