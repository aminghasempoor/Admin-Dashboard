"use client"
import { useContext } from "react";
import { LoadingContext } from "@/lib/app/context/loading";

const useLoading = () => {
    const { setLoadingPage } = useContext(LoadingContext);

    return { setLoadingPage };
};

export default useLoading;
