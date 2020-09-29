// Initializes the `engine_cars` service on path `/engine-cars`
const { EngineCars } = require('./engine_cars.class');
const createModel = require('../../models/engine_cars.model');
const hooks = require('./engine_cars.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/engine-cars', new EngineCars(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('engine-cars');

  service.hooks(hooks);
};
