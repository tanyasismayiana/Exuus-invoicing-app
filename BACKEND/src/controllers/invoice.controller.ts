import { Request, Response, NextFunction } from 'express';
import Invoice, { InvoiceMap } from '../models/invoice.model';
import database from '../instances/databases';

const getInvoice = async (req: Request, res: Response, next: NextFunction) => {
    InvoiceMap(database);
    const result = await Invoice.findAll();
    res.status(200).json({ invoices: result });
};

const saveInvoice = async (req: Request, res: Response, next: NextFunction) => {
    let newItem = req.body as Invoice;
    InvoiceMap(database);
    const result = await Invoice.create({ ...newItem });
    newItem = result.dataValues as Invoice;
    res.status(201).json({ user: newItem });
};

const deleteInvoice  = async (req: Request, res: Response, next: NextFunction) => {
    let newItem = req.body as Invoice;
    console.log("---" + JSON.stringify(req.body));
    InvoiceMap(database);
    const result = await Invoice.create({ ...newItem });
    newItem = result.dataValues as Invoice;
    res.status(201).json({ user: newItem });
};

export default { getInvoice ,saveInvoice, deleteInvoice};
