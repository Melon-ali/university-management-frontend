import LoginPage from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "UMS/login"
}

const Login = () => {
    return (
        <>
            <LoginPage />
        </>
    );
};

export default Login;