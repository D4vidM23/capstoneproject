'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rock.init({
    seller: DataTypes.STRING,
    product: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    weightvolume: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Rock',
    timestamps: false,
    tableName: 'rock_sells'
  });
  return Rock;
};

