import { useState } from "react";
import uniqueString from 'unique-string';
import Form from "../components/form";
const FormCreate = () => {
    const [form, setForm] = useState([]);
    const [value, setOption] = useState('text-0');

   const handleOptionChange = (index, event, value, type, component) => {

       setOption(value)

       setForm((prev) => {
           return prev.map((item, i) => {
               if (i !== index) {
                   return item;
               }
               let data = {}
               if(component === 'checkbox'){
                   data = {
                       ...item,
                       type,
                       component,
                       options: [{
                           component: "checkbox",
                           label: item.label,
                           value: uniqueString()
                       }]
                   };
               }else if(component === 'radio'){
                   data = {
                       ...item,
                       type,
                       component,
                       options: [{
                           component: "radio",
                           label: '',
                           value: uniqueString()
                       }]
                   };
               }else{
                   data = {
                       ...item,
                       type,
                       component,
                       options: []
                   };
               }

               return data
           });
       });
    }

    const handleAddLink = (e) => {
        e.preventDefault();
        const inputState = {
            component: "text",
            label: "",
            type: "text",
            _uid: uniqueString(),
            options: []
        };
            setForm((prev) => [...prev, inputState]);
    };

    const handleRadioAddLink = (e, item) => {
        e.preventDefault();
        const inputState = {
            component: "radio",
            label: '',
            value: uniqueString()
        };
        item.options = [
            ...item.options,
            inputState
        ]
        setForm((prev) => {
            return prev.map(element => {
                if(element._uid === item._uid){
                    return item
                }else{
                    return element
                }
            })
        })
    };

    const radioOnchange = (index, event, item) => {
        event.preventDefault();
        event.persist();

        item.options = item.options.map(element => {
            if(element === item.options[index]){
                element.label = event.target.value
            }
            return element
        })

        setForm((prev) => {
            return prev.map(element => {
                if(element._uid === item._uid){
                    return item
                }else{
                    return element
                }
            })
        })
    }

    const onChange = (index, event) => {
        event.preventDefault();
        event.persist();

        setForm((prev) => {
            return prev.map((item, i) => {
                if (i !== index) {
                    return item;
                }
                let data = {}
                if(item.component === 'checkbox'){
                    data = {
                        ...item,
                        [event.target.name]: event.target.value,
                        options: [{
                            component: "checkbox",
                            label: event.target.value,
                            value: uniqueString()
                        }]
                    }
                }else if(item.component === 'radio'){
                    data = {
                        ...item,
                        [event.target.name]: event.target.value,
                        options: [{
                            component: "radio",
                            label: '',
                            value: uniqueString()
                        }]
                    }
                }else{
                    data = {
                        ...item,
                        [event.target.name]: event.target.value,
                    };
                }
                return data
            });
        });
    };

    const handleRemoveField = (e, index) => {
        e.preventDefault();
        setForm((prev) => prev.filter((item) => item !== prev[index]));
    };

    const handleRemoveRadioField = (e, index, item) => {
        e.preventDefault();
        item.options = item.options.filter(element => element !== item.options[index])
        setForm((prev) => {
            return prev.map(element => {
                if(element._uid === item._uid){
                    return item
                }else{
                    return element
                }
            })
        })

    };
    return(
        <div className='grid grid-cols-2'>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className='text-lg mb-3'>Create dynamic form</h1>
                {/*{JSON.stringify(form)}*/}
                {/*{JSON.stringify(radioForm)}*/}
                <form>
                    {form.map((item, index) => (
                        <div className="" key={`item-${index}`}>
                            <div className="flex">
                                <div>
                                    <input
                                        type="text"
                                        className='mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        name="label"
                                        placeholder="Label"
                                        value={item.label}
                                        onChange={(e) => onChange(index, e)}
                                    />
                                </div>

                                <button
                                    className="mb-3 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={(e) => handleRemoveField(e, index)}
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
                                        checked={value === `text-${index}`}
                                        onChange={(e) => {
                                            handleOptionChange(index, e, e.target.value, 'text', 'text')
                                        }}
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
                                        checked={value === `textarea-${index}`}
                                        onChange={(e) => {
                                            handleOptionChange(index, e, e.target.value, 'textarea', 'textarea')
                                        }}
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
                                        checked={value === `radio-${index}`}
                                        onChange={(e) => {
                                            handleOptionChange(index, e, e.target.value, 'radio', 'radio')
                                        }}
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
                                        checked={value === `checkbox-${index}`}
                                        onChange={(e) => {
                                            handleOptionChange(index, e, e.target.value, 'checkbox', 'checkbox')
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
                                                    onChange={(e) => radioOnchange(index_one, e, item)}
                                                />
                                            </div>

                                            <button
                                                className="mb-3 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={(e) => handleRemoveRadioField(e, index_one, item)}
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
                                            onClick={(e) => handleRadioAddLink(e, item)}
                                        >
                                            +
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    ))}
                    <button className="mt-5 ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleAddLink}>
                        Add
                    </button>
                </form>
            </div>


            {/*<div className='ml-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>*/}
            {/*    <Form*/}
            {/*        formData={form}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    )
}
export default FormCreate