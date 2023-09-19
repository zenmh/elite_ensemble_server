import { Router } from "express";
import validateZodRequest from "../../middlewares/validateZodRequest";
import { create_user_zod_scheam } from "./user.validation";
import { UserController } from "./user.controller";

const router = Router();

// Create
router.post(
  "/",
  validateZodRequest(create_user_zod_scheam),
  UserController.createUser
);

// Update

// Delete

// Read
router.get("/:email", UserController.getUser);

export const UserRoutes = router;
