import {Sequelize} from "sequelize";
import db from "../config/Database.js"

const {DataTypes} = Sequelize;

const Category = db.define("category", {
     name: {
          type: DataTypes.STRING,
     }
}, {
     freezeTableName: true
})

export default Category;