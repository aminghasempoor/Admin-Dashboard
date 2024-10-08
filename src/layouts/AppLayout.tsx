"use client"
import useLoading from "@/lib/app/hooks/useLoading";
import useUser from "@/lib/app/hooks/useUser";
import {useEffect} from "react";
import {Toaster} from "@/components/ui/toaster";

function AppLayout({children}) {
    const {setLoadingPage} = useLoading();
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
        setLoadingPage(false);
    }, [token, isAuth]);

    return (
        <>
            <Toaster />
            {children}
        </>
    );
}

export default AppLayout;
