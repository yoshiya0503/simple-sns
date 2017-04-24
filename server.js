/**
 * @fileoverview express_api_server
 * @name server.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const server = express();

class Feed {
  constructor() {
    this.list = [
      {
        id: 1,
        title: 'this is the one',
        body: 'this is the one of the feeds id = 1, have a nice day',
        user: {
          name: 'yoshiya ito',
          image: 'https://pbs.twimg.com/profile_images/755059325396094976/Vzvbd-6X_400x400.jpg',
        },
      },
      {
        id: 2,
        title: 'this is the two',
        body: 'this is the one of the feeds id = 2, have a nice day',
        user: {
          name: 'yoshiya ito',
          image: 'https://pbs.twimg.com/profile_images/755059325396094976/Vzvbd-6X_400x400.jpg',
        },
      },
      {
        id: 3,
        title: 'this is third topic',
        body: 'hello world',
        user: {
          id: 3,
          name: 'user3',
          image: 'https://pbs.twimg.com/profile_images/755059325396094976/Vzvbd-6X_400x400.jpg',
        },
      },
    ];
  }

  fetch() {
    return this.list;
  }

  get(id) {
    return _.find(this.list, (data) => {
      console.log(id);
      return data.id === id;
    });
  }
  update(id, newData) {
    this.list[id] = newData;
  }
  destroy(id) {
    this.list = _.reject(this.list, (data) => {
      console.log(id);
      return data.id === id;
    });
  }
}

class Profile {
  constructor() {
    this.data = {
      id: 1,
      name: 'yoshiya ito',
      profile: '六畳一間の世界征服',
      image: 'https://pbs.twimg.com/profile_images/755059325396094976/Vzvbd-6X_400x400.jpg',
    };
    this.list = [
      {
        id: 1,
        name: 'yoshiya ito',
        profile: '六畳一間の世界征服',
        sex: '男性',
        age: '20代',
        referrer: 'facebook',
        image: 'https://pbs.twimg.com/profile_images/755059325396094976/Vzvbd-6X_reasonably_small.jpg',
      },
      {
        id: 2,
        name: 'charlie',
        profile: '六畳一間の世界征服',
        sex: '男性',
        age: '20代',
        referrer: 'instagram',
        image: 'https://pbs.twimg.com/profile_images/812541755849469952/lqpizrPO_reasonably_small.jpg',
      },
      {
        id: 3,
        name: 'ほげ',
        profile: '六畳一間の世界征服',
        sex: '女性',
        age: '20代',
        referrer: 'twitter',
        image: 'https://pbs.twimg.com/profile_images/848946777973600256/Y5pVMGcL_reasonably_small.jpg',
      },
    ];
  }

  fetch() {
    return this.data;
  }

  fetchList() {
    return this.list;
  }
}

var feed = new Feed();
var profile = new Profile();

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Token, X-Mg-Token, Accept');
  next();
});
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(morgan({ format: 'dev', immediate: true }));

server.post('/api/v1/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (email === 'myon53@gmail.com' && password === 'password') {
    return res.json({ token: 'this_is_token' });
  }
  return res.send(401, {});
});

// CRUD of profile
server.get('/api/v1/profile', (req, res) => {
  const token = req.get('TOKEN');
  console.log(token);
  if (token !== 'this_is_token') {
    return res.send(401, {});
  }
  setTimeout(() => {
    return res.json(profile.fetch());
  }, 1000);
});

server.get('/api/v1/demographics', (req, res) => {
  profile.list = _.concat(profile.list, _.sample(profile.list));
  return res.json(profile.fetchList());
});

// CRUD of feeds
server.get('/api/v1/feeds', (req, res) => {
  const token = req.get('TOKEN');
  console.log(JSON.stringify(token));
  if (token !== 'this_is_token') {
    return res.send(401, {});
  }
  res.json(feed.fetch());
});
server.get('/api/v1/feeds/:id', (req, res) => {
  res.json(feed.show(req.params.id));
});
server.post('/api/v1/feeds/:id', (req, res) => {
  res.json(feed.show(req.params.id));
});
server.put('/api/v1/feeds/:id', (req, res) => {
  res.json(feed.show(req.params.id));
});
server.delete('/api/v1/feeds/:id', (req, res) => {
  res.json(feed.show(req.params.id));
});

server.listen(3000);
