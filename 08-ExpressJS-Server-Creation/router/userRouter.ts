import express from 'express';

const userRouter:express.Router = express.Router();

userRouter.get('/', (request:express.Request, response:express.Response) => {
    response.status(200).send(`<h3>ExpressJS Started with User Router</h3>`);
});

userRouter.get('/test', (request:express.Request, response:express.Response) => {
    response.status(200).send(`<h3>ExpressJS Started with User Test</h3>`);
});

export default userRouter;