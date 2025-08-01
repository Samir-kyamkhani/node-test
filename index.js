import dotenv from "dotenv";
import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

dotenv.config({ path: "./.env" });

const app = express();

const PORT = process.env.PORT || 3000;

// Route to serve HTML page with button
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Create Test Entry</title></head>
      <body>
        <h1>Hello World! Port = ${PORT}</h1>
        <button onclick="createEntry()">Create New Test Entry</button>
        <div id="result"></div>

        <script>
          async function createEntry() {
            const response = await fetch('/create');
            const data = await response.json();
            document.getElementById('result').innerHTML =
              '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
          }
        </script>
      </body>
    </html>
  `);
});

// Route that creates the DB entry when called
app.get("/create", async (req, res) => {
  try {
    const newTest = await prisma.test.create({
      data: { name: "Sample Test" },
    });
    res.json(newTest); // Send JSON back to frontend
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create entry" });
  }
});

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
});
