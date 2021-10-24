import {useRouter} from "next/router";
import Form from "../components/form";
import {useState, useEffect} from "react";
import useAxios from "../app/axios";
import Swal from "sweetalert2";
const DynamicCheck = () => {
    const router = useRouter()
    const { id } = router.query
    const axios = useAxios()
    const [question, setQuestion] = useState()
    const [question_id, setQuestionId] = useState('')
    useEffect(async () => {
        let {data} = await axios.post('/admin/get', {
            _id: id
        })
        if(data?.error === false) {
            setQuestion(data.data.question)
            setQuestionId(data.data._id)
        }
    }, [id])

    const fieldChanged = (index, fieldId, value) => {
        setQuestion(prev => {
            return prev.map((item, i) => {
                if (i !== index) {
                    return item;
                }
                item.questions.map(subItem => {
                    if(subItem._uid !== fieldId){
                        return subItem
                    }
                    subItem.value = value
                    return subItem
                })
                return item
            })
        })
    }

    const handleSubmit = async () => {
            const axios = useAxios()
            let {data} = await axios.post(`/admin/save-answer`, {
                question_id,
                question
            })
            if(data?.error === false) {
                await Swal.fire({
                    title: "Success",
                    html: 'Form submitted',
                    icon: 'success'
                })
            } else {
                await Swal.fire({
                    title: "Error",
                    html: data?.msg,
                    icon: 'error'
                })
            }
    }
    return(
        <div className='w-full max-w-4xl mx-auto'>
            {
                question?.map((question, index) => {
                        return (
                            <div key={`question-${index}`}>
                                <Form question={question} fieldChanged={fieldChanged} questionIndex={index} />
                            </div>
                        )
                    }
                )
            }
            <div className='w-max mx-auto mb-5'>
                <button className='mt-5 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default DynamicCheck