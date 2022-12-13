import { Router, Request, Response, NextFunction } from 'express';
import User, { UserMap } from '../models/user.model';
import database from '../instances/databases';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getUser = async (req: Request, res: Response, next: NextFunction) => {
    UserMap(database);
    const result = await User.findAll();
    res.status(200).json({ users: result });
};

const saveUser = async (req: Request, res: Response) => {
    let newUser = req.body as User;
    UserMap(database);
    const result = await User.create({ ...newUser });
    newUser = result.dataValues as User;
    res.status(201).json({ user: newUser });
}

const registerUser = async(req: Request, res: Response, next: NextFunction) => {
   const { name, email, password } = req.body;
   const data = {name, email, password: await bcrypt.hash(password, 10)};
   UserMap(database);
   const user = await User.create(data);

   if (user) {
     let token = jwt.sign({ id: user.id }, process.env.secretKey || "", {
       expiresIn: 1 * 24 * 60 * 60 * 1000,
     });
     res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
     console.log("user", JSON.stringify(user, null, 2));
     console.log(token);
     //send users details
     return res.status(201).json({token, data: user});
   } else {
     return res.status(409).json({message: "Details are not correct"});
   }
}

const loginUser = async(req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: {email} });
    if (user) {
        const isSame =  await bcrypt.compare(password, user.password || "");
        if (isSame) {
            let token = jwt.sign({ id: user.id }, process.env.secretKey || "", {expiresIn: '2h',});
            res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
            return res.status(200).json({token, data: user});
        } else {
            return res.status(401).send("Authentication failed");
        }
    } else {
       return res.status(401).send("Authentication failed");
    }
}

export default { getUser, saveUser, registerUser, loginUser };
