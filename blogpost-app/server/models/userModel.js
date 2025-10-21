import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: { type: String, required: true, trim: true },
  suffix: { type: String, default: "" },
  birthdate: { type: Date, required: true },
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, select: false }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
