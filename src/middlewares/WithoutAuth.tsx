"use client"
import useUser from "@/lib/app/hooks/useUser";
import WithoutAuthComponent from "@/core/components/middlewares/WithoutAuthComponent";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

const WithoutAuthMiddleware = ({children}) => {
    const {isAuth,user} = useUser();
    const router = useRouter()

    useEffect(() => {
        if (!isAuth) return;
        const timer = setTimeout(() => {
            router.replace(`/dashboard/${user.role}`);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [isAuth]);

    return isAuth ? (
        <WithoutAuthComponent />
    ) : (
        <>{children}</>
    );
};

export default WithoutAuthMiddleware;
