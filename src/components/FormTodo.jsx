import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

function FormTodo({ todos, setTodos }) {
  const [todo, setTodo] = useState({ text: "", isCompleted: false });
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.text.trim().length == 0)
      return setErrorMessage("Please, fill the field");

    setTodos([...todos, todo]);
    setTodo({ text: "", isCompleted: false });
    setErrorMessage("");
    e.target[0].value = "";
  }

  return (
    <form onSubmit={handleSubmit} className="w-100 mb-4">
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input"
            placeholder="Write you task here..."
            type="text"
            value={todo.title}
            onChange={(e) =>
              setTodo((prevState) => ({
                ...prevState,
                id: Date.now(),
                text: e.target.value,
              }))
            }
          />
        </div>
        <div className="control">
          <button type="submit" className="button is-primary">
            <span className="icon">
              <FaPlus />
            </span>
            <span>Add</span>
          </button>
        </div>
      </div>
      {errorMessage && <p className="help">{errorMessage}</p>}
    </form>
  );
}

export default FormTodo;
