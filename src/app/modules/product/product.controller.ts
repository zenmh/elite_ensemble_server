import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ProductService } from "./product.service";
import sendResponse from "../../../shared/sendResponse";
import { IProduct } from "./product.interface";
import pick from "../../../shared/pick";
import { pagination_fields } from "../../../constants/pagination";
import { product_filterable_fields } from "./porduct.constant";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.createProduct(req.body);

  sendResponse<IProduct>(res, {
    status_code: 200,
    success: true,
    message: "Product created successfully !",
    data: result,
  });
});

const getProducts = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, product_filterable_fields);
  const pagination_options = pick(req.query, pagination_fields);

  const result = await ProductService.getProducts(filter, pagination_options);

  sendResponse<IProduct[]>(res, {
    status_code: 200,
    success: true,
    message: "Products retrived successfully !",
    meta: result?.meta,
    data: result?.data,
  });
});

const getProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getProduct(req.params.id);

  sendResponse<IProduct>(res, {
    status_code: 200,
    success: true,
    message: "Product retrived successfully !",
    data: result,
  });
});

export const ProductController = { createProduct, getProducts, getProduct };
