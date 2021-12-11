import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  cat_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Category_Collection = 'Category';
export default mongoose.model(Category_Collection, Schema);
