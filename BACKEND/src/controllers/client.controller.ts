import { Router, Request, Response, NextFunction } from 'express';
import Client, { ClientMap } from '../models/client.model';
import database from '../instances/databases';

const getClients = async (req: Request, res: Response, next: NextFunction) => {
    ClientMap(database);
    const result = await Client.findAll();
    res.status(200).json({ clients: result });
};

export default { getClients };
