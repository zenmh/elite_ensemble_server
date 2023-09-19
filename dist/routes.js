"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const product_route_1 = require("./app/modules/product/product.route");
const user_route_1 = require("./app/modules/user/user.route");
const router = (0, express_1.Router)();
[
    { path: "/products", route: product_route_1.ProductRoutes },
    { path: "/users", route: user_route_1.UserRoutes },
].forEach(({ path, route }) => router.use(path, route));
exports.routes = router;
