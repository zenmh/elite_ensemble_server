import { Router } from "express";
import { ProductRoutes } from "./app/modules/product/product.route";

const router = Router();

[{ path: "/products", route: ProductRoutes }].forEach(({ path, route }) =>
  router.use(path, route)
);

export const routes = router;
