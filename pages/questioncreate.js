import {useState} from "react";
import Modal from "../components/modal";
import uniqueString from "unique-string";
import Form from "../components/form";

const QuestionCreate = () => {
    const [showModal, setShowModal] = useState(false);
    const [question, setQuestion] = useState([]);
    const [value, setOption] = useState('text-0-0');

    const onQuestionTitleChanged = (index, event) => {
        event.preventDefault();
        event.persist();

        setQuestion(prev => {
            return prev.map((item, i) => {
                if (i !== index) {
                    return item;
                }
                item.title = event.target.value
                return item
            })
        })
    }

    const handleQuestionRemove = (e, index) => {
        e.preventDefault();
        setQuestion((prev) => prev.filter((item) => item !== prev[index]));
    }

    const handleQuestionFieldAdd = (e, index) => {
        e.preventDefault();
        setQuestion(prev => {
            return prev.map((item, i) => {
                if (i !== index) {
                    return item;
                }
                let newField = {
                    component: "text",
                    label: "",
                    type: "text",
                    _uid: uniqueString(),
                    options: []
                }
                item.questions = [
                    ...item.questions,
                    newField
                ]
                return item
            })
        })
    }

    const handleQuestionFieldRemove = (e, mainIndex, index) => {
        e.preventDefault();
        setQuestion(prev => {
            return prev.map((item,i) => {
                if (i !== mainIndex) {
                    return item;
                }
                let questions = item.questions
                questions = questions.filter((s_item) => s_item !== questions[index])
                item.questions = questions
                return item
            })
        });
    }

    const onQuestionFieldLabelChanged = (mainIndex, index, event) => {
        event.preventDefault();
        event.persist();

        setQuestion(prev => {
            return prev.map((item, i) => {
                if (i !== mainIndex) {
                    return item;
                }
                item.questions.map((element, j) => {
                    if (j !== index) {
                        return element;
                    }
                    element.label = event.target.value
                })
                return item
            })
        })
    }

    const handleOptionChange = (mainIndex, index, event, value, type, component) => {
        setOption(value)
        setQuestion(prev => {
            return prev.map((item, i) => {
                if (i !== mainIndex) {
                    return item;
                }
                item.questions.map((element, j) => {
                    if (j !== index) {
                        return element;
                    }
                    if(component === 'checkbox'){
                        element.type = type
                        element.component = component
                        element.options = [{
                            component: "checkbox",
                            label: element.label,
                            value: uniqueString()
                        }]
                    }else if(component === 'radio'){
                        element.type = type
                        element.component = component
                        element.options = [
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
                    }else{
                        element.type = type
                        element.component = component
                        element.options = []
                    }
                    return element
                })
                return item
            })
        })
    }

    const handleRadioAddLink = (mainIndex, index, e) => {
        e.preventDefault()
        setQuestion(prev => {
            return prev.map((item, i) => {
                if (i !== mainIndex) {
                    return item;
                }
                item.questions.map((element, j) => {
                    if (j !== index) {
                        return element;
                    }
                    const inputState = {
                        component: "radio",
                        label: '',
                        value: uniqueString()
                    };
                    element.options = [
                        ...element.options,
                        inputState
                    ]
                    return element
                })
                return item
            })
        })
    }

    const handleRemoveRadioField = (mainIndex, index, index_one, e) => {
        e.preventDefault()
        setQuestion(prev => {
            return prev.map((item, i) => {
                if (i !== mainIndex) {
                    return item;
                }
                item.questions.map((element, j) => {
                    if (j !== index) {
                        return element;
                    }
                    let options = element.options
                    options = options.filter(element_one => element_one !== options[index_one])
                    element.options = options
                    return element
                })
                return item
            })
        })
    }

    const radioOnchange = (mainIndex, index, index_one, event) => {
        event.preventDefault();
        event.persist();
        setQuestion(prev => {
            return prev.map((item, i) => {
                if (i !== mainIndex) {
                    return item;
                }
                item.questions.map((element, j) => {
                    if (j !== index) {
                        return element;
                    }
                    let options = element.options
                    options = options.map(element_one => {
                        if(element_one === options[index_one]){
                            element_one.label = event.target.value
                        }
                        return element_one
                    })
                    element.options = options
                    return element
                })
                return item
            })
        })
    }

    return(
        <div className='grid grid-cols-2'>
            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-blue-900 m-5'>
                <button
                    className="mb-3 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setShowModal(true)}
                >
                    + Add Question
                </button>

                {
                    question.map((mainItem, mainIndex) => {
                        return(
                            <div key={`item-${mainIndex}`} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-blue-900 m-5'>
                                <div className="flex">
                                    <input
                                        type="text"
                                        className='mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        name="label"
                                        placeholder="Label"
                                        value={mainItem.title}
                                        onChange={(e) => onQuestionTitleChanged(mainIndex, e)}
                                    />
                                    <button
                                        className="mb-3 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={(e) => handleQuestionRemove(e, mainIndex)}
                                    >
                                        X
                                    </button>
                                </div>






                                <form>
                                    {mainItem.questions.map((item, index) => (
                                        <div className="" key={`item-${index}`}>
                                            <div className="flex">
                                                <div>
                                                    <input
                                                        type="text"
                                                        className='mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                                        name="label"
                                                        placeholder="Label"
                                                        value={item.label}
                                                        onChange={(e) => onQuestionFieldLabelChanged(mainIndex, index, e)}
                                                    />
                                                </div>

                                                <button
                                                    className="mb-3 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    onClick={(e) => handleQuestionFieldRemove(e, mainIndex, index)}
                                                >
                                                    X
                                                </button>
                                            </div>
                                            <div className='mb-3' key={`select-type-${index}-${mainIndex}`}>
                                                <label htmlFor={`text-radio-${index}-${mainIndex}`} className="inline-flex items-center">
                                                    <input
                                                        className="form-radio"
                                                        type='radio'
                                                        id={`text-radio-${index}-${mainIndex}`}
                                                        name='type'
                                                        value={`text-${index}-${mainIndex}`}
                                                        checked={value === `text-${index}-${mainIndex}`}
                                                        onChange={(e) => {
                                                            handleOptionChange(mainIndex, index, e, e.target.value, 'text', 'text')
                                                        }}
                                                    />
                                                    <span className="ml-2">Simple</span>
                                                </label>

                                                <label htmlFor={`multiline-radio-${index}-${mainIndex}`} className="ml-2 inline-flex items-center">
                                                    <input
                                                        className="form-radio"
                                                        type='radio'
                                                        id={`multiline-radio-${index}-${mainIndex}`}
                                                        name='type'
                                                        value={`textarea-${index}-${mainIndex}`}
                                                        checked={value === `textarea-${index}-${mainIndex}`}
                                                        onChange={(e) => {
                                                            handleOptionChange(mainIndex, index, e, e.target.value, 'textarea', 'textarea')
                                                        }}
                                                    />
                                                    <span className="ml-2">Multiline</span>
                                                </label>

                                                <label htmlFor={`radio-radio-${index}-${mainIndex}`} className="ml-2 inline-flex items-center">
                                                    <input
                                                        className="form-radio"
                                                        type='radio'
                                                        id={`radio-radio-${index}-${mainIndex}`}
                                                        name='type'
                                                        value={`radio-${index}-${mainIndex}`}
                                                        checked={value === `radio-${index}-${mainIndex}`}
                                                        onChange={(e) => {
                                                            handleOptionChange(mainIndex, index, e, e.target.value, 'radio', 'radio')
                                                        }}
                                                    />
                                                    <span className="ml-2">Radio</span>
                                                </label>

                                                <label htmlFor={`checkbox-radio-${index}-${mainIndex}`} className="ml-2 inline-flex items-center">
                                                    <input
                                                        className="form-radio"
                                                        type='radio'
                                                        id={`checkbox-radio-${index}-${mainIndex}`}
                                                        name='type'
                                                        value={`checkbox-${index}-${mainIndex}`}
                                                        checked={value === `checkbox-${index}-${mainIndex}`}
                                                        onChange={(e) => {
                                                            handleOptionChange(mainIndex, index, e, e.target.value, 'checkbox', 'checkbox')
                                                        }}
                                                    />
                                                    <span className="ml-2">CheckBox</span>
                                                </label>
                                            </div>
                                            {
                                                item.options?.length > 0 && item.options[0].component === 'radio' && item.options.map((item_one, index_one) =>(
                                                    <div className="flex" key={`radio-item-${index}-${index_one}`}>
                                                        <div>
                                                            <input
                                                                type="text"
                                                                className='mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                                                name="option"
                                                                placeholder="Option"
                                                                onChange={(e) => radioOnchange(mainIndex, index, index_one, e)}
                                                            />
                                                        </div>

                                                        <button
                                                            className="mb-3 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            onClick={(e) => handleRemoveRadioField(mainIndex, index, index_one, e)}
                                                        >
                                                            X
                                                        </button>
                                                    </div>
                                                ))
                                            }
                                            {
                                                item.options?.length > 0 && item.options[0].component === 'radio' && (
                                                    <div>
                                                        <button
                                                            className="mb-3 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            onClick={(e) => handleRadioAddLink(mainIndex, index, e)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))}
                                    <button className="mt-5 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={e => handleQuestionFieldAdd(e, mainIndex)}
                                    >
                                        Add
                                    </button>
                                </form>







                            </div>
                        )
                    })
                }

            </div>

            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-blue-900 m-5'>



                {
                    question.map(question => {
                            return (
                                <div>
                                    <Form question={question} />
                                </div>
                            )
                        }
                    )
                }
                <div className='w-max mx-auto mb-5'>
                    <button className='mt-5 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Submit</button>
                </div>




            </div>

            <div>
                {showModal ? (
                    <Modal
                        setShowModal={setShowModal} setQuestion={setQuestion}
                    />
                ) : null}
            </div>
        </div>


    )
}
export default QuestionCreate