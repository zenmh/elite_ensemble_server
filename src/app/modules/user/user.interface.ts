import { Model } from "mongoose";

type IUser = {
  name?: string;
  email: string;
  password: string;
  pc_building?: Record<string, unknown>[];
};

type UserModel = Model<IUser, Record<string, unknown>>;

export { IUser, UserModel };
