const Pagination = require('../_pagination/pagination');
const PostConnector = require('./connector/connector');

const Post = {
  comments: async (parent, args, context, info) => {
    console.log('Post.comments parent', parent);

    const postId = parent.id;
    const res = await PostConnector.fetchComments(postId);
    return res;
  },
};

const Query = {
  post: async (parent, args, context, info) => {
    console.log('post', args);
    const res = await PostConnector.fetchPost(args.id);
    return res;
  },

  posts: async (parent, args, context, info) => {
    console.log('posts', args);
    const posts = await PostConnector.fetchPosts();
    return Pagination.getConnection(posts);
  },
};

const Mutation = {
  updatePost: async (parent, args, context, info) => {
    console.log('updatePost', args);
    const res = await PostConnector.updatePost(args.args);
    return res;
  }
}

const resolver = {
  Post,
  Query,
  Mutation,
};

module.exports = resolver;
