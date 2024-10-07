import SignIn from "@/components/SignIn";
import WithAuthMiddleware from "@/middlewares/WithAuth";
import WithoutAuthMiddleware from "@/middlewares/WithoutAuth";

export default function SignInPage() {
    return (
        <WithoutAuthMiddleware>
            <SignIn/>
        </WithoutAuthMiddleware>
    );
}
