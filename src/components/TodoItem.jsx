import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

function TodoItem(props) {
  const { name, isCompleted, id, todoList, setTodoList } = props;

  const deleteHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTodoList = todoList.filter((item) => item.id !== id);
        setTodoList(updatedTodoList);

        toast.success("deleted liao !");
      }
    });
  };

  const updateHandler = () => {
    const updatedTodoList = [...todoList];
    const selected = updatedTodoList.find((item) => item.id === id);
    selected.isCompleted = !selected.isCompleted;
    setTodoList(updatedTodoList);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center p-2">
      <div>
        <button
          className={`btn btn-sm ${isCompleted ? "btn-success" : "btn-light"}`}
          onClick={updateHandler}
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
      <button className="btn btn-sm btn-danger" onClick={deleteHandler}>
        <i class="bi bi-trash"></i>
      </button>
    </li>
  );
}

export default TodoItem;
