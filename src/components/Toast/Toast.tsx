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
    return (
        <div className="toast" style={{ backgroundPositionY: `${toast.id * 10} px`, position: 'sticky' }}>
            {message + ' ' + toast.id}
        </div>
    );
};

export default React.memo(Toast);
