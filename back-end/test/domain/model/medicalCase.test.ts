import { set } from "date-fns";
import { MedicalCase } from "../../../model/medicalCase";
import { Patient } from "../../../model/patient";
import { Decimal } from "@prisma/client/runtime/library";

const open = set(new Date(), { hours: 8, minutes: 30 });
const close = set(new Date(), { hours: 10, minutes: 30 });

const patient = new Patient({
    firstName: 'Jane',
    lastName: 'Doe',
    age: 15,
    gender: 'F',
    illness: 'Measles',
    status: 'In treatment'
})
const description = 'Patient has a fever and a rash. Suspected measles.';
const costBDT = new Decimal(5000);

test('given: valid values for medicalCase: when: new medicalCase is created: then: medicalCase is created', () => {
    // given

    // when
    const medicalCase = new MedicalCase({ patient, description, open, close, costBDT });

    // then
    expect(medicalCase.patient).toEqual(patient);
    expect(medicalCase.description).toEqual(description);
    expect(medicalCase.costBDT).toEqual(costBDT);
});

test('given: end date before start date: when: new medicalCase is created: then: error is thrown', () => {
    // given
    const close = set(open, { hours: 7 });

    // when
    const medicalCase = () => new MedicalCase({ patient, description, open, close, costBDT });

    // then
    expect(medicalCase).toThrowError('Close date must be after open date');
});