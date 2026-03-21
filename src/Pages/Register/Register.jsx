import React from 'react';
import { SignUp } from "@clerk/clerk-react";

const Register = () => {
    return (
        <div className="w-full min-h-[75vh] flex items-center justify-center bg-gray-50 py-12 px-4">
            {/* Clerk handles the entire registration UI, email verification, and logic! */}
            <SignUp 
                routing="path" 
                path="/register" 
                signInUrl="/login" 
            />
        </div>
    );
};

export default Register;