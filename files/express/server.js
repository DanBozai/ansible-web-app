const express = require('express');
const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');
const http = require('http');

const configFile= '/etc/express.conf';
const fileContent= fs.readFileSync(configFile,'utf8');
const config = yaml.load(fileContent);

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.get('/', (req, res) => {
    res.json({ msg: "node1" });
});
if(config){
    const port = config.port;
    const server = http.createServer(app);
    
    server.listen(port, () => {
        console.log(`Express app listening at http://localhost:${port}`);
    });
    
}
