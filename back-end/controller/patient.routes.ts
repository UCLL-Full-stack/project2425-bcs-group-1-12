import express, { NextFunction, Request, Response } from 'express';
import patientService from '../service/patient.service';
import { PatientInput } from '../types';

const patientRouter = express.Router()

patientRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const patients = await patientService.getAllPatients();
        res.status(200).json(patients);
    } catch (error) {
        next(error);
    }
});

patientRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const patient = <PatientInput>req.body;
        const result = await patientService.createPatient(patient);
        res.status(200).json(result);
    }
})

export {
    patientRouter
}