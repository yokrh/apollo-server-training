const mock = [
  { id: 1, text: 'comment-hogehoge', postId: 1 },
  { id: 2, text: 'comment-fugafuga', postId: 1 },
  { id: 3, text: 'comment-piyopiyo', postId: 2 },
];

class CommentConnector {
  static async fetchComments() {
    return mock;
  }

  static async fetchCommentsByPostId(postId) {
    return mock.filter(comment => comment.postId === postId);
  }

  static async updateComment(args) {
    if (!args.id) return null;
    if (!mock[args.id]) return null;

    const targetComments = mock.filter(comment => comment.id === parseInt(args.id));
    if (targetComments.length === 0) return null;

    const comment = targetComments[0];
    comment.text = args.text;
    return comment;
  }
}

module.exports = CommentConnector;
