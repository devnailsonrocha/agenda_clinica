import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController";
import { createAppointment, listAppointments } from "../controllers/appointmentController";
import { authMiddleware } from "../middlewares/authMiddleware"; // Removido o 'r' extra no final
import { getAddress } from "../services/cepService";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/appointments", authMiddleware, createAppointment);
router.get("/appointments", authMiddleware, listAppointments);
router.get("/cep/:cep", async (req, res) => {
  try {
    const data = await getAddress(req.params.cep);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar CEP" });
  }
});

export default router;