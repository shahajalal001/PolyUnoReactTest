import {useState} from "react";
import Modal from "../components/modal";
import uniqueString from "unique-string";
import Form from "../components/form";

const QuestionCreate = () => {
    const [showModal, setShowModal] = useState(false);
    const [question, setQuestion] = useState([]);

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
                                                        //onChange={(e) => onChange(index, e)}
                                                    />
                                                </div>

                                                <button
                                                    className="mb-3 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    //onClick={(e) => handleRemoveField(e, index)}
                                                >
                                                    X
                                                </button>
                                            </div>
                                            <div className='mb-3' key={`select-type-${index}`}>
                                                <label htmlFor={`text-radio-${index}}`} className="inline-flex items-center">
                                                    <input
                                                        className="form-radio"
                                                        type='radio'
                                                        id={`text-radio-${index}}`}
                                                        name='type'
                                                        value={`text-${index}`}
                                                        //checked={value === `text-${index}`}
                                                        // onChange={(e) => {
                                                        //     handleOptionChange(index, e, e.target.value, 'text', 'text')
                                                        // }}
                                                    />
                                                    <span className="ml-2">Simple</span>
                                                </label>

                                                <label htmlFor={`multiline-radio-${index}}`} className="ml-2 inline-flex items-center">
                                                    <input
                                                        className="form-radio"
                                                        type='radio'
                                                        id={`multiline-radio-${index}}`}
                                                        name='type'
                                                        value={`textarea-${index}`}
                                                        //checked={value === `textarea-${index}`}
                                                        // onChange={(e) => {
                                                        //     handleOptionChange(index, e, e.target.value, 'textarea', 'textarea')
                                                        // }}
                                                    />
                                                    <span className="ml-2">Multiline</span>
                                                </label>

                                                <label htmlFor={`radio-radio-${index}}`} className="ml-2 inline-flex items-center">
                                                    <input
                                                        className="form-radio"
                                                        type='radio'
                                                        id={`radio-radio-${index}}`}
                                                        name='type'
                                                        value={`radio-${index}`}
                                                        //checked={value === `radio-${index}`}
                                                        // onChange={(e) => {
                                                        //     handleOptionChange(index, e, e.target.value, 'radio', 'radio')
                                                        // }}
                                                    />
                                                    <span className="ml-2">Radio</span>
                                                </label>

                                                <label htmlFor={`checkbox-radio-${index}}`} className="ml-2 inline-flex items-center">
                                                    <input
                                                        className="form-radio"
                                                        type='radio'
                                                        id={`checkbox-radio-${index}}`}
                                                        name='type'
                                                        value={`checkbox-${index}`}
                                                        //checked={value === `checkbox-${index}`}
                                                        // onChange={(e) => {
                                                        //     handleOptionChange(index, e, e.target.value, 'checkbox', 'checkbox')
                                                        // }}
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
                                                                //onChange={(e) => radioOnchange(index_one, e, item)}
                                                            />
                                                        </div>

                                                        <button
                                                            className="mb-3 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            //onClick={(e) => handleRemoveRadioField(e, index_one, item)}
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
                                                            //onClick={(e) => handleRadioAddLink(e, item)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))}
                                    <button className="mt-5 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" //onClick={handleAddLink}
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