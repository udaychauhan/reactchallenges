import React, { createContext, useContext, useState } from 'react';

const DEFAULT_TOAST_TIME = 3000;

export interface IToast {
    id: number;
    message: string;
    timeout: number;
}

export type Toasts = IToast[];

interface IToastContext {
    toasts: Toasts;
    showToast: (text: string, timeout?: number) => void;
    hideToast: (toastId: number) => void;
    hideAllToasts: () => void;
}
export const ToastContext = createContext<IToastContext>({
    toasts: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    showToast: (text: string, timeout?: number) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    hideToast: (toastId: number) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    hideAllToasts: () => {},
});

interface ToastProviderProps {
    children: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
    const [toasts, setToasts] = useState<Toasts>([]);
    const hideAllToasts = () => {
        setToasts([]);
    };
    const showToast = (text: string, timeout?: number) => {
        const newToastId = toasts.length > 0 ? toasts[toasts.length - 1].id + 1 : 1;
        const toast: IToast = { id: newToastId, message: text, timeout: DEFAULT_TOAST_TIME };
        const updatedToastsList = [...toasts, toast];
        setToasts(updatedToastsList);
    };
    const hideToast = (toastId: number) => {
        const updatedToastList = toasts.filter((toast) => toast.id !== toastId);
        setToasts(updatedToastList);
    };
    return (
        <ToastContext.Provider value={{ hideAllToasts, showToast, toasts, hideToast }}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToastContext = () => {
    const { hideToast, showToast, toasts, hideAllToasts } = useContext(ToastContext);
    return { hideToast, showToast, toasts, hideAllToasts };
};
