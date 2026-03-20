import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // Adicionado
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();

app.use(cors()); // Adicionado: Libera o acesso para o Frontend
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB conectado com sucesso"))
  .catch(err => console.log("Erro ao conectar no Mongo:", err));

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));