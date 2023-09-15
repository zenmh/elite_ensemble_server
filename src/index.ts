import { Server } from "http";
import mongoose from "mongoose";
import config from "./config";
import app from "./app";

let server: Server;

const main = async () => {
  try {
    await mongoose.connect(config.db_uri as string);

    console.log("Database Connected 🛢 🛢 🛢");

    server = app.listen(config.port, () =>
      console.log(`The server is listening on http://localhost:${config.port}`)
    );
  } catch (err) {
    console.log("Failed To Connect Database ❌ 🛢 ❌");
  }
};

main();
