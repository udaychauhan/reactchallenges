import React, { memo, useEffect, useState } from 'react';
import './toast.css';
import Toast from './Toast';
import { Toasts, useToastContext } from './ToastProvider';

// TODO: toasts when removed gets removed from view but as the state changes the toast re-renders
// so if we subscribe to state change then the component will re renders
// its similar to problem that the whole list re renders when we remove a list item
const ToastContainer: React.FC = () => {
    const { toasts, hideToast, hideAllToasts, showToast } = useToastContext();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleToasts = (toasts: Toasts) => {};
    useEffect(() => {
        handleToasts(toasts);
    }, [toasts]);
    if (toasts.length) {
        return (
            <div className="toast-container" style={{ display: 'flex', flexDirection: 'column' }}>
                {toasts.map((toast) => {
                    return <Toast key={toast.id} {...toast} />;
                })}
            </div>
        );
    }
    return null;
};

export default ToastContainer;
