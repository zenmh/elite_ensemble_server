import { calculatePagination } from "../../../helpers/pagination";
import { IGenericResponse } from "../../../types/common";
import { IPaginationOptions } from "../../../types/pagination";
import { Product } from "./porduct.model";
import { IProduct } from "./product.interface";

const createProduct = async (payload: IProduct): Promise<IProduct | null> => {
  const result = await Product.create(payload);

  return result;
};

const getProducts = async (
  pagination_options: IPaginationOptions
): Promise<IGenericResponse<IProduct[]>> => {
  const { page, limit, skip } = calculatePagination(pagination_options);

  const result = await Product.find().skip(skip).limit(limit);

  const total = await Product.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id);

  return result;
};

export const ProductService = { createProduct, getProducts, getProduct };
