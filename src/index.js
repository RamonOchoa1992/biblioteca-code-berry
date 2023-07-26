import app from "./app.js";
import { PORT } from "./config.js";
import { sequelize } from "./database/database.js";

import "./models/Libro.js";
import "./models/Lector.js";
import "./models/Prestamo.js";

const main = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT);
    console.log(`Server on PORT ${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
