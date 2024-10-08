import SignUp from "@/components/SignUp";
import Loading from "@/app/(Authenticate)/signin/loading";
import {Suspense} from "react";
import WithoutAuthMiddleware from "./loading";

export default function SignUpPage() {
    return (
        <Suspense fallback={<Loading/>}>
            <WithoutAuthMiddleware>
                <SignUp />
            </WithoutAuthMiddleware>
        </Suspense>

    );
}
