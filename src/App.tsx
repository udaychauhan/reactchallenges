import React from 'react';
import ToastContainer from './components/Toast/ToastContainer';
import { useToastContext } from './components/Toast/ToastProvider';
const App: React.FC = () => {
    const { showToast, hideToast, toasts } = useToastContext();
    return (
        <div>
            <ToastContainer />
            <button
                onClick={() => {
                    showToast('ye le');
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

export default App;
