import express from 'express';
import { body, validationResult } from 'express-validator';

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

userRouter.post('/register', [
    body('name').not().isEmpty().withMessage('Username must be provided'),
    body('email').not().isEmail().withMessage('Input email in proper email format'),
    body('password').not().isLength({min:8}).withMessage('Password must be atleast 8 characters')
], (request:express.Request, response:express.Response) => {
    const errors = validationResult(request);

    if(!errors.isEmpty()){
        return response.status(400).json({errors:errors.array()});
    }

    let { name, email, password } = request.body; //Receives form data from the client
    try{
        
        response.status(200).json({
            user:{name, email, password},
        });
    } catch(error){
        console.log(error);
    }
});

export default userRouter;