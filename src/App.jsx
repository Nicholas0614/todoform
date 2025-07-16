import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      name: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      name: "Task 3",
      isCompleted: false,
    },
  ]);

  return (
    <>
      <div
        className="card rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "60px auto" }}
      >
        <div className="card-body">
          <TodoList todoList={todoList} />
          <AddTodoForm todoList={todoList} setTodoList={setTodoList} />
        </div>
      </div>
    </>
  );
}

export default App;
