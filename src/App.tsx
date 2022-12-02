import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToastCheck from './Page/ToastCheck';
import ToastCheckAdv from './Page/ToastCheckAdv';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/toast-check" element={<ToastCheck />} />
                <Route path="/" element={<ToastCheckAdv />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
