const { RESTDataSource } = require('apollo-datasource-rest');

class DummyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost/api';
  }

  async getDummy() {
    return this.get(`dummy`);
  }
}

export default DummyAPI;
