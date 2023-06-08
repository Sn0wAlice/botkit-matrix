
# botkit-matrix  
A Botkit connector for Matrix

### Install

```$ npm install botkit-matrix2```

### Usage

```JavaScript
let config = {
    'baseUrl': 'https://matrix.org',
    'botUserId': '@youruserid:matrix.org',
    'password': 'yourpassword',
    'localStorage': 'filepath'
};

require('botkit-matrix2').MatrixController(config)
.then((controller) => {
    // get pm messages
    controller.on('message_received', async function(data) {

        if(data.e.type === 'm.room.message' && data.e.content.msgtype === 'm.text') {
            console.log(data.e.content.body)

            if(data.e.content.body === 'ping') {
                data.middleware.send({
                    channel: data.e.room_id,
                    text: 'pong'
                });
            }
        }
       
    });
});
```

### Authors

- **Alice Sn0w** - *development* - [lukacssandor](https://github.com/Sn0wAlice)

based on: [this repos](https://github.com/frankgerhardt/botkit-matrix)

### License

This project is licensed under Apache License 2.0 - see the [LICENSE.md](./LICENSE) for details
