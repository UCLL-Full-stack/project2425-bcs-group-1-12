import express, { NextFunction, Request, Response } from 'express';
import reportService from '../service/report.service';
import { ReportInput } from '../types';

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
 *         content:
 *           type: string
 *           description: Content of the report.
 */

const reportRouter = express.Router();

/**
 * @swagger
 * /our_work:
 *   post:
 *     summary: Create a new report (admin only).
 *     description: Creates a new report with a title, date, and content.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Annual Report"
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2024-10-10"
 *               content:
 *                 type: string
 *                 example: "This report contains information about..."
 *     responses:
 *       201:
 *         description: Report created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Report'
 *       403:
 *         description: Access denied
 *       400:
 *         description: Invalid input
 */
reportRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const input: ReportInput = req.body; // Ожидаем объект ReportInput в теле запроса
        const newReport = await reportService.addReport(input); // Создаем новый отчет, передавая input напрямую
        res.status(201).json(newReport); // Возвращаем созданный отчет
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
});

/**
 * @swagger
 * /our_work:
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
        res.status(200).json(reports); // Return 200 and JSON representation
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});



export { reportRouter };