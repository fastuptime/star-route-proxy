const starReverseProxy = require('./src/main.js');

let proxy = new starReverseProxy(
[
    {
        "domain": "fast.com",
        "target": "http://localhost:3000"
    },
    {
        "domain": "localhost.com",
        "target": "http://localhost:3000"
    },
]);

proxy.on('log', (log) => {
    console.log(`[${log.date}] ${log.domain} -> ${log.target} ${log.status} ${log.method} ${log.url}`);
});

proxy.on('error', (error) => {
    console.error(`[${error.date}] ${error.domain} -> ${error.target} ${error.status} ${error.method} ${error.url}`);
});


proxy.listen(80, () => {
    console.log('Proxy listening on port 80');
});

const express = require('express');
app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});