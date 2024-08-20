import React from 'react';
import { FaCheck, FaCross, FaInfoCircle } from 'react-icons/fa';

const toasterIcon = {
  success: <FaCheck />,
  error: <FaCross />,
  info: <FaInfoCircle />,
};
const Notification = ({ type = 'success', message, onClose }) => {
  return (
    <div className={`notification ${type}`}>
      <span>{toasterIcon[type]}</span>
      <span>{message}</span>
      <button onClick={() => onClose()}>&times;</button>
    </div>
  );
};

export default Notification;
