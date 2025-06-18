import User from "../models/user.Models.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const userFound = await User.findOne({ email }); // ✅ corrección aquí
    if (userFound) return res.status(400).json(["email alredy is in use"]);
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createAccesToken({ id: userSaved._id });

    res.cookie("token", token);

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json({ message: "User not found" });

    if (userFound.email !== "admin@gmail.com") {
      return res.status(403).json({ message: "Access denied: Not an admin" });
    }

    const isMatch = await bcrypt.compare(password, userFound.password);
    console.log("Password ingresado:", password);
    console.log("Resultado de bcrypt:", isMatch);

    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = await createAccesToken({ id: userFound._id });
    console.log("este es el token", token);

    res.cookie("token", token, {
      httpOnly: true, // ✅ más seguro: evita acceso desde JS
      sameSite: "lax", // o "strict", según tu política de CSRF
    });

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};
