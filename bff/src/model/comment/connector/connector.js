const mock = [
  { id: 1, text: 'comment-hogehoge', postId: 1 },
  { id: 2, text: 'comment-fugafuga', postId: 1 },
  { id: 3, text: 'comment-piyopiyo', postId: 2 },
];

class CommentConnector {
  static async fetchComment(id) {
    if (!id) return null;
    const targetComments = mock.filter(comment => comment.id === parseInt(id));
    if (targetComments.length === 0) return null;
    return targetComments[0];
  }

  static async fetchComments() {
    return mock;
  }

  static async fetchCommentsByPostId(postId) {
    return mock.filter(comment => comment.postId === postId);
  }

  static async updateComment(args) {
    const { id, text } = args;
    if (!id) return null;

    const comment = await this.fetchComment(id);
    if (!comment) return null;

    if (text) comment.text = text;

    return comment;
  }
}

module.exports = CommentConnector;
