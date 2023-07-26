import express from 'express';

//Every middleware function contains three parameters- Request, Response and the Next Function (which transfers the data to the respective url)
let appLogger = (request:express.Request, response:express.Response, next:express.NextFunction) => {
    let url = request.url;
    let method = request.method;
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let result:string = `[${url}] [${method}] - [${date}] - [${time}]`;
    console.log(result);
    next(); //Very Important
};

export default appLogger;