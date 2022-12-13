import { Router, Request, Response } from 'express';
import PaymentController from '../controllers/payment.controller';

const router = Router();

// GET - payment
router.get('/', PaymentController.getPayment);

// POST - payment
router.post('/post-payments', PaymentController.savePayments);

export default router;
