import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    // unique:true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
  },
  provider: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  account: {
    provider: {
      type: String,
    },
    type: {
      type: String,
    },
    providerAccountId: {
      type: String,
    },
    access_token: {
      type: String,
    },
    token_type: {
      type: String,
    },
    scope: {
      type: String,
    },
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
