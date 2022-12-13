import { Router, Request, Response } from 'express';
import clientController from '../controllers/client.controller';

const router = Router();

// GET - clients
router.get('/', clientController.getClients);
// POST - items
router.post('/post-client', clientController.saveClient);

export default router;
