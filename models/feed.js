/**
 * @fileoverview feedModel
 * @name feed.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
const _ = require('lodash');

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

module.exports = Feed;
