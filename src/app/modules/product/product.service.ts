import { Product } from "./porduct.model";
import { IProduct } from "./product.interface";

const createProduct = async (payload: IProduct): Promise<IProduct | null> => {
  const result = await Product.create(payload);

  return result;
};

export const ProductService = { createProduct };
