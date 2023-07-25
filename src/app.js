import express from "express";
import cors from "cors";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Bienvenido");
});

app.use((req, res) => {
  res.status(404).json({
    mensaje: "Endpoint no encontrado",
  });
});

export default app;
