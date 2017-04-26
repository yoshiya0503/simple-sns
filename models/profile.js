/**
 * @fileoverview UserModel
 * @name user.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

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

module.exports = Profile;
