import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  active: {
    type: Boolean,
    required: true,
  },
});

const User_Collection = 'users';
const User = mongoose.model(User_Collection, Schema);
export default User;
