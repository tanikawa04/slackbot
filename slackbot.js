'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var slack = require('@slack/client');

var RtmClient = slack.RtmClient;
var RTM_EVENTS = slack.RTM_EVENTS;

var Slackbot = function () {
    function Slackbot(config) {
        _classCallCheck(this, Slackbot);

        this._rtm = new RtmClient(config.token, config.option || { logLevel: 'debug' });
    }

    _createClass(Slackbot, [{
        key: 'start',
        value: function start() {
            this._rtm.start();
        }
    }, {
        key: 'addListener',
        value: function addListener(funcs) {
            var channels = Object.keys(funcs);
            this._rtm.on(RTM_EVENTS.MESSAGE, function (message) {
                if (channels.indexOf(message.channel) === -1) {
                    return;
                }
                funcs[message.channel](message);
            });
        }
    }, {
        key: 'sendMessage',
        value: function sendMessage(message, channel) {
            this._rtm.sendMessage(message, channel);
        }
    }]);

    return Slackbot;
}();

module.exports = Slackbot;
