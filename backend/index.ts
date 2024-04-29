import express from "express";
import dotenv from "dotenv";

// Routes

import loginRouter from "./routes/login";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});

app.use("/login", loginRouter);