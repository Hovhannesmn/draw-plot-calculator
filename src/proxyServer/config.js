const env = process.env.NODE_ENV;
const proxyUrl = env === 'production' ? 'https://wolfram-proxy.herokuapp.com/v1/wolfram-api-chunk-data' : 'http://localhost:4000/';
const apiPath = '/v1/*';

module.exports = {
	proxyUrl,
	apiPath,
};
