import React, { useEffect } from 'react';
import './toast.css';
import Toast from './Toast';
import { useToastContext } from './ToastProvider';

const ToastContainer: React.FC = () => {
    const { text, hideToast } = useToastContext();
    useEffect(() => {
        if (text) {
            setTimeout(() => {
                hideToast();
            }, 1000);
        }
    }, [text]);
    if (text) {
        return (
            <div className="toast-container">
                <Toast />
            </div>
        );
    }
    return null;
};

export default ToastContainer;
