// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const cars = sequelizeClient.define('cars', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'la 4L de jacky'
    },
    maker: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  cars.associate = function ({engine_cars}) {
    // Define associations here
    cars.belongsTo(engine_cars);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return cars;
};
