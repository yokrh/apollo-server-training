const CommentConnector = require('../../comment/connector/connector.js');

const mock = [
  { id: 1, text: 'post-hogehoge' },
  { id: 2, text: 'post-fugafuga' },
];

class PostConnector {
  static async fetchPosts() {
    return mock;
  }

  static async fetchComments(postId) {
    return CommentConnector.fetchCommentsByPostId(postId);
  }
}

module.exports = PostConnector;
