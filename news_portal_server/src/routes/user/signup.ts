 // Route to signup for new user

// ***** // import of dependencies // ***** //
const bcrypt = require('bcrypt');
import { Request, Response } from 'express';
// ***** // end of import of dependencies // ***** //

// ***** // import of modules // ***** //
import attempt from '../../middleware/attempt';
import User from '../../models/user.model';
import logger  from  '../../utils/logger';
// ***** // end of import of dependencies // ***** //

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
        //if user exists with given email, throw error
        try {
            const existingUser = await User.findOne({ email: email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
            else {
                //if all required fields are present and the user is new, encrypt his password
                // before creating new user so that if database gets compromised, the password is not vulnerable
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