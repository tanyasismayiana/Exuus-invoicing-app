import { Router, Request, Response } from 'express';
import InvoiceController from '../controllers/invoice.controller';

const router = Router();

// GET - invoice
router.get('/', InvoiceController.getInvoice);
// POST - invoice
router.post('/post-invoice', InvoiceController.saveInvoice);

export default router;
