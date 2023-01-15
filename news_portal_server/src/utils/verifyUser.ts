import config from 'config';
import { Request, Response } from 'express';
const jwt = require('jsonwebtoken');
import User from '../models/user.model';

// this function is used to verify the jwt token in authorization header to know
// if the user is real
const verifyUser=async (token:string)=>{
    const SECRET_KEY = config.get<string>('SECRET_KEY');
    const user_found = await jwt.verify(token, SECRET_KEY);
    if (user_found.email) {
        const existingUser = await User.findOne({ email: user_found.email });
        if (existingUser) {
            return true;
        }
        else{
            return false;
        }
    }
    else {
        return false;
    }
}

export default verifyUser;
 