const Botkit = require('botkit/lib/core');
const matrixBot = require('./matrixBot');

try {
    console.log('Loading olm...');
    global.Olm = require('olm');
    console.log('==> DONE');
} catch (err) {
    console.log('Error loading olm: ' + err);
    process.exit(1);
}

const sdk = require('matrix-js-sdk');
const client = require('./matrixClient');
client.sdk = sdk;

try {
    console.log('Loading q...');
    var q = require('q');
    client.q = q;
    console.log('==> DONE');
} catch (err) {
    console.log('Error loading q: ' + err);
    process.exit(1);
}

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    var localStorage = new LocalStorage('./storage');
}

/**
 * This is the main function of the module. It creates a controller instance
 * which can be than used by Botkit bots.
 * Implicitly returns a Promise because it's an async function.
 *
 * @function MatrixController
 *
 * @param config - The config object
 * @returns {Promise<*>}
 */

exports.MatrixController = async function(config) {

    let matrix_controller = new Botkit.Botkit(config || {})


    await matrixBot.createMatrixClient(config, client, sdk, matrix_controller, localStorage);


    //console.log(matrix_controller.middleware)
    
    matrix_controller.middleware.spawn.use(function (bot, next) {
        console.log('SPAWN');
        console.log(bot);
        next();
    });
    
    // send message to matrix

    matrix_controller.middleware.send = (function (message) {
        console.log('SEND');
        console.log(message);
        client.sendBotNotice(message.channel, message.text);
    });
        

    return matrix_controller;
};
