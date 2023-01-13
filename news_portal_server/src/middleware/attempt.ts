import { Request, Response } from 'express';
import { BSONTypeError } from 'bson';

export default (func: Function) => async (req: Request, res: Response) => {
    try {
        await func(req, res);
    }
    catch (err: any) {

        if (err instanceof BSONTypeError) {
            return res.status(400).json({
                message: "Resource identifiers must be strings of 24 hex characters",
                err: err
            })
        }
        else {
            return res.status(500).json({
                message: "Oops! Something went wrong.",
                err: err
            })
        }
    }
}