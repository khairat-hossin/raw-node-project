/**
 * @author [Khairat Hossin]
 * @email [khairat564@gmail.com]
 * @create date 2024-09-09 17:03:59
 * @modify date 2024-09-09 17:04:08
 * @desc [Node js start project]
 */

//dependencies
const http = require('http');

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
    res.end('Hello World');
};


//start the server
app.createServer();
