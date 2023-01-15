import {  Router } from 'express';
const {check,validationResult}=require('express-validator');
// START IMPORTS [DO NOT MODIFY COMMENT!]
import login  from  './login';
import signup  from  './signup';
// END IMPORTS [DO NOT MODIFY COMMENT!]

export default () => {
    const r = Router();

    // START ENDPOINTS [DO NOT MODIFY COMMENT!]
    r.post('/login', ...login);
    r.post('/signup', ...signup);
    // END ENDPOINTS [DO NOT MODIFY COMMENT!]

    return r;
}