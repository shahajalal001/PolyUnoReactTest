import Field from "../field";
import Options from "../option";
import TextArea from "../textarea";
import Radio from "../radio";
import File from "../file";

const Form = ({ question, fieldChanged, questionIndex }) => {
    const formData = question.questions

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
                            case "file":
                                return (
                                    <File
                                        key={field._uid}
                                        field={field}
                                        fieldChanged={fieldChanged}
                                        value={formData[field._uid]}
                                        index={questionIndex}
                                    />
                                );
                            case "checkbox":
                                return (
                                    <Options
                                        key={field._uid}
                                        field={field}
                                        fieldChanged={fieldChanged}
                                        questionIndex={questionIndex}
                                    />
                                );
                            case "radio":
                                return (
                                    <Radio
                                        key={field._uid}
                                        field={field}
                                        fieldChanged={fieldChanged}
                                        questionIndex={questionIndex}
                                    />
                                );
                            case "textarea":
                                return (
                                    <TextArea
                                        key={field._uid}
                                        field={field}
                                        fieldChanged={fieldChanged}
                                        index={questionIndex}
                                    />
                                );
                            default:
                                return (
                                    <Field
                                        key={field._uid}
                                        field={field}
                                        fieldChanged={fieldChanged}
                                        value={formData[field._uid]}
                                        index={questionIndex}
                                    />
                                );
                        }
                    })}
            </form>
    );
};

export default Form;