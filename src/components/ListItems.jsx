import { FaTrash } from "react-icons/fa6";

function ListItems({ todos, handleChecked, handleDelete }) {
  return (
    <div className="panel is-primary mt-4 w-100">
      {todos.map((todo, index) => (
        <div
          className="panel-block is-justify-content-space-between"
          key={index}
        >
          <div className="is-flex is-align-items-center">
            <span className="panel-icon">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleChecked(todo.id)}
              />
            </span>
            <span
              className={
                todo.isCompleted ? "has-text-grey-light is-completed" : ""
              }
            >
              {todo.text}
            </span>
          </div>
          <button
            className="button is-danger is-small"
            onClick={() => handleDelete(todo.id)}
            aria-label="delete"
          >
            <span className="icon">
              <FaTrash />
            </span>
          </button>
        </div>
      ))}
      {todos.length === 0 && (
        <div className="panel-block">
          <em>No tasks yet</em>
        </div>
      )}
    </div>
  );
}

export default ListItems;
