//basic NodeJS server using the http module to handle HTTP requests and responses
import http, {Server, IncomingMessage, ServerResponse} from 'http';

const hostName:string = '127.0.0.1'; //Represents the IP address of the server
//In this case, it is set to the loopback address, meaning the server will listen for connections on the local machine
const port:number = 5000; //The server will listen for incoming connections on this port

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => { //Creating a new HTTP Server instance
    //It takes a callback function as an argument, which will be executed whenever a request is made to the server
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(`<h3>Welcome to NodeJS Server</h3>`);
});

server.listen(port, hostName, () => {
    console.log(`NodeJS Server is started at http://${hostName}:${port}.`);
});   