import { Model } from "mongoose";

interface ICategory {
  category:
    | "cpu_or_processor"
    | "motherboard"
    | "ram"
    | "power_supply_unit"
    | "storage_device"
    | "monitor"
    | "others";
}

interface IKeyFeatures {
  brand: string;
  model: string;
  specification?: Record<string, unknown>[];
  port?: string;
  type?: string;
  resolution?: string;
  voltage?: string;
}

interface IReview {
  email: string;
  rating: number;
  comment: string;
}

type IProduct = {
  image: string;
  product_name: string;
  category: ICategory;
  status: "In Stock" | "Out Of Stock";
  price: number;
  description: string;
  key_features: IKeyFeatures;
  individual_rating: number[];
  reviews: IReview[];
};

type ProductModel = Model<IProduct, Record<string, unknown>>;

export { IKeyFeatures, IProduct, ProductModel, IReview };
