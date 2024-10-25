import { Router } from "express";
import { randomBytes } from "crypto";
import client from "../db.js";
import { hash, verify } from "argon2";
import { jwtVerify, SignJWT } from "jose";
import env from "../env.js";
import verifyJWT from "../middleware/jwt.js";

const auth = Router();

const secret = new TextEncoder().encode(env.JWT_SECRET);

auth.post("/signup", async (req, res) => {
  /** @type {{ name: string; username: string; password: string; }} */
  const { name, username, password } = req.body;
  try {
    const id = randomBytes(8).toString("hex");
    const hashed = await hash(password);

    await client.insertOne({
      _id: id,
      name: name,
      username: username,
      password: hashed,
    });

    res.send({ message: "User created successfully!!" });
  } catch (err) {
    res.status(500).json({ error: `Internal server error: ${err}` });
  }
});

auth.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await client.findOne({
      username,
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    if (await verify(user.password, password)) {
      const payload = {
        id: user._id,
        username: username,
        name: user.name,
      };

      const token = await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("30d")
        .sign(secret);

      res.cookie("token", token, { sameSite: "strict" });
      res.status(200).json({ message: `Signed in as ${user.name}` });
    } else {
      res.status(401).json({ error: "Wrong password" });
    }
  } catch (err) {
    res.status(500).json({ error: `Internal server error: ${err}` });
  }
});

auth.get("/protected", verifyJWT, async (req, res) => {
  res.json({ message: `${req.user.username} is in!` });
});

auth.get("/session", async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(202).json({ user: null });
    return;
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    res.status(200).json({
      user: {
        id: payload.id,
        username: payload.username,
        name: payload.name,
      },
    });
    return;
  } catch (err) {
    res.status(401).json({ error: "Invalid token payload" });
  }
});

export default auth;
