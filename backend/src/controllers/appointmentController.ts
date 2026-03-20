import { Request, Response } from "express";
import Appointment from "../models/Appointment";

export async function createAppointment(req: Request, res: Response) {
  const { date, time } = req.body;

  try {
    // 1. Verifica se já existe um agendamento para este dia e hora
    const existingAppointment = await Appointment.findOne({ date, time });

    if (existingAppointment) {
      return res.status(400).json({ 
        error: "Este horário já está preenchido. Escolha outro momento." 
      });
    }

    // 2. Se estiver livre, cria o agendamento
    // Associamos o userId que vem do token (decodificado pelo middleware)
    const newAppointment = await Appointment.create({
      ...req.body,
      userId: (req as any).userId 
    });

    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: "Erro ao processar o agendamento" });
  }
}

export async function listAppointments(req: Request, res: Response) {
  try {
    // Lista apenas as consultas do usuário logado
    const appointments = await Appointment.find({ userId: (req as any).userId });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar consultas" });
  }
}