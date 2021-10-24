import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const AnswerView = () => {
    const router = useRouter()
    const { data } = router.query
    const [parseData, setParseData] = useState([])
    useEffect(() => {
        setParseData(JSON.parse(data))
    },[data])

    const getLabel = (subItem) => {
        if(subItem.type === 'radio'){
            let data = subItem.options.find(element => subItem.value === element.value)
            return data.label
        }else{
            return `${subItem.value}`
        }
    }
    return (
        <>
            {
                parseData.map((item, index) => {
                    return (
                        <main className="flex h-screen items-center justify-center bg-gray-100" key={`q-item-${index}`}>
                            <div
                                className="overflow-hidden bg-white flex-none container relative shadow-lg rounded-lg px-12 py-6"
                            >
                                <div className="relative z-20">
                                    <div
                                        className="rounded-lg bg-gray-100 p-2 text-center font-bold text-gray-800 mt-8">
                                        <div className="bg-white p-5">
                                            {
                                                item.title
                                            }
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        {
                                            item.questions.map((subItem, subIndex) => {
                                                return (
                                                    <div key={`sub-item-${subIndex}`}
                                                        className="option-default bg-gray-100 p-2 rounded-lg mb-3 relative"
                                                    >
                                                        <div className="rounded-lg font-bold flex p-2">
                                                            <div className="p-3 rounded-lg">{subItem.label}</div>
                                                            <div className="flex items-center pl-6">{getLabel(subItem)}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </main>
                    )
                })
            }
        </>

    )
}
export default AnswerView