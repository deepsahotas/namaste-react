import React, { useCallback, useState } from 'react';
import Notification from '../Notification';

const useNotification = (position) => {
  const [notification, setNotification] = useState(null);
  let timer;
  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timer);
    setNotification(notificationProps);
    timer = setTimeout(() => {
      setNotification(null);
    }, notificationProps.duration);
    notificationProps.onClose = () => {
      setNotification(null);
    };
  }, []);

  const notificationComponent = notification ? (
    <div className={`${position}`}>
      <Notification {...notification} />
    </div>
  ) : null;

  return { notificationComponent, triggerNotification };
};

export default useNotification;
