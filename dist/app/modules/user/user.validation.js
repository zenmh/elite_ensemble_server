"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_user_zod_scheam = void 0;
const zod_1 = require("zod");
const create_user_zod_scheam = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string({ required_error: "Email is required !!" }).email(),
        password: zod_1.z.string({ required_error: "Password is required !!" }),
        pc_building: zod_1.z.array(zod_1.z.unknown()).optional(),
    }),
});
exports.create_user_zod_scheam = create_user_zod_scheam;
