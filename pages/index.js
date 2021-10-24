import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import useAxios from "../app/axios";
import {useRouter} from "next/router";
import Loader from "../components/loader";

const Home = () => {
    const axios = useAxios()
    const router = useRouter()
    useEffect(() => {
        axios.post('/admin/verify', {token: Cookies.get('token')}).then(({error, data}) => {
            if (data?.error === false) {
                router.push('/questions')
            } else {
                router.push('/login')
            }
        })
    })

    return (
        <div className="flex h-screen justify-center items-center">
            <Loader/>
        </div>
    )
}
export default Home