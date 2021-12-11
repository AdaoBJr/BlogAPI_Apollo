import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Category_Collection = 'categories';
export default mongoose.model(Category_Collection, Schema);
