import express from 'express';
import 'dotenv/config';

import { router } from './routes';

const server = express();
// Nesse meio, toda a config do servidor

server.use(express.json());

server.use(router);


export { server };
