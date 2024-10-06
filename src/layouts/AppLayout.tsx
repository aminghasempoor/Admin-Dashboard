"use client"
import useLoading from "@/lib/app/hooks/useLoading";
import useUser from "@/lib/app/hooks/useUser";
import {useEffect} from "react";

function AppLayout({children}) {
    const {setLoadingPage} = useLoading();
    console.log("setLoadingPage",setLoadingPage)
    const {token, isAuth} = useUser();

    useEffect(() => {
        if (token) {
            if (isAuth) {
                setLoadingPage(false);
                return;
            }
            setLoadingPage(true);
            return;
        }
        setLoadingPage(true);
    }, [token, isAuth]);


    return (<>{children}</>);
}

export default AppLayout;
