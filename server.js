/**
 * @fileoverview express_api_server
 * @name server.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Feed = require('./models/feed');
const Profile = require('./models/profile');
const Article = require('./models/article');

const server = express();

var feed = new Feed();
var profile = new Profile();
var article = new Article();

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
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

server.delete('/api/v1/logout', (req, res) => {
  return res.json({ token: null });
})

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

server.get('/api/v1/users/me', (req, res) => {
  setTimeout(() => {
    return res.json(profile.fetch());
  }, 1000);
});

// CRUD of demographocs
server.get('/api/v1/demographics', (req, res) => {
  //profile.list = _.concat(profile.list, _.sample(profile.list));
  return res.json(_.sample(profile.fetchList()));
});

// CRUD of articles
server.get('/api/v1/projects/:id/articles', (req, res) => {
  setTimeout(() => {
    return res.json(article.fetchList());
  }, 1000);
});

// CRUD of articles
server.get('/api/v1/projects/:project_id/articles/:article_id', (req, res) => {
  setTimeout(() => {
    return res.json(article.fetch());
  }, 1000);
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
