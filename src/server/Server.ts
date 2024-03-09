import express from 'express';


const server = express();
// Nesse meio, toda a config do servidor

server.get('/', (_, res) => {

    return res.send('hello-world')
});


export { server }

