import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  console.log("Cookies recibidas:", req.cookies);
  const { token } = req.cookies;
  if (!token) {
    console.log("No token en cookies");
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log("Error JWT:", err);
      return res.status(403).json({ message: "Invalid Token" });
    }
    req.user = user;
    next();
  });
};
