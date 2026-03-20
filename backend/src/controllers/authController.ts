import { Request, Response } from "express";
import User from "../models/User";
import { generateToken } from "../config/auth";

export async function registerUser(req: Request, res: Response) {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Erro ao registrar usuário" });
  }
}

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // Adicionada verificação de senha
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "E-mail ou senha incorretos" });
  }

  const token = generateToken(user._id.toString());
  res.json({ token });
}