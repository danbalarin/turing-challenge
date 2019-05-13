const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

const nextConfig = {target: 'serverless'};

module.exports = withPlugins([
    [withSass]
], nextConfig)