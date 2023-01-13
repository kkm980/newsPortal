import { Router } from 'express';

// START IMPORTS [DO NOT MODIFY COMMENT!]
import get from './get';
// import post from './post';
// END IMPORTS [DO NOT MODIFY COMMENT!]

export default () => {
    const r = Router();
    // START ENDPOINTS [DO NOT MODIFY COMMENT!]
    r.get('/', ...get);
    // r.post('/', ...post);
    // END ENDPOINTS [DO NOT MODIFY COMMENT!]
    return r;
}