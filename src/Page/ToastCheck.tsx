import { useToastContext } from '../components/Toast/ToastProvider';
import React from 'react';

const ToastCheck: React.FC = () => {
    const { showToast } = useToastContext();
    return (
        <div>
            <button
                onClick={() => {
                    showToast(`This toast is generated at ${new Date().getTime()}`);
                }}
            >
                Add Toast
            </button>
            <button
                onClick={() => {
                    // hideToast(toastId);
                }}
            >
                Remove Toast
            </button>
        </div>
    );
};

export default ToastCheck;
