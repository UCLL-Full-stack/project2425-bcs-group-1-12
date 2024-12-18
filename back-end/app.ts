import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
//import { accountRouter } from './controller/account.routes'
import { goalRouter } from './controller/goal.routes';

const app = express();
dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cors({ origin: 'http://localhost:8000' }));
app.use(bodyParser.json());



app.get('/status', (req, res) => {
    res.json({ message: 'Back-end is running...' });
});

//app.use('/accounts', accountRouter);

app.use('/goals', goalRouter);

const swaggerOpts = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Courses API',
            version: '1.0.0',
        },
    },
    apis: ['./controller/*.routes.ts'],
};
const swaggerSpec = swaggerJSDoc(swaggerOpts);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err); // Log the error for debugging (optional)

    res.status(400).json({
        status: 'application error',
        message: err.message || 'An unexpected error occurred', // Default message if no specific message is available
    });
});

app.listen(port || 3000, () => {
    console.log(`Back-end is running on port ${port}.`);
});
