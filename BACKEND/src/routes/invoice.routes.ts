import { Router, Request, Response } from 'express';
import invoiceController from '../controllers/invoice.controller';

const router = Router();

// GET - Invoice
router.get('/', invoiceController.getInvoice);

export default router;
