"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const porduct_constant_1 = require("./porduct.constant");
const key_features_schema = new mongoose_1.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    specification: [{ type: mongoose_1.Schema.Types.Mixed }],
    port: { type: String },
    type: { type: String },
    resolution: { type: String },
    voltage: { type: String },
});
const review_schema = new mongoose_1.Schema({
    email: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
});
const product_schema = new mongoose_1.Schema({
    image: { type: String, required: true },
    product_name: { type: String, required: true },
    category: {
        type: String,
        required: true,
        enum: porduct_constant_1.product_category,
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
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
const Product = (0, mongoose_1.model)("Product", product_schema);
exports.Product = Product;
