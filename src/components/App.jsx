import '../styles/app.css';
import TodosLogic from './TodosLogic';

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <TodosLogic />
      </div>
    </div>
  );
};
export default TodoApp;