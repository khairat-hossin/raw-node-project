/**
 * @author [Khairat Hossin]
 * @email [khairat564@gmail.com]
 * @create date 2024-09-09 17:03:59
 * @modify date 2024-09-09 17:04:08
 * @desc [Node js start project]
 */

//dependencies
const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');

//module scaffolding
const app = {};

//configuration
app.config = {
    port: 3000,
};

//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });
};

//handle request response
app.handleReqRes = (req, res) => {
    //request handling
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();

        console.log(realData);
        res.end('Hello World');
    });
};

//start the server
app.createServer();
