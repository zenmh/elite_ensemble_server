"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_product_zod_schema = void 0;
const zod_1 = require("zod");
const porduct_constant_1 = require("./porduct.constant");
const key_features_zod_schema = zod_1.z.object({
    brand: zod_1.z.string({ required_error: "Brand is required !!" }),
    model: zod_1.z.string({ required_error: "Model is required !!" }),
    specification: zod_1.z.array(zod_1.z.record(zod_1.z.unknown())).optional(),
    port: zod_1.z.string().optional(),
    type: zod_1.z.string().optional(),
    resolution: zod_1.z.string().optional(),
    voltage: zod_1.z.string().optional(),
});
const review_zod_schema = zod_1.z.object({
    email: zod_1.z.string().email(),
    rating: zod_1.z.number(),
    comment: zod_1.z.string(),
});
const create_product_zod_schema = zod_1.z.object({
    body: zod_1.z.object({
        image: zod_1.z.string({ required_error: "Image is required !!" }),
        product_name: zod_1.z.string({ required_error: "Product name is required !!" }),
        category: zod_1.z.enum([...porduct_constant_1.product_category], {
            required_error: "Category is required !!",
        }),
        status: zod_1.z.enum(["In Stock", "Out Of Stock"], {
            required_error: "Status is required !!",
        }),
        price: zod_1.z.number({ required_error: "Price is required !!" }),
        description: zod_1.z.string({ required_error: "Description is required !!" }),
        key_features: key_features_zod_schema,
        individual_rating: zod_1.z.array(zod_1.z.number()).optional(),
        reviews: zod_1.z.array(review_zod_schema).optional(),
    }),
});
exports.create_product_zod_schema = create_product_zod_schema;
