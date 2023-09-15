import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsync =
  (func: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      func(req, res, next);
    } catch (err) {
      next(err);
    }
  };

export default catchAsync;
