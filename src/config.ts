import dotenv from "dotenv";

dotenv.config();

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  db_uri: process.env.DB_URI,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};
