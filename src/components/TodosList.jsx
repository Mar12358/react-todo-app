import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todosProps, handleChange, delTodo, setUpdate,
}) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);
TodosList.propTypes = {
  todosProps: PropTypes.node.isRequired,
  handleChange: PropTypes.node.isRequired,
  delTodo: PropTypes.node.isRequired,
  setUpdate: PropTypes.node.isRequired,
};
export default TodosList;
