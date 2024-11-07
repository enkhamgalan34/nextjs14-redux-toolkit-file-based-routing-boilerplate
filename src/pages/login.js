import React, {useState} from "react";
import {Inter} from "next/font/google";
import {useRouter} from "next/router";
import {useLoginMutation} from '@/api/auth/auth';
import {useDispatch} from "@/store";
import { storeToken } from '@/store/authSlice';
const inter = Inter({subsets: ["latin"]});

export default function Login() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [onAction, resultAction] = useLoginMutation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Username:', username);
        console.log('Password:', password);
        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        onAction(formData)
            .then((res) => {
                if (res?.data?.status == 'OK') {
                    const token = res?.data?.token;
                    dispatch(storeToken(token));
                    router.push("/auth/mypage").then(null);
                } else {
                    router.push("/").then(null);
                    alert('User not found!');
                }
                console.log(res);
            })
            .catch((err) => console.log('loginMutation ERROR => ', err));
    };
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <h1>Login Page</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                    placeholder="Enter your username"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                    placeholder="Enter your password"
                    required
                />
            </div>
            <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200 hover:bg-blue-600 transition duration-200"
            >
                Log In
            </button>

            <a
                onClick={() => router.push("/")}
                className={'cursor-pointer bg-blue-500 text-white px-4 py-2 rounded'}
            >
                Home
            </a>
        </main>
    );
}
