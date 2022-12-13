import { Router, Request, Response, NextFunction } from 'express';
import Client, { ClientMap } from '../models/client.model';
import database from '../instances/databases';

const getClients = async (req: Request, res: Response, next: NextFunction) => {
    ClientMap(database);
    const result = await Client.findAll();
    res.status(200).json({ clients: result });
};

const saveClient = async (req: Request, res: Response, next: NextFunction) => {
    let newItem = req.body as Client;
    ClientMap(database);
    const result = await Client.create({ ...newItem });
    newItem = result.dataValues as Client;
    res.status(201).json({ user: newItem });
};

export default { getClients, saveClient };
