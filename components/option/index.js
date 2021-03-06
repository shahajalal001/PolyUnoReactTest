import {Fragment, useEffect, useState} from "react";

const Options = ({field, fieldChanged, questionIndex}) => {
    const [value, setValue] = useState(true);
    useEffect(() => {
        fieldChanged(questionIndex, field._uid, value);
    },[])
    const selectChange = (value) => {
        setValue(!value)
    };
    return (
        <div className='px-2 py-2'>
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
                                    value={field.label}
                                    checked={value}
                                    onChange={(e) => {
                                        fieldChanged(questionIndex, field._uid, !value);
                                        selectChange(value);
                                    }}
                                />
                                <span className="ml-2">{field.label}</span>
                            </label>
                            {index < field.options.length - 1 && <br />}
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default Options