import express from "express";
import cookieParser from "cookie-parser";
import auth from "./src/routes/auth.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

// routes
app.use("/auth", auth);

app.get("/", async (req, res) => {
  res.send({ message: "Hello World!!" });
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
