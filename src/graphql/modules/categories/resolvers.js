import Post from '../../../models/post';
import Category from '../../../models/category';

export default {
  Category: {
    cat_id: async (category) => await Category.findById(category.id),
    name: async (category) => await Category.findById(category.id),
  },
  Query: {
    posts: async () => await Category.find(),
    post: async (_, { id }) => await Category.findById(id),
  },
  Mutation: {
    createPost: async (_, { data }) => await Category.create(data),
    updatePost: async (_, { id, data }) =>
      await Category.findOneAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
  },
};
