import Field from "../field";
import Options from "../option";
import TextArea from "../textarea";
const FieldGroup = ({field, fieldChanged, values}) => {
    const fields = field.fields
    return (
        <fieldset key={field._uid} className='flex justify-between'>
            {
                fields.map((field) => {
                    switch (field.component) {
                        case "options":
                            return (
                                <Options
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
                                    value={fields[field._uid]}
                                />
                            );
                    }
                })
            }
        </fieldset>
    )
}
export default FieldGroup