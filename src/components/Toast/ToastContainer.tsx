import React from 'react';
import ReactDOM from 'react-dom';
import './toast.css';
import Toast from './Toast';
import { useToastContext } from './ToastProvider';

// TODO: toasts when removed gets removed from view but as the state changes the toast re-renders
// so if we subscribe to state change then the component will re renders
// its similar to problem that the whole list re renders when we remove a list item

const ToastContainer: React.FC = () => {
    const { toasts } = useToastContext();
    return (
        <div className="toast-container">
            {toasts.map((toast) => {
                return <Toast key={toast.id} {...toast} />;
            })}
        </div>
    );
};

export default ToastContainer;
