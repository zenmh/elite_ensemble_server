import { Router } from "express";
import validateZodRequest from "../../middlewares/validateZodRequest";
import { create_product_zod_schema } from "./product.validation";
import { ProductController } from "./product.controller";

const router = Router();

// Create
router.post(
  "/",
  validateZodRequest(create_product_zod_schema),
  ProductController.createProduct
);

// Update

// Delete

// Read

export const ProductRoutes = router;
