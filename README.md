# slackbot

[node-slack-client](https://github.com/slackhq/node-slack-client) のラッパーです。
細かいことを気にせず、手っ取り早く Bot を作りたい人向けです。

## Usage

```
$ npm install tanikawa04/slackbot
```

```js
const Slackbot = require('slackbot');

const slackbot = new Slackbot({
    token: 'xoxb-xxxxxxx',  // Slack から取得したトークンを記述
    option: {
        logLevel: 'debug'
    }
});

// channel にポストされたメッセージに対する処理を登録
slackbot.addHandler({
    C0XXXXX(message) {      // キー（メソッド名）には channel id を記述
        slackbot.sendMessage('message', 'C0XXXXX');
    }
});

// listen 開始
slackbot.start();
```
