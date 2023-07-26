import http, {Server, IncomingMessage, ServerResponse} from 'http';
import { apiRouter } from './router/apiRouter';

const hostName:string = '127.0.0.1';
const port:number = 5000;

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    //NodeJS Routing
    // let url:string | undefined = request.url;
    // let method:string | undefined = request.method;
    // let result:string = '';

    // if(url === '/' && method === 'GET'){
    //     result = `<h3>Welcome to NodeJS Server</h3>`;
    // } else if(url === '/about' && method === 'GET'){
    //     result = `<h3>About Page</h3>`;
    // } else if(url === '/services' && method === 'GET'){
    //     result = `<h3>Services Page</h3>`;
    // } else if(url === '/contact' && method === 'GET'){
    //     result = `<h3>Contact Page</h3>`;
    // } else {
    //     result = `<h3>404 - Page Not Found</h3>`;
    // }

    // response.end(`${result}`);

    apiRouter.mapRoutes(request, response);
});

server.listen(port, hostName, () => {
    console.log(`NodeJS Server is started at http://${hostName}:${port}.`);
});   