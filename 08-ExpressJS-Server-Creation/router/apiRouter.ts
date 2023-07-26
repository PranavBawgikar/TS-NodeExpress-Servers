import express from 'express';

const apiRouter:express.Router = express.Router();

apiRouter.get('/', (request:express.Request, response:express.Response) => {
    response.status(200).send(`<h3>ExpressJS Started with API Router</h3>`);
});

apiRouter.get('/test', (request:express.Request, response:express.Response) => {
    response.status(200).send(`<h3>ExpressJS Started with API Test</h3>`);
});

export default apiRouter;