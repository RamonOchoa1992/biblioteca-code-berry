import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Prestamo } from "./Prestamo.js";

export const Lector = sequelize.define(
  "lector",
  {
    idLec: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Lector.hasMany(Prestamo, { foreignKey: "idLec", sourceKey: "idLec" });
Prestamo.belongsTo(Lector, { foreignKey: "idLec", targetKey: "idLec" });
