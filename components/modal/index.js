import Tabs from "../tab";
import {useState} from "react";
import uniqueString from "unique-string";

const Modal = ({setShowModal, setQuestion}) => {
    const [tab, setTab] = useState(1)
    const addQuestion = () => {
        if(tab === 1){
            const inputState = {
                title: 'Your custom question title',
                questions: [
                    {
                        component: "text",
                        label: "",
                        type: "text",
                        _uid: uniqueString(),
                        options: []
                    },
                    {
                        component: "textarea",
                        label: "",
                        type: "textarea",
                        _uid: uniqueString(),
                        options: []
                    },
                    {
                        component: "radio",
                        label: "",
                        type: "radio",
                        _uid: uniqueString(),
                        options: [
                            {
                                component: "radio",
                                label: 'Option 1',
                                value: uniqueString()
                            },
                            {
                                component: "radio",
                                label: 'Option 2',
                                value: uniqueString()
                            },
                            {
                                component: "radio",
                                label: 'Option 3',
                                value: uniqueString()
                            }
                        ]
                    },
                    {
                        component: "checkbox",
                        label: "",
                        type: "checkbox",
                        _uid: uniqueString(),
                        options: [
                            {
                                component: "checkbox",
                                label: 'We support checkbox also',
                                value: uniqueString()
                            }
                        ]
                    }
                ]
            };
            setQuestion((prev) => [...prev, inputState]);
        }
        if(tab === 2){
            const inputState = {
                title: 'Your custom question title',
                questions: [
                    {
                        component: "textarea",
                        label: "",
                        type: "textarea",
                        _uid: uniqueString(),
                        options: []
                    },
                ]
            };
            setQuestion((prev) => [...prev, inputState]);
        }
        if(tab === 3){
            const inputState = {
                title: 'Your custom question title',
                questions: [
                    {
                        component: "radio",
                        label: "",
                        type: "radio",
                        _uid: uniqueString(),
                        options: [
                            {
                                component: "radio",
                                label: 'Option 1',
                                value: uniqueString()
                            },
                            {
                                component: "radio",
                                label: 'Option 2',
                                value: uniqueString()
                            },
                            {
                                component: "radio",
                                label: 'Option 3',
                                value: uniqueString()
                            }
                        ]
                    },
                ]
            };
            setQuestion((prev) => [...prev, inputState]);
        }

        if(tab === 4){
            const inputState = {
                title: 'Your custom question title',
                questions: [
                    {
                        component: "file",
                        label: "",
                        type: "file",
                        _uid: uniqueString(),
                        options: []
                    },
                ]
            };
            setQuestion((prev) => [...prev, inputState]);
        }
    }
    return(
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-25"
            >
                <div className="relative my-6 mx-auto max-w-3xl shadow-2xl" style={{width: 450}}>
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Select Type
                            </h3>
                            <button
                                className="mb-3 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={() => setShowModal(false)}
                            >
                                ×
                            </button>
                        </div>
                        {/*body*/}
                        <Tabs color="pink" setTab={setTab} />
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-900 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                    setShowModal(false)
                                    addQuestion()
                                }}
                            >
                                Add Question
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Modal