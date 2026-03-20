import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
}

const UserSchema: Schema = new Schema({
  name: String,
  email: String,
  password: String,
  role: String
});

export default mongoose.model<IUser>("User", UserSchema);