import { Router, Request, Response } from 'express';
import itemController from '../controllers/item.controller';

const router = Router();

// GET - items
router.get('/', itemController.getItems);

export default router;
