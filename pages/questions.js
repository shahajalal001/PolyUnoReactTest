import useAxios from "../app/axios";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {useRouter} from "next/router";

const Questions = () => {
    let router = useRouter()
    const axios = useAxios()
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        axios.post('/admin/get-questions').then(({error, data}) => {
            if (data?.error === false) {
                setQuestions(data.data)
            } else {
                Swal.fire({
                    title: "Error",
                    html: data?.msg,
                    icon: 'error'
                })
            }
        })
    })
    const handleAddNew = async () => {
        await router.push('/questioncreate')
    }
    return (
        <div className="bg-white rounded-lg shadow-lg py-6">
            <div className='flex justify-end mr-7'>
                <button
                    className="mb-3 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => handleAddNew()}
                >
                    Add New
                </button>
            </div>

            <div className="block overflow-x-auto mx-6">
                <table className="w-full text-left rounded-lg">
                    <thead>
                    <tr className="text-gray-800 border border-b-0">
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">Question Name</th>
                        <th className="px-4 py-3">ID</th>
                        <th className="px-4 py-3">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        questions.map((question, index) => {
                            return(
                                <tr className="w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border" key={`table-question-${index}`}>
                                    <td className="px-4 py-4">{++index}</td>
                                    <td className="px-4 py-4">{`Question ${index}`}</td>
                                    <td className="px-4 py-4">{question._id}</td>
                                    <td className="text-center py-4 flex flex-row gap-4">
                                        <button >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                        <button onClick={event => {
                                            let link = 'https://polyuno.shahajalalit.com/' + question._id
                                            Swal.fire({
                                                title: "Copy Link",
                                                html: link
                                            })
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Questions