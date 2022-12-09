import { Router, Request, Response } from 'express';
import paymentController from '../controllers/payment.controller';

const router = Router();

// GET - payment
router.get('/', paymentController.getPayment);

export default router;
