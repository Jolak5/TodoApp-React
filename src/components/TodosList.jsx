import TodoItem from '@/components/TodoItem';

const TodosList = ({ todosProps }) => {
   

    return (
      <ul>
        {todosProps.map((todo) => (
          <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} />
        ))}
      </ul>
    );
  };
  export default TodosList;
  