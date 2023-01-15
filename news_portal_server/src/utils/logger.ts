// our own console component

import dayjs from 'dayjs';
import logger from 'pino';

const log=logger({
    transport: {
        target: 'pino-pretty',
    },
    base:{
        pid:false,
    },
    timeStamps:()=>`, 'time':'${dayjs().format()}'`
});

export default log;