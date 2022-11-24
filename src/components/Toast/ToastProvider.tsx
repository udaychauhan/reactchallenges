import React, { createContext, useContext, useState } from 'react';

export const ToastContext = createContext({
    text: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    showToast: (text: string) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    hideToast: () => {},
});

interface ToastProviderProps {
    children: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
    const [text, setText] = useState('');
    const hideToast = () => {
        setText('');
    };
    const showToast = (text: string) => {
        setText(text);
    };
    return <ToastContext.Provider value={{ hideToast, showToast, text }}>{children}</ToastContext.Provider>;
};

export const useToastContext = () => {
    return useContext(ToastContext);
};
