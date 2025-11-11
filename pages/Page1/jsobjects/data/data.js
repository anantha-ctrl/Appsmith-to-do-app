export default {
  todos: [
    { id: 1, name: "Welcome to my world", completed: false },
    { id: 2, name: "Today go to beach", completed: true },
  ],

  // Fetch all todos
  getAll() {
    return this.todos;
  },

  // Add todo
  addTodo(name) {
    const newTodo = {
      id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1,
      name: name,
      completed: false
    };

    this.todos.push(newTodo);
    return this.todos;
  },

  // Update todo
  updateTodo(id, newName) {
    this.todos = this.todos.map(item =>
      item.id === id ? { ...item, name: newName } : item
    );
    return this.todos;
  },

  // Delete todo
  deleteTodo(id) {
    this.todos = this.todos.filter(item => item.id !== id);
    return this.todos;
  },

  // Toggle completed
  toggleComplete(id, isChecked) {
    this.todos = this.todos.map(item =>
      item.id === id ? { ...item, completed: isChecked } : item
    );
    return this.todos;
  }
};
