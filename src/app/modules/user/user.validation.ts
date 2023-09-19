import { z } from "zod";

const create_user_zod_scheam = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string({ required_error: "Email is required !!" }).email(),
    password: z.string({ required_error: "Password is required !!" }),
    pc_building: z.array(z.unknown()).optional(),
  }),
});

export { create_user_zod_scheam };
