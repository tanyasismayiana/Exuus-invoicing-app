import { Router, Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";
import User from '../models/user.model';

interface JwtPayload {
  id: string;
}

const validateEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      //checking if email already exist
      const emailcheck = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      //if email exist in the database respond with a status of 409
      if (emailcheck) {
        return res.status(409).json({ message: "Authentication failed" });
      }
      return next();
    } catch (error) {
      console.log('ahana',error);
    }
};

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers["authorization" || "Authorization"];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized Access" });
    }

    const verify = jwt.verify(token, process.env.secretKey!) as JwtPayload;

    const findUser = await User.findOne({ where: { id: verify.id } });

    if (!findUser) {
      return res.status(401).json({ message: "Unauthorized Access" });
    }
    req.user = findUser;
    return next();
    
  } catch (error) {
    return next(error);
  }
};

//exporting module
export default { validateEmail, isAuth };