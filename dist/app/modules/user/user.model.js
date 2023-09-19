"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_schema = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pc_building: [{ type: mongoose_1.Schema.Types.Mixed }],
});
const User = (0, mongoose_1.model)("User", user_schema);
exports.User = User;
