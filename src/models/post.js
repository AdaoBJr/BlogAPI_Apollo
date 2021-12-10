import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('Post', Schema);
