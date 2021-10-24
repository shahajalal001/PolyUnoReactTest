import { useRouter } from 'next/router'
import {useState} from "react";
import useAxios from "../app/axios";
import Swal from "sweetalert2";
const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onEmailChange = (event) => {
        event.preventDefault();
        event.persist();
        setEmail(event.target.value)
    }
    const onPasswordChange = (event) => {
        event.preventDefault();
        event.persist();
        setPassword(event.target.value)
    }

    const handleSubmit = async () => {
        if(email.length > 0 && password.length > 0){
            const axios = useAxios()
            let {data} = await axios.post(`/admin/login`, {
                email,
                password
            })
            if(data?.error === false) {
                await Swal.fire({
                    title: "Success",
                    html: JSON.stringify(data.data),
                    icon: 'success'
                })
            } else {
                await Swal.fire({
                    title: "Error",
                    html: data?.msg,
                    icon: 'error'
                })
            }
        }else{
            await Swal.fire({
                title: "Error",
                html: 'Put email and password',
                icon: 'error'
            })
        }

    }

    return (
        <div className="py-20 h-screen bg-gray-300 px-2">
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
                <div className="md:flex">
                    <div className="w-full p-3 px-6 py-10">
                        <div className="text-center"><span className="text-xl text-gray-700">Login Form</span>
                        </div>
                        <div className="mt-4 relative"><span
                            className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Email</span> <input
                            onChange={(e) => onEmailChange(e)}
                            value={email}
                            type="text"
                            className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/></div>
                        <div className="mt-4 relative"><span
                            className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Password</span> <input
                            onChange={(e) => onPasswordChange(e)}
                            value={password}
                            type="password"
                            className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/></div>
                        <div className="mt-4">
                            <button className="h-12 w-full bg-red-600 text-white rounded hover:bg-red-700" onClick={handleSubmit}> Login </button>
                        </div>
                        <div className="mt-4">
                            <button className="h-12 w-full bg-red-600 text-white rounded hover:bg-red-700" onClick={() => router.push('/signup')}> Go to Signup </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login