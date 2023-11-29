import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { json } from "body-parser";
import router from "./routes/";
import { requestLogger } from "./helpers/custom-logger";
import errorHandler from "./middlewares/errorHandler";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(json());


mongoose.connect("mongodb://0.0.0.0:27017/todoList", {
  retryWrites: true,
  w: "majority",
});

app.use("/api/v1", router);
app.use(errorHandler);
app.use(requestLogger);




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
