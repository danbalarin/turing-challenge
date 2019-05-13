const path = require('path');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

const absolutePaths = ['components', 'styles'];

const nextConfig = {
    target: 'serverless',
    webpack (config, options) {
        absolutePaths.forEach(val => {
            config.resolve.alias[val] = path.join(__dirname, val)
        })
        return config
    }
};

module.exports = withPlugins([
    [withSass]
], nextConfig)