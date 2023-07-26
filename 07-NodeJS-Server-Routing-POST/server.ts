import http, {Server, IncomingMessage, ServerResponse} from 'http';

const hostName:string = '127.0.0.1';
const port:number = 5000;

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    //URL POST
    let url = request.url;
    let method = request.method;
    if(url === '/user' && method === 'POST'){
        try{
            let body:any = '';
        request.on('data', (chunk) => {
            body += chunk;
        }).on('end', () => {
            let formData = JSON.parse(body);
            response.end(`${JSON.stringify(formData)}`);
        });
        } catch(error){
            console.error(error);
        }
    }

});

server.listen(port, hostName, () => {
    console.log(`NodeJS Server is started at http://${hostName}:${port}.`);
});   