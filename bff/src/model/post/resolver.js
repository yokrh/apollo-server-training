const PostConnector = require('./connector/connector.js');

const Post = {
  comments: async (parent, args, context, info) => {
    console.log('Post.comments parent', parent);

    const postId = parent.id;
    const res = await PostConnector.fetchComments(postId);
    return res;
  },
};

const Query = {
  posts: async (parent, args, context, info) => {
    const res = await PostConnector.fetchPosts();
    return res;
  },
};

const resolver = {
  Post,
  Query,
};

module.exports = resolver;
