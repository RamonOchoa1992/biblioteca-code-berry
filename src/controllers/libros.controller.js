import { Libro } from "../models/Libro.js";

export const obteniendoLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll();
    res.json(libros);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error en la conexión",
    });
  }
};

export const creandoLibro = async (req, res) => {
  const { nombre, isbn } = req.body;

  try {
    const libros = await Libro.findAll();
    const libro = libros.find(({ isbn: isbnE }) => isbnE === isbn);

    if (libro) {
      res.status(400).json({
        mensaje: "Ya existe un libro con el mismo isbn en la base de datos",
      });
    } else {
      const nuevoLibro = await Libro.create({
        nombre,
        isbn,
      });
      res.json(nuevoLibro);
    }
  } catch (error) {
    res.status(500).json({
      mensaje: "Error en la conexión",
    });
  }
};

export const eliminandoLibro = async (req, res) => {
  const { id } = req.params;

  try {
    const libro = await Libro.findByPk(id);

    if (!libro) {
      return res.status(400).json({
        mensaje: "El libro no se encuentra en la base de datos.",
      });
    }
    await Libro.destroy({
      where: {
        idL: id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error en la conexión",
    });
  }
};
