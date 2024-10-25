import { config } from "dotenv";
config();

function getEnv(name) {
  const val = process.env[name];
  if (!val) {
    throw new Error(`${name} not declared in .env`);
  }
  return val;
}

const env = {
  JWT_SECRET: getEnv("JWT_SECRET"),
  MONGODB_URL: getEnv("MONGODB_URL"),
};

export default env;
