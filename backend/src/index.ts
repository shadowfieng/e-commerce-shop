import express from "express";

const app = express();
const port = 5050;

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
