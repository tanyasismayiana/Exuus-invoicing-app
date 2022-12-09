import { Router, Request, Response, NextFunction } from 'express';
import Payment, { PaymentMap } from '../models/payments.model';
import database from '../instances/databases';

const getPayment = async (req: Request, res: Response, next: NextFunction) => {
    PaymentMap(database);
    const result = await Payment.findAll();
    res.status(200).json({ payments: result });
};

export default { getPayment };
