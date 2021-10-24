import { useRouter } from 'next/router'
import {useState} from "react";
import useAxios from "../app/axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
const SignUp = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
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
    const onFirstNameChange = (event) => {
        event.preventDefault();
        event.persist();
        setFirstName(event.target.value)
    }
    const onLastNameChange = (event) => {
        event.preventDefault();
        event.persist();
        setLastName(event.target.value)
    }

    const handleSubmit = async () => {
        if(email.length > 0 && password.length > 0 && first_name.length > 0 && last_name.length > 0){
            const axios = useAxios()
            let {data} = await axios.post(`/admin/add`, {
                email,
                password,
                first_name,
                last_name
            })
            if(data?.error === false) {
                Cookies.set('token', data.token)
                await router.push('/questions')
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
                html: 'Properly fill all field',
                icon: 'error'
            })
        }

    }
    return (
        <div className="py-20 h-screen bg-gray-300 px-2">
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
                <div className="md:flex">
                    <div className="w-full p-3 px-6 py-10">
                        <div className="text-center"><span className="text-xl text-gray-700">Registration Form</span>
                        </div>
                        <div className="mt-3 relative"><span
                            className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">First name</span> <input
                            onChange={(e) => onFirstNameChange(e)}
                            value={first_name}
                            type="text"
                            className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/></div>
                        <div className="mt-4 relative"><span
                            className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Last name</span> <input
                            onChange={(e) => onLastNameChange(e)}
                            value={last_name}
                            type="text"
                            className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/></div>
                        <div className="mt-4 relative"><span
                            className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Email</span> <input
                            onChange={(e) => onEmailChange(e)}
                            value={email}
                            type="email"
                            className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/></div>
                        <div className="mt-4 relative"><span
                            className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Password</span> <input
                            onChange={(e) => onPasswordChange(e)}
                            value={password}
                            type="password"
                            className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/></div>
                        <div className="mt-4">
                            <button className="h-12 w-full bg-red-600 text-white rounded hover:bg-red-700" onClick={handleSubmit}> Sign Up </button>
                        </div>
                        <div className="mt-4">
                            <button className="h-12 w-full bg-red-600 text-white rounded hover:bg-red-700" onClick={() => router.push('/login')}> Go to Login </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp