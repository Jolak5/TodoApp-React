import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import InputTodo from './InputTodo';

const TodoApp = () => {
  return (
    <>
    
      <Header />
      <TodosLogic />
    <InputTodo />
    </>
  );
};
export default TodoApp;
