import { Router, Request, Response } from 'express';
import User, { UserMap } from '../models/user.model';
import userController from '../controllers/user.controller';
import database from '../instances/databases';

const router = Router();

// GET - users
router.get('/', userController.getUser);

// GET - users/:id
router.get('/:id', async (req: Request, res: Response) => {
    UserMap(database);
    const id = Number(req.params.id);
    const result = await User.findByPk(id);
    res.status(200).json({ user: result });
});

// Register - users
router.post('/register', userController.registerUser);

// Login - users
router.post('/login', userController.loginUser);

export default router;
