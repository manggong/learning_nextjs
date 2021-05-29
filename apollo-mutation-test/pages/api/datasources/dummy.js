const { RESTDataSource } = require('apollo-datasource-rest');

class DummyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost/api';
  }

  // an example making an HTTP POST request
  async postDummy(dummy) {
    return this.post(
      `dummy`, // path
      dummy, // request body
    );
  }

  // an example making an HTTP PUT request
  async newDummy(dummy) {
    return this.put(
      `dummy`, // path
      dummy, // request body
    );
  }

  // an example making an HTTP PATCH request
  async updateDummy(dummy) {
    return this.patch(
      `dummy`, // path
      { id: dummy.id, dummy }, // request body
    );
  }

  // an example making an HTTP DELETE request
  async deleteDummy(dummy) {
    return this.delete(
      `dummy`,
      { id: dummy.id }, // path
    );
  }
}

export default DummyAPI;
