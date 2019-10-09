const CommentConnector = require('../../comment/connector/connector.js');

const mock = [
  { id: 1, text: 'post-hogehoge' },
  { id: 2, text: 'post-fugafuga' },
];

class PostConnector {
  static async fetchPost(id) {
    if (!id) return null;
    const targetPosts = mock.filter(post => post.id === parseInt(id));
    if (targetPosts.length === 0) return null;
    return targetPosts[0];
  }

  static async fetchPosts() {
    return mock;
  }

  static async fetchComments(postId) {
    return CommentConnector.fetchCommentsByPostId(postId);
  }

  static async updatePost(args) {
    const { id, text } = args;
    if (!id) return null;

    const post = await this.fetchPost(id);
    if (!post) return null;

    if (text) post.text = text;

    return post;
  }
}

module.exports = PostConnector;
