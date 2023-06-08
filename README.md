
# botkit-matrix  
A Botkit connector for Matrix

### Install

```$ npm install botkit-matrix```

### Usage

```JavaScript
let config = {
    'baseUrl': 'https://matrix.org',
    'botUserId': '@youruserid:matrix.org',
    'password': 'yourpassword',
    'localStorage': 'filepath'
};

require('botkit-matrix').MatrixController(config)
.then((controller) => {

    controller.hears(['hi', 'hello'], 'message_received', function (bot, message) {
        bot.reply(message, "Hello, world!");
    });
});
```

You can get a sample bot at [botkit-matrix-sample](https://github.com/frankgerhardt/botkit-matrix-sample) 

For more features see [Botkit Core](https://botkit.ai/docs/core.html)

### Authors

- **Frank Gerhardt** - *management* - [frankgerhardt](https://github.com/frankgerhardt)
- **Nándor Póka** - *management* - [nandor-poka](https://github.com/nandor-poka)
- **Dániel Sabic** - *development* - [SabicDaniel](https://github.com/SabicDaniel)
- **Sándor Lukács** - *development* - [Sn0wAlice](https://github.com/lukacssandor)
- **Alice Sn0w** - *development* - [lukacssandor](https://github.com/Sn0wAlice)

### License

This project is licensed under Apache License 2.0 - see the [LICENSE.md](./LICENSE) for details
