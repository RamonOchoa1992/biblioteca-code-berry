import express from "express";
import cors from "cors";
import LibrosRoutes from "./routes/libros.routes.js";
import PrestamosRoutes from "./routes/prestamos.routes.js";
import LectorRoutes from "./routes/lectors.routes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Bienvenido");
});

app.use("/api", LibrosRoutes);
app.use("/api", PrestamosRoutes);
app.use("/api", LectorRoutes);

app.use((req, res) => {
  res.status(404).json({
    mensaje: "Endpoint no encontrado",
  });
});

export default app;
