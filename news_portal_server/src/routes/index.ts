import { Express, Request, Response } from 'express';

// START IMPORTS [DO NOT MODIFY COMMENT!]
import news from './news';
import weather from './weather';
// END IMPORTS [CIO:DO NOT MODIFY COMMENT!]

export default (api: Express) => {
    // START RESOURCES [DO NOT MODIFY COMMENT!]
    api.use('/news', news());
	api.use('/weather', weather());
	// END RESOURCES [DO NOT MODIFY COMMENT!]

    // Server_check
    api.get('/', (req: Request, res: Response) => res.status(200)
       .json({ message: "Hello from the news portal api." }));
}