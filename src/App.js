import TodoList from './todo/TodoList';
function App() {
  const todos = [
    { id: 1, completed: false, title: 'Купить дом' },
    { id: 2, completed: false, title: 'Купить одежду' },
    { id: 3, completed: false, title: 'Купить еду' },
  ];
  function toggleTodo(id) {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }
  return (
    <div className="wrapper">
      <h1>React tutorial </h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
