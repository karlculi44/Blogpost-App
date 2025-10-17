import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
}, { timestamps: true });

export default mongoose.model('User', userSchema);