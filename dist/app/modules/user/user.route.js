"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const validateZodRequest_1 = __importDefault(require("../../middlewares/validateZodRequest"));
const user_validation_1 = require("./user.validation");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
// Create
router.post("/", (0, validateZodRequest_1.default)(user_validation_1.create_user_zod_scheam), user_controller_1.UserController.createUser);
// Update
// Delete
// Read
router.get("/:email", user_controller_1.UserController.getUser);
exports.UserRoutes = router;
