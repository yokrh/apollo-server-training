const CommentConnector = require('./connector/connector.js');

const Query = {
  comment: async (parent, args, context, info) => {
    console.log('comment', args);
    const res = await CommentConnector.fetchComment(args.id);
    return res;
  },

  comments: async (parent, args, context, info) => {
    console.log('comments', args);
    const res = await CommentConnector.fetchComments();
    return res;
  },
};

const Mutation = {
  updateComment: async (parent, args, context, info) => {
    console.log('updateComment', args);
    const res = await CommentConnector.updateComment(args.args);
    return res;
  },
};

const resolver = {
  Query,
  Mutation,
};

module.exports = resolver;
