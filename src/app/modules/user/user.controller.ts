import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import { IUser } from "./user.interface";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createUser(req.body);

  sendResponse<IUser>(res, {
    status_code: 200,
    success: true,
    message: "User created successfully !",
    data: result,
  });
});

const getUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getUser(req.params.email);

  sendResponse<IUser>(res, {
    status_code: 200,
    success: true,
    message: "User retrieved successfully !",
    data: result,
  });
});

export const UserController = { createUser, getUser };
