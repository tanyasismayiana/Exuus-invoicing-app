import { Router, Request, Response } from 'express';
import clientController from '../controllers/client.controller';

const router = Router();

// GET - clients
router.get('/', clientController.getClients);

export default router;
