# Star Route Proxy 🌟

Star Route Proxy is a Node.js module used to route incoming requests to different destinations. This module directs requests from one domain to a specific target while routing requests from other domains to different targets.

## Installation

You can add the Star Route Proxy module to your project using npm or yarn:

```bash
npm install star-route-proxy
```

or

```bash
yarn add star-route-proxy
```

## Usage

```javascript
const StarRouteProxy = require('star-route-proxy');

// Routing configurations
const routes = [
    { domain: 'example.com', target: 'http://localhost:3000' },
    { domain: 'api.example.com', target: 'http://localhost:4000' },
    // You can add more routing configurations
];

// Create an instance of StarRouteProxy
const proxy = new StarRouteProxy(routes);

// Listening for error and log events
proxy.on('error', (error) => {
    console.error('Error:', error);
});

proxy.on('log', (log) => {
    console.log('Log:', log);
});

// Listening on a specified port for the proxy
const PORT = 8080;
proxy.listen(PORT, () => {
    console.log(`Star Route Proxy is running. Port: ${PORT}`);
});
```

## Features

- Routes incoming requests to specified targets.
- Allows routing requests from different domains to different targets.
- Shows custom error pages when target or domain is not found.

## Logging and Error Handling

Star Route Proxy provides logging and error handling by listening to 'log' and 'error' events. Below is an example of how to listen to these events:

```javascript
// Listening for error and log events
proxy.on('error', (error) => {
    console.error('Error:', error);
});

proxy.on('log', (log) => {
    console.log('Log:', log);
});
```

## Contributing

Contributions of any kind are welcome! If you have any questions or feedback regarding the project, feel free to submit them on [GitHub](https://github.com/your-username/star-route-proxy).

## License

This project is licensed under the MIT License. For details, see the [LICENSE](LICENSE) file.

---