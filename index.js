import dotenv from "dotenv";
import express from "express";

dotenv.config({ path: "./.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
});
