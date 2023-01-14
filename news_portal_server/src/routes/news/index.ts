import { Router } from 'express';

// START IMPORTS [DO NOT MODIFY COMMENT!]
import get from './get';
import getByFilter from './getByFilter';
import getLatestNews from './latestNews';
// END IMPORTS [DO NOT MODIFY COMMENT!]

export default () => {
    const r = Router();

    // START ENDPOINTS [DO NOT MODIFY COMMENT!]
    r.get('/', ...get);
    r.get('/getByFilter', ...getByFilter);
    r.get('/latestNews', ...getLatestNews);
    // END ENDPOINTS [DO NOT MODIFY COMMENT!]

    return r;
}