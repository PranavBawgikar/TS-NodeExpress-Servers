import http, {IncomingMessage, ServerResponse } from 'http';

export class apiRouter{
    public static mapRoutes(request:IncomingMessage, response:ServerResponse){
        let url:string | undefined = request.url;
        let method:string | undefined = request.method;
        let result:string = '';

        if(url === '/' && method === 'GET'){
            result = `<h3>Welcome to NodeJS Server</h3>`;
        } else if(url === '/about' && method === 'GET'){
            result = `<h3>About Page</h3>`;
        } else if(url === '/services' && method === 'GET'){
            result = `<h3>Services Page</h3>`;
        } else if(url === '/contact' && method === 'GET'){
            result = `<h3>Contact Page</h3>`;
        } else {
            result = `<h3>404 - Page Not Found</h3>`;
        }

        response.end(`${result}`);
    }
}