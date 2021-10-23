import FieldGroup from "../fieldgroup";
import Field from "../field";
import Options from "../option";
import TextArea from "../textarea";
import Radio from "../radio";

const Form = ({ question }) => {
    const formData = question.questions
    const fieldChanged = (fieldId, value) => {
        console.log(value)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // todo - send data somewhere
    };

    return (
            <form onSubmit={onSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-2 mx-auto w-max text-base'>{question.title}</div>
                <hr/>
                {formData
                    .map((field) => {
                        switch (field.component) {
                            case "field_group":
                                return (
                                    <FieldGroup
                                        key={field._uid}
                                        field={field}
                                        fieldChanged={fieldChanged}
                                        values={field.fields}
                                    />
                                );
                            case "checkbox":
                                return (
                                    <Options
                                        key={field._uid}
                                        field={field}
                                        fieldChanged={fieldChanged}
                                    />
                                );
                            case "radio":
                                return (
                                    <Radio
                                        key={field._uid}
                                        field={field}
                                        fieldChanged={fieldChanged}
                                    />
                                );
                            case "textarea":
                                return (
                                    <TextArea
                                        key={field._uid}
                                        field={field}
                                        fieldChanged={fieldChanged}
                                    />
                                );
                            default:
                                return (
                                    <Field
                                        key={field._uid}
                                        field={field}
                                        fieldChanged={fieldChanged}
                                        value={formData[field._uid]}
                                    />
                                );
                        }
                    })}
            </form>
    );
};

export default Form;