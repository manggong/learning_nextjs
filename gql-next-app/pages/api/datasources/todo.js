import { RESTDataSource } from 'apollo-datasource-rest';

class TodoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://jsonplaceholder.typicode.com';
  }

  async getAllTodos() {
    const response = await this.get('todos');
    return Array.isArray(response)
      ? response.map((todo) => this.todoReducer(todo))
      : [];
  }

  todoReducer(todo) {
    return {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    };
  }
}

export default TodoAPI;
