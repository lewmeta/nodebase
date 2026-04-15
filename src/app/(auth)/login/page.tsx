import { LoginForm } from "@/features/auth/components/login-form";
import { requireUnauth } from "@/lib/auth-utils";

const Login = async () => {
    await requireUnauth();
    
    return (
        <div className="flex flex-col items-center justify-center gap-6 p-6 bg-muted min-h-svh md:p-10">
            <div className="flex flex-col w-full max-w-sm gap-6">
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;