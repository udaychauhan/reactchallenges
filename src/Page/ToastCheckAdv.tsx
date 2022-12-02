import { useToastContext } from '../components/Toast/ToastProvider';
import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const ToastCheckAdv: React.FC = () => {
    const { showToast } = useToastContext();
    const navigate = useNavigate();
    return (
        <div>
            <button
                onClick={() => {
                    showToast(`This toast is generated at ${new Date().getTime()}`);
                }}
            >
                Add Toast
            </button>
            <div>Just a new page</div>
            <button
                onClick={() => {
                    navigate('/toast-check');
                }}
            >
                Go to toast check page
            </button>
        </div>
    );
};

export default ToastCheckAdv;
