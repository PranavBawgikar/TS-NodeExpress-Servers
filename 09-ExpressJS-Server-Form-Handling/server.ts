import express from 'express';
import userRouter from './router/userRouter';

const app:express.Application = express();
const hostName:string = '127.0.0.1';
const port:number = 5000;

//Configuring Express to receive form data
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (request:express.Request, response:express.Response) => {
    response.status(200).send(`<h3>ExpressJS Started</h3>`);
});

//Router Configuration
app.use('/user', userRouter);

app.listen(port, hostName, () => {
    console.log(`Express Server has started at https://${hostName}:${port}`);
})