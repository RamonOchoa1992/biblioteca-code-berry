import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Prestamo } from "./Prestamo.js";

export const Libro = sequelize.define(
  "libro",
  {
    idL: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    isbn: {
      type: DataTypes.STRING,
    },
    disponible: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: false,
  }
);

Libro.hasMany(Prestamo, { foreignKey: "idL", sourceKey: "idL" });
Prestamo.belongsTo(Libro, { foreignKey: "idL", targetKey: "idL" });
