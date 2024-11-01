import React from 'react';

const Login = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Login</h1>
            <form>
                <input type="email" placeholder="Email" className="border rounded p-2 mb-2 w-full" />
                <input type="password" placeholder="Password" className="border rounded p-2 mb-2 w-full" />
                <button type="submit" className="bg-blue-500 text-white rounded p-2">Login</button>
            </form>
        </div>
    );
};

export default Login;
