import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (user: IUser): Promise<IUser> => {
  const result = await User.create(user);

  return result;
};

const getUser = async (email: string): Promise<IUser | null> => {
  const result = await User.findOne({ email });

  return result;
};

export const UserService = { createUser, getUser };
