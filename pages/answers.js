import useAxios from "../app/axios";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {useRouter} from "next/router";

const Answers = () => {
    const router = useRouter()
    const { _id } = router.query
    const axios = useAxios()
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        axios.post('/admin/get-answers', {_id}).then(({error, data}) => {
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
    const handleModal = async (answers) => {
        console.log(answers)
        await router.push({pathname: '/answerview', query: {data: JSON.stringify(answers)}})
    }
    return (
        <div>
            <div className="bg-white rounded-lg shadow-lg py-6">
                <div className="block overflow-x-auto mx-6">
                    <table className="w-full text-left rounded-lg">
                        <thead>
                        <tr className="text-gray-800 border border-b-0">
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Answer Name</th>
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
                                        <td className="px-4 py-4">{`Answer ${index}`}</td>
                                        <td className="px-4 py-4">{question._id}</td>
                                        <td className="px-4 py-4">
                                            <button onClick={() => handleModal(question.question)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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

        </div>
    )
}
export default Answers