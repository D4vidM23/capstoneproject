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
            // Rock.belongsTo(models.Rock, {
            //   as: 'author',
            //   foreignKey: 'creator_name',
            // });
      }
    };
    Rock.init({
        creator_name: DataTypes.STRING,
        product_name: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Rock',
        timestamps: false,
        tableName: 'rock_article',
    });
    return Rock;
};