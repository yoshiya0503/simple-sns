/**
 * @fileoverview articleModel
 * @name article.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */

const _ = require('lodash');

class Article {
  constructor() {
    this.data = {
      'project_id': 1,
      'id': 26,
      'url': 'https://cakes.mu/posts/34',
      'title': '第１回　AV監督のくせに恋愛を哲学する【恋と性愛の研究と実践】 | キモい男、ウザい女。 | 二村ヒトシ | cakes（ケイクス）',
      'pubDate': '2012-11-02T00:00:00+09:00',
      'thumbnailUrl': 'https://d2oe4hwshyef6j.cloudfront.net/production/uploads/image/series_rectangle/image/246/ogp_249dfa853e1548046062035f72a21b74eeb51160',
      'sharesCount': {
        'twitter': 1,
        'facebook': '***',
      },
      'pageViews': '****',
      "averagePagePeriod": "01:21",
    };
    this.list = [
      {
        'project_id': 1,
        'id': 26,
        'url': 'https://cakes.mu/posts/34',
        'title': '第１回　AV監督のくせに恋愛を哲学する【恋と性愛の研究と実践】 | キモい男、ウザい女。 | 二村ヒトシ | cakes（ケイクス）',
        'pubDate': '2012-11-02T00:00:00+09:00',
        'thumbnailUrl': 'https://d2oe4hwshyef6j.cloudfront.net/production/uploads/image/series_rectangle/image/246/ogp_249dfa853e1548046062035f72a21b74eeb51160',
        'commentsCount': 1,
        'lovesCount': 1,
        'sharesCount': {
          'twitter': 1,
          'facebook': '***'
        },
        'pageViews': '****',
        'readCount': '****',
        'realtime': {},
        'reports': {},
        'likes': [
          {
            'id': 37,
            'userId': 11,
            'userThumbnailUrl': '/assets/uploads/user/avatar/11/e6907d49-4343-4d0f-b2c8-7dcfdec4f605.jpeg'
          }
        ],
        'comments': [
          {
            'id': 26,
            'userId': 11,
            'userThumbnailUrl': '/assets/uploads/user/avatar/11/e6907d49-4343-4d0f-b2c8-7dcfdec4f605.jpeg',
            'userName': 'ユーザ',
            'body': 'コメント！',
            'createdAt': '2017-03-31T11:09:45+09:00'
          }
        ]
      },
      {
        'project_id': 1,
        'id': 15,
        'url': 'https://cakes.mu/posts/23',
        'title': '【第4回】彼女いない歴もうすぐ30年 | フェル先生のさわやか人生相談 | フェルディナント・ヤマグチ | cakes（ケイクス）',
        'pubDate': '2012-09-28T00:00:00+09:00',
        'thumbnailUrl': 'https://d2oe4hwshyef6j.cloudfront.net/production/uploads/image/series_rectangle/image/3765/ogp_fe7e8ba3733d18d2385c9dba96c7926e281fd39a',
        'commentsCount': 0,
        'lovesCount': 0,
        'sharesCount': {
          'twitter': 0,
          'facebook': '***'
        },
        'pageViews': '****',
        'readCount': '****',
        'realtime': {},
        'reports': {},
        'likes': [],
        'comments': []
      },
      {
        'project_id': 1,
        'id': 5,
        'url': 'https://cakes.mu/posts/8',
        'title': 'ケータイを捨てるべき、３つの理由 | ケイクスカルチャー | 海猫沢めろん | cakes（ケイクス）',
        'pubDate': '2012-09-25T00:00:00+09:00',
        'thumbnailUrl': 'https://d2oe4hwshyef6j.cloudfront.net/production/uploads/image/post_rectangle/image/2239/ogp_b4e8fdc2e55442837e9f4f9cc7a750faa30e7383',
        'commentsCount': 0,
        'lovesCount': 0,
        'sharesCount': {
          'twitter': 1,
          'facebook': '***'
        },
        'pageViews': '****',
        'readCount': '****',
        'realtime': {},
        'reports': {},
        'likes': [],
        'comments': []
      },
      {
        'project_id': 1,
        'id': 18,
        'url': 'https://cakes.mu/posts/26',
        'title': '前澤友作（株式会社スタートトゥデイ）vol.3 日常の違和感から、変革は始まる | イケてる経営者が日本を救う | 藤野英人 | cakes（ケイクス）',
        'pubDate': '2012-09-25T00:00:00+09:00',
        'thumbnailUrl': 'https://d2oe4hwshyef6j.cloudfront.net/production/uploads/image/post_rectangle/image/2245/ogp_8e17ee57fcfe61ed3037b4b5a3439c0ea2ec34ff',
        'commentsCount': 0,
        'lovesCount': 0,
        'sharesCount': {
          'twitter': 0,
          'facebook': '***'
        },
        'pageViews': '****',
        'readCount': '****',
        'realtime': {},
        'reports': {},
        'likes': [],
        'comments': []
      },
      {
        'project_id': 1,
        'id': 3,
        'url': 'https://cakes.mu/posts/6',
        'title': '【第2回】フランスでワインづくりをはじめたわけ | ワイン通信・ブルゴーニュの村から | 仲田晃司 | cakes（ケイクス）',
        'pubDate': '2012-09-21T00:00:00+09:00',
        'thumbnailUrl': 'https://d2oe4hwshyef6j.cloudfront.net/production/uploads/image/post_rectangle/image/2238/ogp_72d7b6df322b63b3219d05d86c1d546f43802704',
        'commentsCount': 0,
        'lovesCount': 0,
        'sharesCount': {
          'twitter': 0,
          'facebook': '***'
        },
        'pageViews': '****',
        'readCount': '****',
        'realtime': {},
        'reports': {},
        'likes': [],
        'comments': []
      },
      {
        'project_id': 1,
        'id': 4,
        'url': 'https://cakes.mu/posts/7',
        'title': 'あたらしいソーシャルゲームを作るということ | ケイクスカルチャー | 飯田和敏 | cakes（ケイクス）',
        'pubDate': '2012-09-21T00:00:00+09:00',
        'thumbnailUrl': 'https://d2oe4hwshyef6j.cloudfront.net/production/uploads/image/series_rectangle/image/3761/ogp_a1fd5f30da127534e109a0663fa9cf875840871d',
        'commentsCount': 0,
        'lovesCount': 0,
        'sharesCount': {
          'twitter': 0,
          'facebook': '***'
        },
        'pageViews': '****',
        'readCount': '****',
        'realtime': {},
        'reports': {},
        'likes': [],
        'comments': []
      },
      {
        'project_id': 1,
        'id': 14,
        'url': 'https://cakes.mu/posts/22',
        'title': '【第3回】インテリジェンスの条件は | フェル先生のさわやか人生相談 | フェルディナント・ヤマグチ | cakes（ケイクス）',
        'pubDate': '2012-09-21T00:00:00+09:00',
        'thumbnailUrl': 'https://d2oe4hwshyef6j.cloudfront.net/production/uploads/image/series_rectangle/image/3765/ogp_fe7e8ba3733d18d2385c9dba96c7926e281fd39a',
        'commentsCount': 0,
        'lovesCount': 0,
        'sharesCount': {
          'twitter': 0,
          'facebook': '***'
        },
        'pageViews': '****',
        'readCount': '****',
        'realtime': {},
        'reports': {},
        'likes': [],
        'comments': []
      },
      {
        'project_id': 1,
        'id': 22,
        'url': 'https://cakes.mu/posts/30',
        'title': '第三講　論理のマトリョーシカ人形 | 文章ってそういうことだったのか講義 | 古賀史健 | cakes（ケイクス）',
        'pubDate': '2012-09-20T00:00:00+09:00',
        'thumbnailUrl': 'https://d2oe4hwshyef6j.cloudfront.net/production/uploads/image/post_rectangle/image/2247/ogp_c1dcff19117c1b859f2e9e52dda18895c63eea18',
        'commentsCount': 0,
        'lovesCount': 0,
        'sharesCount': {
          'twitter': 0,
          'facebook': '***'
        },
        'pageViews': '****',
        'readCount': '****',
        'realtime': {},
        'reports': {},
        'likes': [],
        'comments': []
      },
      {
        'project_id': 1,
        'id': 8,
        'url': 'https://cakes.mu/posts/15',
        'title': '東高円寺「天★」 【レシピ編】——イチゴレバーパテにはあはあ！ | 寝ても覚めても好きな店♡ | ツレヅレハナコ | cakes（ケイクス）',
        'pubDate': '2012-09-18T00:00:00+09:00',
        'thumbnailUrl': 'https://d2oe4hwshyef6j.cloudfront.net/production/uploads/image/post_rectangle/image/2241/ogp_68bc72e3d1f7361e656785260b1dd70c5302db3e',
        'commentsCount': 0,
        'lovesCount': 0,
        'sharesCount': {
          'twitter': 0,
          'facebook': '***'
        },
        'pageViews': '****',
        'readCount': '****',
        'realtime': {},
        'reports': {},
        'likes': [],
        'comments': []
      },
      {
        'project_id': 1,
        'id': 17,
        'url': 'https://cakes.mu/posts/25',
        'title': '前澤友作（株式会社スタートトゥデイ）vol.2 世界の端の幸せまで気になる | イケてる経営者が日本を救う | 藤野英人 | cakes（ケイクス）',
        'pubDate': '2012-09-18T00:00:00+09:00',
        'thumbnailUrl': 'https://d2oe4hwshyef6j.cloudfront.net/production/uploads/image/post_rectangle/image/2244/ogp_2b63213f90f088f1bb1c41ff0536ad58155a7894',
        'commentsCount': 0,
        'lovesCount': 0,
        'sharesCount': {
          'twitter': 0,
          'facebook': '***'
        },
        'pageViews': '****',
        'readCount': '****',
        'realtime': {},
        'reports': {},
        'likes': [],
        'comments': []
      }
    ];
  }

  fetchList() {
    return this.list;
  }

  fetch() {
    return this.data;
  }
}

module.exports = Article;
