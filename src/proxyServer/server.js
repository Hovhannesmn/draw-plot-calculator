const proxy = require('http-proxy-middleware');
const config = require('./config');
const { proxyUrl, apiPath } = config;

const target = proxyUrl.endsWith("/") ? proxyUrl.substring(0, proxyUrl.length - 1) : proxyUrl;

let cookie;
module.exports = app => {
	/* app is middleware for change front url from backend
		url http://localhost:3000/api/* -> http://www.example.org/api/*
		this middleware call in all requests
	*/

	app.use(
		apiPath,
		proxy({
			target,
			secure: false, // disable SSL verification
			changeOrigin: true,
		}),
	);
};