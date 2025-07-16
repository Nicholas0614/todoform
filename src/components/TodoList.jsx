import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todoList } = props;
  return (
    <>
      <h3 className="card-title mb-3">My Todo List</h3>
      {todoList.map((todo, index) => {
        const { name, id } = todo;
        return <TodoItem key={id} name={name} />;
      })}
    </>
  );
}

export default TodoList;
