import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '../styles/TodoItem.module.css';
import { useAuthContext } from '../context/AuthContext';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  const { user } = useAuthContext();
  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        {user && <button type="button" onClick={handleEditing}>Edit</button>}
        {!user
        && (
          <li className="log-in">
            <span>Log in to edit to-dos</span>
          </li>
        )}
        <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
        {itemProp.title}
      </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.node.isRequired,
  handleChange: PropTypes.node.isRequired,
  delTodo: PropTypes.node.isRequired,
  setUpdate: PropTypes.node.isRequired,
};
export default TodoItem;
