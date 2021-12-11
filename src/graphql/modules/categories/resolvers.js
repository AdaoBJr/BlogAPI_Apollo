import Category from '../../../models/category';

export default {
  Category: {
    cat_id: async (category) => await Category.findById(category.id),
    name: async (category) => await Category.findById(category.id),
  },
  Query: {
    categories: async () => await Category.find(),
    category: async (_, { id }) => await Category.findById(id),
  },
  Mutation: {
    createCategory: async (_, { data }) => await Category.create(data),
    updateCategory: async (_, { id, data }) =>
      await Category.findOneAndUpdate(id, data, { new: true }),
    deleteCategory: async (_, { id }) => !!(await Category.findOneAndDelete(id)),
  },
};
