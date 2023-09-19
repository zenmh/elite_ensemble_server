import { SortOrder } from "mongoose";
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
  filter: Record<string, unknown>,
  pagination_options: IPaginationOptions
): Promise<IGenericResponse<IProduct[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(pagination_options);

  const and_conditions = [];

  if (Object.keys(filter).length) {
    and_conditions.push({
      $and: Object.entries(filter).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sort_conditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) sort_conditions[sortBy] = sortOrder;

  let where_condition;

  if (filter?.category === "all") {
    where_condition = {};
  } else if (and_conditions.length > 0) {
    where_condition = { $and: and_conditions };
  } else {
    where_condition = {};
  }

  const total = await Product.countDocuments(where_condition);

  const result = await Product.find(where_condition)
    .sort(sort_conditions)
    .skip(skip)
    .limit(limit);

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
