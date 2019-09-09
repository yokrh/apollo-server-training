const CommentConnector = require('./connector/connector.js');

const Query = {
  comments: async (parent, args, context, info) => {
    const res = await CommentConnector.fetchComments();
    return res;
  },
};

const Mutation = {
  updateComment: async (parent, args, context, info) => {
    console.log('updateComment args', args);
    const res = await CommentConnector.updateComment(args.args);
    return res;
  },
};

const resolver = {
  Query,
  Mutation,
};

module.exports = resolver;
