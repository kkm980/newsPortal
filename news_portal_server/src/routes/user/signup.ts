 // Route to signup for new user

// ***** // import of dependencies // ***** //
const bcrypt = require('bcrypt');
import { Request, Response } from 'express';
// ***** // end of import of dependencies // ***** //

// ***** // import of modules // ***** //
import attempt from '../../middleware/attempt';
import User from '../../models/user.model';
import logger  from  '../../utils/logger';
import isEmailValid from '../../utils/emailValidator';
import passwordValid from '../../utils/passwordRange';
// ***** // end of import of dependencies // ***** //

export default [

    // Check for user
    // hash the password
    // create new user
    attempt(async (req: Request, res: Response) => {
        // if password, email not present, send error message
        if ((!req.body.email) || (!req.body.password)) {
            return res.status(500)
                .json({ message: 'One or more required fields are not present' });
        }

        // check for proper email types and password types
        const { email, password } = req.body;
        const {valid, reason, validators}  = await isEmailValid(email);

        if (!valid) {
            return res.status(400).json({
                message: 'Please provide a valid email address'
            })
        }
        if (!passwordValid(password)) {
            return res.status(400).json({
                message: 'Password is not proper'
            })
        }
        
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