import express from 'express';

const userRouter:express.Router = express.Router();

userRouter.get('/', (request:express.Request, response:express.Response) => {
    response.status(200).send(`<h3>ExpressJS Started with User Router</h3>`);
});

//@usage: To check form data
//@url: https://127.0.0.1:5000/user/login
//@method: POST
//@fields: Providing `name` and `password`
//@access: PUBLIC

userRouter.post('/login', (request:express.Request, response:express.Response) => {
    let formData = request.body; //Receives form data from the client
    response.status(200).json({
        msg:'Data is received',
        formData:formData
    });
});

export default userRouter;