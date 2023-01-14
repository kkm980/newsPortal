const bcrypt = require('bcrypt');
import config from 'config';
import { Request, Response } from 'express';
const jwt = require('jsonwebtoken');

import attempt from '../../middleware/attempt';
import User from '../../models/user.model';

export default [

    // Check for user
    // decrypt and compare the password
    // generate jwt token
    attempt(async (req: Request, res: Response) => {
        if ((!req.body.email) || (!req.body.password)) {
            return res.status(500)
                .json({ message: 'One or more required fields are not present'});
        }
        const { email, password } = req.body;
        try {
            const existingUser = await User.findOne({ email: email });
            if (!existingUser) {
                return res.status(404).json({ message: 'User doesnot exist'});
            }
            else {
                const matchPassword = await bcrypt.compare(password, existingUser.password);
                if (!matchPassword) {
                    return res.status(400).json({ mesage: 'Email or password is wrong'});
                }
                else {
                    const SECRET_KEY = config.get<string>('SECRET_KEY');
                    const jwtToken = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);
                    return res.status(201).json({ user: existingUser, jwtToke: jwtToken });
                }

            }
        }
        catch (err) {
            res.status(500).json({ message: 'something went wrong' });
        }

    })
];