import React from 'react';
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
    return (
        <div className="w-full min-h-[75vh] flex items-center justify-center bg-gray-50 py-12 px-4">
            {/* Clerk handles the entire UI and logic! */}
            <SignIn 
                routing="path" 
                path="/login" 
                signUpUrl="/register" 
            />
        </div>
    );
};

export default Login;