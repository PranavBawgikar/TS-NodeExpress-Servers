import http, {Server, IncomingMessage, ServerResponse} from 'http';
import { StringUtil } from './util/StringUtil';
import { MathUtil } from './util/MathUtil';

const hostName:string = '127.0.0.1';
const port:number = 5000; 

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => {

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    let customerName:string = 'PranavB';
    let length:number = StringUtil.printLength(customerName);

    let randomString:string = 'Kocho Shinobu';
    let result:string = StringUtil.printTriangle(randomString);

    let randomNumber:number = 5;
    let itsResult:string = MathUtil.printMathTable(randomNumber);

    response.end(`<pre>${length}</pre>`);
});

server.listen(port, hostName, () => {
    console.log(`NodeJS Server is started at http://${hostName}:${port}.`);
});   