import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastProvider } from './components/Toast/ToastProvider';
import './index.css';

// TODO: a provider will wrap the App. this provider will be exported by toast container
// the hook that we will export from toast container to launch the toast, will be used by other components or pages
//          the hook within itself will have context related action to set toast state
// the showToash call from the other pages will be read by ToastContainer and the toast will be read
//          the toast container will have context related listener to read toast state
// where does portal come in the picture
// portal will be used to attach toast container to body ??
ReactDOM.render(
    <React.StrictMode>
        <ToastProvider>
            <App />
        </ToastProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
