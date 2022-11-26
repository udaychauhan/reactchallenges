import React, { createContext, useContext, useState } from 'react';

export interface IToast {
    id: number;
    message: string;
    timeout: number;
}

export type Toasts = IToast[];

interface IToastContext {
    toasts: Toasts;
    showToast: (text: string) => void;
    hideToast: (toastId: number) => void;
    hideAllToasts: () => void;
}
export const ToastContext = createContext<IToastContext>({
    toasts: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    showToast: (text: string) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    hideToast: (toastId: number) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    hideAllToasts: () => {},
});

interface ToastProviderProps {
    children: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
    const [toasts, addToast] = useState<Toasts>([]);
    const hideAllToasts = () => {
        addToast([]);
    };
    const showToast = (text: string, timeout?: number) => {
        const toastsByDesc = toasts.sort((toastA, toastB) => toastB.id - toastA.id);
        const newToastId = toastsByDesc.length > 0 ? toastsByDesc[0].id + 1 : 1;
        const toast: IToast = { id: newToastId, message: text, timeout: timeout || 2000 };
        const updatedToastsList = toasts.concat(toast);
        addToast(updatedToastsList);
    };
    const hideToast = (toastId: number) => {
        const updatedToastList = toasts.filter((toast) => toast.id !== toastId);
        addToast(updatedToastList);
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
