import React from 'react';
import './toast.css';
import { IToast, useToastContext } from './ToastProvider';

const Toast: React.FC<IToast> = (toast) => {
    const { hideToast } = useToastContext();
    const { id, message, timeout } = toast;
    setTimeout(() => {
        hideToast(id);
    }, timeout);
    return <div className="toast">{message}</div>;
};

export default React.memo(Toast);
