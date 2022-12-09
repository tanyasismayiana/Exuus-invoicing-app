import { Request, Response, NextFunction } from 'express';
import Invoice, { InvoiceMap } from '../models/invoice.model';
import database from '../instances/databases';

const getInvoice = async (req: Request, res: Response, next: NextFunction) => {
    InvoiceMap(database);
    const result = await Invoice.findAll();
    res.status(200).json({ invoices: result });
};

export default { getInvoice };
