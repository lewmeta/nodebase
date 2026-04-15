import { RegisterForm } from "@/features/auth/components/register-form";
import { requireUnauth } from "@/lib/auth-utils";

const SignUp = async () => {

    await requireUnauth();
    return (
        <RegisterForm />
    );
}

export default SignUp;