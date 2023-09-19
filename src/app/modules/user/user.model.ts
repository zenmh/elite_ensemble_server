import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

const user_schema = new Schema<IUser>({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pc_building: [{ type: Schema.Types.Mixed }],
});

const User: UserModel = model<IUser>("User", user_schema);

export { User };
