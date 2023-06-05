import '../styles/app.css';
import TodosLogic from '../components/TodosLogic';
import Header from '../components/Header';
import Modal from '../components/Modal';

const Home = () => {
  return (
    <div className="todos">
      <Modal />
      <Header />
      <TodosLogic />
    </div>
  );
};
export default Home;
