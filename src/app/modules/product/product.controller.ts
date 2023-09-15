import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ProductService } from "./product.service";
import sendResponse from "../../../shared/sendResponse";
import { IProduct } from "./product.interface";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.createProduct(req.body);

  sendResponse<IProduct>(res, {
    status_code: 200,
    success: true,
    message: "Product created successfully !",
    data: result,
  });
});

export const ProductController = { createProduct };
