import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("postgres://user:pass@example.com:5432/dbname");

sequelize.define("User", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

export default sequelize