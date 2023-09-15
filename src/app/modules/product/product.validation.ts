import { z } from "zod";
import { product_category } from "./porduct.constant";

const key_features_zod_schema = z.object({
  brand: z.string({ required_error: "Brand is required !!" }),
  model: z.string({ required_error: "Model is required !!" }),
  specification: z.array(z.record(z.unknown())).optional(),
  port: z.string().optional(),
  type: z.string().optional(),
  resolution: z.string().optional(),
  voltage: z.string().optional(),
});

const review_zod_schema = z.object({
  email: z.string().email(),
  rating: z.number(),
  comment: z.string(),
});

const create_product_zod_schema = z.object({
  body: z.object({
    image: z.string({ required_error: "Image is required !!" }),
    product_name: z.string({ required_error: "Product name is required !!" }),
    category: z.enum([...product_category] as [string, ...string[]], {
      required_error: "Category is required !!",
    }),
    status: z.enum(["In Stock", "Out Of Stock"], {
      required_error: "Status is required !!",
    }),
    price: z.number({ required_error: "Price is required !!" }),
    description: z.string({ required_error: "Description is required !!" }),
    key_features: key_features_zod_schema,
    individual_rating: z.array(z.number()).optional(),
    reviews: z.array(review_zod_schema).optional(),
  }),
});

export { create_product_zod_schema };
