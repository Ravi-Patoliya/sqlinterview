'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    product: DataTypes.STRING,
    quantity: DataTypes.STRING,
    created_by: {
      type:DataTypes.NUMBER,
    references:{
      model: { tableName: 'users' }, 
      key: 'id' 
    }},
    created_at:DataTypes.DATE
  }, {
    sequelize,
    timestamps:false,
    modelName: 'order',
  });
  return order;
};