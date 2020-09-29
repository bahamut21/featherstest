const app = require('../../src/app');

describe('\'cars\' service', () => {
  it('registered the service', () => {
    const service = app.service('cars');
    expect(service).toBeTruthy();
  });
});
