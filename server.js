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
        title: 'this is first topic',
        body: 'hello world',
        user: {
          id: 1,
          name: 'user1',
          img: 'image',
        },
      },
      {
        id: 2,
        title: 'this is second topic',
        body: 'hello world',
        user: {
          id: 2,
          name: 'user2',
          img: 'image',
        },
      },
      {
        id: 3,
        title: 'this is third topic',
        body: 'hello world',
        user: {
          id: 3,
          name: 'user3',
          img: 'image',
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

var feed = new Feed();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(morgan({ format: 'dev', immediate: true }));

server.get('/', (req, res) => {
  res.json({});
});
// CRUD of feeds
server.get('/api/v1/feed', (req, res) => {
  res.json(feed.fetch());
});
server.get('/api/v1/feed/:id', (req, res) => {
  res.json(feed.show(req.params.id));
});
server.post('/api/v1/feed/:id', (req, res) => {
  res.json(feed.show(req.params.id));
});
server.put('/api/v1/feed/:id', (req, res) => {
  res.json(feed.show(req.params.id));
});
server.delete('/api/v1/feed/:id', (req, res) => {
  res.json(feed.show(req.params.id));
});

server.listen(3000);
