 // Route to login for existing user

// ***** // import of dependencies // ***** //
const bcrypt = require('bcrypt');
import config from 'config';
import { Request, Response } from 'express';
const jwt = require('jsonwebtoken');
// ***** // end of import of dependencies // ***** //

// ***** // import of modules // ***** //
import attempt from '../../middleware/attempt';
import User from '../../models/user.model';
// ***** // end of import of dependencies // ***** //

export default [

    // Check for user
    // decrypt and compare the password
    // generate jwt token
    attempt(async (req: Request, res: Response) => {
        try {
            //1. if any of required field not present throw error, this is 3rd level of defending 
            if ((!req.body.email) || (!req.body.password)) {
                return res.status(500)
                    .json({ message: 'One or more required fields are not present'});
            }
            const { email, password } = req.body;
            const existingUser = await User.findOne({ email: email });

            if (!existingUser) {
                return res.status(404).json({ message: 'User doesnot exist'});
            }
            else {
                //find the decrypt of uer password stored on DB
                const matchPassword = await bcrypt.compare(password, existingUser.password);
                if (!matchPassword) {
                    return res.status(400).json({ message: 'Email or password is wrong'});
                }
                else {
                    //IF USER EXISTS AND ENTERED PASSWORD MATCHES THE DECRYPT PASSWORD STORED ON db,
                    //  generate jwt session for user and log him in
                    const SECRET_KEY = config.get<string>('SECRET_KEY');
                    const jwtToken = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);
                    return res.status(201).json({ user: existingUser, jwtToken: jwtToken });
                }

            }
        }
        catch (err) {
            res.status(500).json({ message: 'something went wrong' });
        }

    })
];