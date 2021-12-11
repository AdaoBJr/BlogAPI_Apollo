import Category from '../../../models/category';

export default {
  // Category: {
  //   name: async (category) => await Category.findById(category.id),
  // },
  Query: {
    categories: async () => await Category.find(),
    category: async (_, { id }) => await Category.findById(id),
  },
  Mutation: {
    createCategory: async (_, { name }) => await Category.create({ name }),
    updateCategory: async (_, { id, name }) =>
      await Category.findOneAndUpdate(id, name, { new: true }),
    deleteCategory: async (_, { id }) => !!(await Category.findOneAndDelete(id)),
  },
};
