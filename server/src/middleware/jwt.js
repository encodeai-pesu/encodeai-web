import { jwtVerify } from "jose";
import env from "../env.js";

const secret = new TextEncoder().encode(env.JWT_SECRET);

const verifyJWT = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    req.user = payload;
    next();
  } catch (err) {
    res.send(401).json({ error: "Invalid token payload" });
  }
};

export default verifyJWT;
