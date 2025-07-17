import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todoList, setTodoList } = props;
  return (
    <>
      <h3 className="card-title mb-3">My Todo List</h3>
      {todoList.map((todo, index) => {
        const { name, id, isCompleted } = todo;
        return (
          <TodoItem
            key={id}
            name={name}
            isCompleted={isCompleted}
            id={id}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        );
      })}
    </>
  );
}

export default TodoList;
