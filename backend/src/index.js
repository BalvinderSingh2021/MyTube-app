import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/dbConnection.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then((response) => {
    console.log("response", response);

    app.on("error", (error) => {
      console.log(`server is not running...`, error);
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    });
    
  })
  .catch((err) => {
    console.log("Mongo db connection failed !!!", err.name);
  });
