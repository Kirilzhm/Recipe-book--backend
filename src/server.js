import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';

import { getEnvVar } from './utils/getEnvVar';

// middleweres
import notFountHandler from './middleweres/notFountHandler';
import errorHandler from './middleweres/errorHandler';


dotenv.config();

const PORT = Number(getEnvVar('PORT', '3000'));

export const server = () => {

    const app = express();

    app.use(express.json());

    app.use(cors());

    app.use(
        pino({
            transport: {
            target: 'pino-pretty',
            },
        }),
    );

    app.use((req, res, next) => {
    console.log(`Time: ${new Date().toLocaleString()}`);
    next();
    });

    app.get('/', (req, res) => {
    res.json({
        message: 'Hello World',
    });
    });

    app.use(notFountHandler);

    app.use(errorHandler);

    app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    });

};

