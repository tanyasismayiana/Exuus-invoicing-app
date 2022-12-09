import { Router, Request, Response, NextFunction } from 'express';
import User, { UserMap } from '../models/user.model';
import database from '../instances/databases';

const getUser = async (req: Request, res: Response, next: NextFunction) => {
    UserMap(database);
    const result = await User.findAll();
    res.status(200).json({ users: result });
};

export default { getUser };
