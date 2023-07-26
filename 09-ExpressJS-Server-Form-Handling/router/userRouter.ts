import express from 'express';
import bcrypt from 'bcryptjs';

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

userRouter.post('/register', async(request:express.Request, response:express.Response) => {
    let { name, email, password } = request.body; //Receives form data from the client
    try{
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);
        response.status(200).json({
            user:{name, email, password},
            hashedPassword:hashedPassword
        });
    } catch(error){
        console.log(error);
    }
});

export default userRouter;