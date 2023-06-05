import '../styles/app.css';
import TodosLogic from './TodosLogic';
import Navbar from './Navbar';
import Modal from './Modal';

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Navbar />
        <Modal />
        <TodosLogic />
      </div>
    </div>
  );
};
export default TodoApp;