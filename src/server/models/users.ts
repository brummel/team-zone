import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  name: string;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.model<IUser>("User", userSchema);
