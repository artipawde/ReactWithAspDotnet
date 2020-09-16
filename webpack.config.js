const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '');
const BUILD_DIR = path.resolve(__dirname,'build');

// Simple config obj which has two attribute one is entry and another is output
const config = {
    entry: APP_DIR + '/HelloWorld.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    }
};

module.exports = config;