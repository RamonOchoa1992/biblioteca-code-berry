import { Lector } from "../models/Lector.js";

export const creandoLector = async (req, res) => {
  const { nombre } = req.body;

  try {
    const nuevoLector = await Lector.create({
      nombre,
    });
    res.json(nuevoLector);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error en la conexión",
    });
  }
};
