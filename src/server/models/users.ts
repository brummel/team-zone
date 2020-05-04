import mongoose from "mongoose";
import IUser from "../../common/IUser";

export interface User extends mongoose.Document, IUser {}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.model<User>("User", userSchema);
