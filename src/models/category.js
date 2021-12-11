import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Category_Collection = 'Category';
export default mongoose.model(Category_Collection, Schema);
