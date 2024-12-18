/*import express, { Request, Response, NextFunction } from 'express'
import accountService from '../service/account.service'
import { AccountInput } from '../types';

const accountRouter = express.Router();

accountRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const account = <AccountInput>req.body;
        const result = await accountService.createAccount(account);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

export { accountRouter }*/