const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Anime = sequelize.define(
  "animes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 500],
      },
    },
    image: DataTypes.TEXT,
    episodes: DataTypes.INTEGER,
  },
  {
    timestamps: true,
  }
);

module.exports = Anime;
