"use client"
import useUser from "@/lib/app/hooks/useUser";
import WithAuthComponent from "@/core/components/middlewares/WithAuthComponent";

const WithAuthMiddleware = ({children}) => {
    const { isAuth } = useUser()
    return isAuth ? <>{children}</> : <WithAuthComponent />;
};

export default WithAuthMiddleware;
