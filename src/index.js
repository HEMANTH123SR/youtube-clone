import dotenv from "dotenv";
import { connectDB } from "./db";
import { app } from "./app";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("server is running on port ", process.env.PORT || 8000);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed !!! ", err);
  });
