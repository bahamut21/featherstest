const app = require('../../src/app');

describe('\'engine_cars\' service', () => {
  it('registered the service', () => {
    const service = app.service('engine-cars');
    expect(service).toBeTruthy();
  });
});
