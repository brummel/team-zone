import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },
});

export default mongoose.model("User", userSchema);
