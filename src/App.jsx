import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { Toaster } from "react-hot-toast";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Task 1",
      isCompleted: false,
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
        style={{ maxWidth: "500px", margin: "80px auto" }}
      >
        <div className="card-body">
          <div>
            <TodoList todoList={todoList} setTodoList={setTodoList} />
          </div>
          <AddTodoForm todoList={todoList} setTodoList={setTodoList} />
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
