import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET não definido no .env");
}

export function generateToken(userId: string) {
  return jwt.sign({ id: userId }, JWT_SECRET as string, { expiresIn: "1d" });
}
