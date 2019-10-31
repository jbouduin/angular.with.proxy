# Template angular website with proxy configuration

This is my own very basic template for creating an Angular App which is consuming some API provided on the same host.

In a development environment, a proxy is used that redirects the API requests as defined in [proxy.conf.json](./proxy.conf.json).
In a deployed environment, this is to be configured in the webserver. I always use NGINX.

In case someone wonders why I have to `npx` everything: I always try to have the least possible npm packages globally installed.
