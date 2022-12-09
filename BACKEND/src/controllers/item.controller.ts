import { Router, Request, Response, NextFunction } from 'express';
import Item, { ItemMap } from '../models/item.model';
import database from '../instances/databases';

const getItems = async (req: Request, res: Response, next: NextFunction) => {
    ItemMap(database);
    const result = await Item.findAll();
    res.status(200).json({ items: result });
};

export default { getItems };
