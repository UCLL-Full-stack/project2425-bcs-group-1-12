import * as dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { accountRouter } from './controller/account.routes'
import { medicalCaseRouter } from './controller/medicalCase.routes'
import { patientRouter } from './controller/patient.routes';

const app = express();
dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cors({ origin: 'http://localhost:8000' }));
app.use(bodyParser.json());


app.use('/cases', medicalCaseRouter);
app.use('/accounts', accountRouter);
app.use('/patients', patientRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({ status: 'application error', message: err.message })
})

app.get('/status', (req, res) => {
    res.json({ message: 'Back-end is running...' });
});

app.listen(port || 3000, () => {
    console.log(`Back-end is running on port ${port}.`);
});
