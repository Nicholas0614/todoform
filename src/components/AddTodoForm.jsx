import Swal from "sweetalert2";

function AddTodoForm(props) {
  const { todoList, setTodoList } = props;
  return (
    <form className="mt-3 d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Add new item...."
        id="labelname"
        required
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();

          if (labelname.value === "") {
            Swal.fire({
              title: "ENTER SOMETHING LOL",
              icon: "error",
              draggable: true,
            });
          } else {
            setTodoList([
              ...todoList,
              {
                id: Math.random(),
                name: labelname.value,
                isCompleted: false,
              },
            ]);
          }
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
