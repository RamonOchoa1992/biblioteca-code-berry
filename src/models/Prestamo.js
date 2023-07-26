import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";

export const Prestamo = sequelize.define(
  "prestamo",
  {
    idP: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fechaPrestamo: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
  },
  {
    timestamps: false,
  }
);
