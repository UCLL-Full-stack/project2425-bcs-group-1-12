import express, { NextFunction, Request, Response } from 'express';
import medicalCaseService from '../service/medicalCase.service'
import { MedicalCaseInput } from '../types';

const medicalCaseRouter = express.Router();

medicalCaseRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const medicalCases = await medicalCaseService.getAllMedicalCases();
        res.status(200).json(medicalCases);
    } catch (error) {
        next(error)
    }
})

medicalCaseRouter.post('/', async (req: Request, res: Response) => {
    try {
        const medicalCase = <MedicalCaseInput>req.body;
        const result = await medicalCaseService.createMedicalCase(medicalCase);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ status: 'error', errorMessage: error.message });
    }
});

export {
    medicalCaseRouter
}