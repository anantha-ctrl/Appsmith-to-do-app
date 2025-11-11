export default {

  // Select item
  setSelected(item) {
    storeValue("selectedItem", item);
  },

  // Get todos for List widget
  getTodos() {
    return data.getAll();
  },

  // Update selected todo
  updateSelectedName(name) {
    const id = appsmith.store.selectedItem?.id;
    if (id) {
      data.updateTodo(id, name);
      storeValue("todos", data.getAll());
    }
  },

  // Delete todo
  deleteItem(id) {
    data.deleteTodo(id);
    storeValue("todos", data.getAll());
  },

  // Add todo
  addTodo(name) {
    data.addTodo(name);
    storeValue("todos", data.getAll());
  },

  // Checkbox toggle
  toggleComplete(id, isChecked) {
    data.toggleComplete(id, isChecked);
    storeValue("todos", data.getAll());
  }
};
