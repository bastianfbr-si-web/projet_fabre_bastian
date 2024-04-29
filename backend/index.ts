import express from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

import loginRouter from "./routes/login";

app.use(express.json());

app.use("/login", loginRouter);

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});