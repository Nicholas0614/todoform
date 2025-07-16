function TodoItem(props) {
  const { name, isCompleted } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button
          className={`btn btn-sm ${isCompleted ? "btn-success" : "btn-light"}`}
        >
          <i className="bi bi-check-square"></i>
        </button>
        <span
          className={`ms-2 ${
            isCompleted ? " text-decoration-line-through" : ""
          }`}
        >
          {name}
        </span>
      </div>
      <button className="btn btn-sm btn-danger">
        <i class="bi bi-trash"></i>
      </button>
    </li>
  );
}

export default TodoItem;
