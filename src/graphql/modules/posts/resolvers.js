import Post from '../../../models/post';
import User from '../../../models/user';
import Category from '../../../models/category';

export default {
  Post: {
    author: async (post) => await User.findById(post.author),
    category: async (post) => await Category.findById(post.category),
  },
  Query: {
    posts: async () => await Post.find(),
    post: async (_, { id }) => await Post.findById(id),
  },
  Mutation: {
    createPost: async (_, { data }) => await Post.create(data),
    updatePost: async (_, { id, data }) =>
      await Post.findOneAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
  },
};
