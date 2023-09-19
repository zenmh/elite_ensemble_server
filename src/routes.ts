import { Router } from "express";
import { ProductRoutes } from "./app/modules/product/product.route";
import { UserRoutes } from "./app/modules/user/user.route";

const router = Router();

[
  { path: "/products", route: ProductRoutes },
  { path: "/users", route: UserRoutes },
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
