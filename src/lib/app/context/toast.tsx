"use client"
import {createContext, useReducer} from "react";
import {toast} from "@/hooks/use-toast";

export const ToastContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "PUSH":
            return {
                ...state,
                [action.toast_type]: [...state[action.toast_type], action.toast_id]
            };
        case "DISMISS":
            action.toast_type.map((item) => {
                state[item].map((id) => {
                    toast({description: `${id}`});
                })
                state[item] = []
            });
            return state;
    }
};

export const ToastProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        pending: [],
        error: [],
        warning: [],
        success: []
    });

    return (
        <ToastContext.Provider value={{state, dispatch}}>
            {children}
        </ToastContext.Provider>
    );
};
