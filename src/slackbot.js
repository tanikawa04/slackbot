'use strict';

const slack = require('@slack/client');

const RtmClient = slack.RtmClient;
const RTM_EVENTS = slack.RTM_EVENTS;

class Slackbot {
    constructor(config) {
        this._rtm = new RtmClient(
            config.token,
            config.option || {logLevel: 'debug'}
        );
    }

    start() {
        this._rtm.start();
    }

    addListener(funcs) {
        const channels = Object.keys(funcs);
        this._rtm.on(RTM_EVENTS.MESSAGE, (message) => {
            if (channels.indexOf(message.channel) === -1) {
                return;
            }
            funcs[message.channel](message);
        });
    }

    sendMessage(message, channel) {
        this._rtm.sendMessage(message, channel);
    }
}

module.exports = Slackbot;
