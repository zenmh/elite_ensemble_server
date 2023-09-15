import { Schema, model } from "mongoose";
import { IKeyFeatures, IProduct, IReview } from "./product.interface";
import { product_category } from "./porduct.constant";

const key_features_schema = new Schema<IKeyFeatures>({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  specification: [{ type: Schema.Types.Mixed }],
  port: { type: String },
  type: { type: String },
  resolution: { type: String },
  voltage: { type: String },
});

const review_schema = new Schema<IReview>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const product_schema = new Schema<IProduct>(
  {
    image: { type: String, required: true },
    product_name: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: product_category,
    },
    status: {
      type: String,
      required: true,
      enum: ["In Stock", "Out Of Stock"],
    },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    key_features: { type: key_features_schema },
    individual_rating: { type: [Number] },
    reviews: { type: [review_schema] },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const Product = model<IProduct>("Product", product_schema);

export { Product };
