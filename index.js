import dotenv from "dotenv";
import express from "express";

dotenv.config({ path: "./.env" });

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.get("/", (req, res) => {
  res.send(`Hello World! ============= ${PORT}`);
});



app.listen(PORT, HOST, () => {
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
});
