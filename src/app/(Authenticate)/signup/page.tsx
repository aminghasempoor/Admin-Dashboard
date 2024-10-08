import SignUp from "@/components/SignUp";
import WithoutAuthMiddleware from "@/middlewares/WithoutAuth";
import {Suspense} from "react";
import Loading from "./loading";

export default function SignUpPage() {
    return (
        <Suspense fallback={<Loading/>}>
            <WithoutAuthMiddleware>
                <SignUp/>
            </WithoutAuthMiddleware>
        </Suspense>
    );
}
