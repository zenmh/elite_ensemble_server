"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    db_uri: process.env.DB_URI,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};
