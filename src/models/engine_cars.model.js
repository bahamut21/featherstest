// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const engineCars = sequelizeClient.define('engine_cars', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: new Date()
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  engineCars.associate = function ({cars}) {
    // Define associations here
    engineCars.hasMany(cars);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return engineCars;
};
