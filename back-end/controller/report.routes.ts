/**
 * @swagger
 * components:
 *   schemas:
 *     Report:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the report.
 *         title:
 *           type: string
 *           description: Title of the report.
 *         date:
 *           type: string
 *           format: date
 *           description: Date of the report.
 *         summary:
 *           type: string
 *           description: A brief summary of the report.
 *         file:
 *           type: string
 *           description: URL or path to the report file.
 */

import express, { Request, Response, NextFunction } from 'express';
import reportService from '../service/report.service';
import { ReportInput } from '../types';

const reportRouter = express.Router();

/**
 * @swagger
 * /reports:
 *   get:
 *     summary: Get a list of all reports.
 *     responses:
 *       200:
 *         description: A list of reports
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Report'
 */
reportRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reports = await reportService.getAllReports();
        res.status(200).json(reports);
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * /reports/{id}:
 *   get:
 *     summary: Get a report by ID
 *     description: Retrieve a specific report by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The report ID
 *     responses:
 *       200:
 *         description: A report object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Report'
 *       404:
 *         description: Report not found
 */
reportRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const report = await reportService.getReportById(id);
        res.status(200).json(report);
    } catch (error) {
        res.status(404).json({ message: (error as Error).message });
    }
});

/**
 * @swagger
 * /reports:
 *   post:
 *     summary: Add a new report
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Report'
 *           example:
 *             title: "Annual Financial Report"
 *             date: "2024-12-19"
 *             summary: "A detailed annual financial report."
 *             file: "path/to/file.pdf"
 *     responses:
 *       201:
 *         description: Report added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Report'
 */
reportRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reportData: ReportInput = req.body;
        const newReport = await reportService.addReport(reportData);
        res.status(201).json(newReport);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
});

/**
 * @swagger
 * /reports/{id}:
 *   delete:
 *     summary: Delete a report by ID
 *     description: Delete a specific report by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The report ID
 *     responses:
 *       200:
 *         description: Report deleted successfully
 *       404:
 *         description: Report not found
 */
reportRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        await reportService.deleteReportById(id);
        res.status(200).json({ message: `Report with ID ${id} deleted successfully.` });
    } catch (error) {
        res.status(404).json({ message: (error as Error).message });
    }
});

export { reportRouter };