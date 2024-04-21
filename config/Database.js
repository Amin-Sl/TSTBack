import { Sequelize } from "sequelize";

const db = new Sequelize("Javad","AdminJavad", "B(*tWTy(4uUA!wA@", {
     host:"localhost",
     dialect: "mysql",
});



export default db;