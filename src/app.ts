import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", async (req: Request, res: Response) => {
  res.json("The Elite Ensemble Is Running 🔥 💧 🔥");
});

export default app;
