import '../styles/app.css';
import TodosLogic from '../components/TodosLogic';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';

const Home = () => {
  return (
    <div className="todos">
      <Modal />
      <TodosLogic />
    </div>
  );
};
export default Home;
