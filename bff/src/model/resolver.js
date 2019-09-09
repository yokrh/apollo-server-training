const GMR = require('graphql-merge-resolvers');

const commentResolver = require('./comment/resolver.js');
const postResolver = require('./post/resolver.js');

const resolvers = GMR.merge([
  commentResolver,
  postResolver,
]);

module.exports = resolvers;
