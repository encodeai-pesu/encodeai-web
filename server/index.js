import express from "express";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  res.send({ message: "Hello World!!" });
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
