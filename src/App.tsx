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
                    showToast('ye le khush rhe');
                }}
            >
                Click me
            </button>
        </div>
    );
};

export default App;
