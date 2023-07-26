import { Prestamo } from "../models/Prestamo.js";
import { Libro } from "../models/Libro.js";
import { Lector } from "../models/Lector.js";

export const creandoPrestamo = async (req, res) => {
  const { idL, idLec } = req.body;

  try {
    const libro = await Libro.findByPk(idL);
    const lector = await Lector.findByPk(idLec);

    if (!libro) {
      return res.status(400).json({
        mensaje: "El libro no se encuentra en la base de datos.",
      });
    }

    if (!lector) {
      return res.status(400).json({
        mensaje: "El lector no se encuentra en la base de datos.",
      });
    }

    const estaDisponible = libro.disponible;
    if (!estaDisponible) {
      res.status(400).json({
        mensaje:
          "El libro que desea prestar no se encuentra disponible para ese uso.",
      });
    } else {
      libro.disponible = 0;
      await libro.save();
      const nuevoPrestamo = await Prestamo.create({
        idL,
        idLec,
      });
      res.json(nuevoPrestamo);
    }
  } catch (error) {
    res.status(500).json({
      mensaje: "Error en la conexión",
    });
  }
};
