import {Fragment, useState} from "react";

const Radio = ({field, fieldChanged}) => {
    const [value, setValue] = useState('');
    const selectChange = (value) => {
        setValue(value)
    };
    return (
        <div className='px-2 py-2'>
            <label htmlFor={field._uid} className="block text-gray-700 text-sm font-bold mb-2">{field.label}</label>
            {
                field.options.map((option,index) => {
                    return(
                        <Fragment key={option.value}>
                            <label htmlFor={option.value} className="inline-flex items-center">
                                <input
                                    className="form-radio"
                                    type={field.type}
                                    id={option.value}
                                    name={field._uid}
                                    value={field.value}
                                    checked={value === field.value}
                                    onChange={(e) => {
                                        fieldChanged(field._uid, e.target.value);
                                        selectChange(field.value);
                                    }}
                                />
                                <span className="ml-2">{option.label}</span>
                            </label>
                            {index < field.options.length - 1 && <br />}
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default Radio