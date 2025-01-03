import { useState } from "react";
import ListItems from "./components/ListItems";
import FormTodo from "./components/FormTodo";
import Layout from "./layouts/Layout";

function App() {
  const [todos, setTodos] = useState([]);

  function handleDelete(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function handleChecked(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <>
      <Layout>
        <h1 className="title">Mangoo Task 🥭</h1>
        <p className="subtitle is-5">Stay Organized and Productive 🔥</p>
        <FormTodo todos={todos} setTodos={setTodos} />

        <ListItems
          todos={todos}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      </Layout>
    </>
  );
}

export default App;
