const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const http = require('http');

const mode_env = 'dev';

let port = 3000


while (port<=4000) { 
    http.get("http://localhost:"+port+"/ping",(res) => {
    res.setEncoding("utf8");   
    res.on('data', (chunk) => { 
        console.log("port found:"+port);
    });
    }).on('error', (e) => {​​​​
});
    
    port=port+1;
}