import React from 'react';
import ToastContainer from './components/Toast/ToastContainer';
import { useToastContext } from './components/Toast/ToastProvider';
const App: React.FC = () => {
    const { showToast } = useToastContext();
    return (
        <div>
            <ToastContainer />
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

export default App;
