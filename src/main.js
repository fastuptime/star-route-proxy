const express = require('express');
const { createProxyMiddleware, fixRequestBody } = require('http-proxy-middleware');
const eventEmitter = require('events');
const bodyParser = require('body-parser');

class starReverseProxy extends eventEmitter {
    constructor(routes) {
        super();
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.routes = routes;
        
        this.app.use((req, res) => {
            const route = this.routes.find((route) => route.domain === req.hostname);
            if (!route) {
                this.emit('error', {
                    date: new Date(),
                    domain: req.hostname,
                    target: null,
                    status: 404,
                    method: req.method,
                    url: req.url,
                });
                return res.send(`<center><h1>Star Reverse Proxy</h1><br><h2>Domain not found</h2><br><a href="https://github.com/fastuptime/star-reverse-proxy"> Documentation </a></center>`);
            }
            const target = route.target;
            if (!target) {
                this.emit('error', {
                    date: new Date(),
                    domain: req.hostname,
                    target: target,
                    status: 404,
                    method: req.method,
                    url: req.url,
                });
                return res.send(`<center><h1>Star Reverse Proxy</h1><br><h2>Target not found</h2><br><a href="https://github.com/fastuptime/star-reverse-proxy"> Documentation </a></center>`);
            }

            this.emit('log', {
                date: new Date(),
                domain: req.hostname,
                target: target,
                status: res.statusCode,
                method: req.method,
                url: req.url,
            });

            return createProxyMiddleware({ target: target, changeOrigin: true, onProxyReq: fixRequestBody, })(req, res);
        });

    }
    listen(port, callback) {
        this.app.listen(port, callback);
    }
}

module.exports = starReverseProxy;