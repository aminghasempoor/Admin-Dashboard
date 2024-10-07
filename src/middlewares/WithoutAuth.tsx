"use client"
import useUser from "@/lib/app/hooks/useUser";
import WithoutAuthComponent from "@/core/components/middlewares/WithoutAuthComponent";

const WithoutAuthMiddleware = ({children}) => {
    const {isAuth} = useUser();
    // useEffect(() => {
    //     if (!isAuth) return;
    //     const timer = setTimeout(() => {
    //         router.replace("/dashboard");
    //     }, 2000);
    //
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [isAuth]);

    return isAuth ? (
        <WithoutAuthComponent />
    ) : (
        <>{children}</>
    );
};

export default WithoutAuthMiddleware;
