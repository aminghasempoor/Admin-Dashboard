import SignIn from "@/components/SignIn";
import WithoutAuthMiddleware from "@/middlewares/WithoutAuth";
import {Suspense} from "react";
import Loading from "./loading";

export default function SignInPage() {
    return (
        <Suspense fallback={<Loading/>}>
            <WithoutAuthMiddleware>
                <SignIn/>
            </WithoutAuthMiddleware>
        </Suspense>
    );
}
