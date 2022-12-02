import React, { useEffect } from 'react';
import './toast.css';
import { IToast, useToastContext } from './ToastProvider';

const Toast: React.FC<IToast> = (toast) => {
    const { message } = toast;
    const { hideToast } = useToastContext();
    useEffect(() => {
        const timeout = setTimeout(() => {
            hideToast(toast.id);
        }, toast.timeout);
        return () => clearTimeout(timeout);
    }, [toast]);
    const yPos = (toast.id - 1) * 100;
    return (
        <div style={{ color: 'red', top: `${yPos}px`, position: 'absolute' }} className="toast" key={toast.id}>
            {message + ' ' + toast.id}
        </div>
    );
};

export default React.memo(Toast);
