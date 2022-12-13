import { Router, Request, Response, NextFunction } from 'express';
import Item, { ItemMap } from '../models/item.model';
import database from '../instances/databases';

const getItems = async (req: Request, res: Response, next: NextFunction) => {
    ItemMap(database);
    const result = await Item.findAll();
    res.status(200).json({ items: result });
};

const saveItem = async (req: Request, res: Response, next: NextFunction) => {
    let newItem = req.body as Item;
    ItemMap(database);
    const result = await Item.create({ ...newItem });
    newItem = result.dataValues as Item;
    res.status(201).json({ user: newItem });
};

const deleteItem  = async (req: Request, res: Response, next: NextFunction) => {
    let newItem = req.body as Item;
    console.log("---" + JSON.stringify(req.body));
    ItemMap(database);
    const result = await Item.create({ ...newItem });
    newItem = result.dataValues as Item;
    res.status(201).json({ user: newItem });
};

export default { getItems, saveItem ,deleteItem};
