import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="flex absolute top-0 left-0 right-0 bottom-0 justify-center items-center">
      <div className="">{children}</div>
    </div>,
    document.getElementById('modal'),
  );
}

export { Modal };
