"use client";
import { createContext, useState } from "react";
import LoadingHardPage from "@/components/LoadingHardPage";
export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [loadingPage, setLoadingPage] = useState(false);

    return (
        <LoadingContext.Provider value={{ loadingPage, setLoadingPage }}>
            <LoadingHardPage label={"Loading ..."} loading={loadingPage} />
            {children}
        </LoadingContext.Provider>
    );
};
