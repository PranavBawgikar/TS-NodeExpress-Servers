import http, {Server, IncomingMessage, ServerResponse} from 'http';
import os from 'os';

const hostName:string = '127.0.0.1';
const port:number = 5000; 

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => { //Creating a new HTTP Server instance
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    //OS Module
    let osData = {
        totalMemory:os.totalmem(),
        freeMemory:os.freemem(),
        homedir:os.homedir(),
        computerName:os.hostname()
    };

    response.end(`<pre>${JSON.stringify(osData)}</pre>`);
});

server.listen(port, hostName, () => {
    console.log(`NodeJS Server is started at http://${hostName}:${port}.`);
});   