import { Router, Request, Response, NextFunction } from 'express';
import Payment, { PaymentMap } from '../models/payments.model';
import database from '../instances/databases';

const getPayment = async (req: Request, res: Response, next: NextFunction) => {
    PaymentMap(database);
    const result = await Payment.findAll();
    res.status(200).json({ payments: result });
};
const savePayments = async (req: Request, res: Response, next: NextFunction) => {
    let newItem = req.body as Payment;
    PaymentMap(database);
    const result = await Payment.create({ ...newItem });
    newItem = result.dataValues as Payment;
    res.status(201).json({ user: newItem });
};

const deletePayment  = async (req: Request, res: Response, next: NextFunction) => {
    let newItem = req.body as Payment;
    console.log("---" + JSON.stringify(req.body));
    PaymentMap(database);
    const result = await Payment.create({ ...newItem });
    newItem = result.dataValues as Payment;
    res.status(201).json({ user: newItem });
};
export default { getPayment, savePayments,deletePayment };
