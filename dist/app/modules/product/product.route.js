"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const validateZodRequest_1 = __importDefault(require("../../middlewares/validateZodRequest"));
const product_validation_1 = require("./product.validation");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
// Create
router.post("/", (0, validateZodRequest_1.default)(product_validation_1.create_product_zod_schema), product_controller_1.ProductController.createProduct);
// Update
// Delete
// Read
router.get("/:id", product_controller_1.ProductController.getProduct);
router.get("/", product_controller_1.ProductController.getProducts);
exports.ProductRoutes = router;
