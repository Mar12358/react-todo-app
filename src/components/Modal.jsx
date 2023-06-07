import { useState, useRef } from 'react';
import useOnClickOutside from '../useOnClickOutside';

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, openModal, () => setOpenModal(false));
  return (
    <div className="modal">
      <button type="button" onClick={() => setOpenModal(true)}>Modal</button>
      {openModal && (
        <div ref={ref} className="modalContent">
          <span
            onClick={() => setOpenModal(false)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setOpenModal(false);
              }
            }}
            role="button"
            tabIndex={0}
          >
            Visible, non-interactive element with click handler
          </span>
          <div>Modal content here</div>
        </div>
      )}
    </div>
  );
};
export default Modal;
