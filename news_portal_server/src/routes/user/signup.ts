const bcrypt = require('bcrypt');
import { Request, Response } from 'express';

import attempt from '../../middleware/attempt';
import User from '../../models/user.model';
import logger  from  '../../utils/logger';

export default [

    // Check for user
    // hash the password
    // create new user
    attempt(async (req: Request, res: Response) => {
        if ((!req.body.email) || (!req.body.password)) {
            return res.status(500)
                .json({ message: 'One or more required fields are not present' });
        }
        const { email, password } = req.body;
        try {
            const existingUser = await User.findOne({ email: email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
            else {
                const hashedPassword = await bcrypt.hash(password, 10);
                const result = await User.create({
                    email: email,
                    password: hashedPassword
                });
                return res.status(200).json({ user: result });
            }
        }
        catch (err) {
            res.status(500).json({ message: 'something went wrong' });
        }

    })
];