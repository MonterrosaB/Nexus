import userModel from "../models/userModel.js";
import customerModel from "../models/customerModel.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const userFound = await userModel.findOne({ email }); // ✅ corrección aquí
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
    const userFound = await userModel.findOne({ email });

    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    console.log("Password ingresado:", password);
    console.log("Resultado de bcrypt:", isMatch);

    if (!isMatch)
      return res.status(400).json({ message: "User or password incorrect" });

    // 👇 Incluimos el rol en el token
    const token = await createAccesToken({
      id: userFound._id,
      role: userFound.role,
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });

    // 👇 Incluimos el rol en la respuesta
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      role: userFound.role,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    path: "/", // 👈 MUY IMPORTANTE: el path debe coincidir con el que usaste en `res.cookie()`
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  try {
    let userFound = await userModel.findById(req.user.id);
    let role = "";

    if (userFound) {
      role = userFound.role; // si ya tiene "admin", "empleado", etc.
    } else {
      userFound = await customerModel.findById(req.user.id);
      if (userFound) {
        role = "cliente"; // 👈 asignas rol manualmente
      }
    }

    if (!userFound) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      role, // 👈 incluimos el role aquí
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const loginCustomers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await customerModel.findOne({ email });

    if (!userFound) {
      return res.status(404).json({ message: "User not found" });
    }

    const isEqual = await bcrypt.compare(password, userFound.password);
    if (!isEqual) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Incluye el rol explícitamente en el token
    const token = await createAccesToken({
      id: userFound._id,
      role: "cliente",
    });

    // Configura la cookie httpOnly si es para seguridad (recomendado en producción)
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      role: "cliente", // 👈 aquí también
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    console.error("error: ", error);
    res.status(500).json({ message: "Error en el login" });
  }
};
