import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//garantir que as variaveis de ambiente foram carregadas
dotenv.config();

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// rota de cadastro

router.post("/cadastrar", async (req, res) => {
  try {
    const { name, password, username, city, state, age } = req.body;

    if (!name || !password || !username || !city || !state || !age) {
      res
        .status(422)
        .json({ message: "Todos os campos devem ser preenchidos!" });
    } else if (age <= 17) {
      res.status(403).json({ message: "Idade minima de 18 Anos!" });
    }

    //salgando a senha
    const saltRounds = await bcrypt.genSalt(12);
    const HashPass = await bcrypt.hash(password, saltRounds);

    res.status(201).json({
      message: 'Usuário cadastrado com sucesso!'
    });
  } catch (error) {
    console.error("Erro no cadastro:", error);
    res.status(500).json({
      erro: "Erro interno do servidor",
    });
  }
});

export default router;
