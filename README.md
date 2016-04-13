# Slackbot

[node-slack-client](https://github.com/slackhq/node-slack-client) のラッパーです。
細かいことはいいから手っ取り早く Bot を作りたい人向けです。

## Usage

```
$ npm install tanikawa04/slackbot
```

```js
const Slackbot = require('slackbot');

const slackbot = new Slackbot({
    token: 'xxxxxxxxxx',    // Slack から取得したトークンを記述
    option: {
        logLevel: 'debug'
    }
});

// メッセージリスナー登録
slackbot.addListener({
    xxxxxx(message) {        // キー（メソッド名）には channel id を記述
        slackbot.sendMessage('');
    }
});

// listen start
slackbot.start();
```
