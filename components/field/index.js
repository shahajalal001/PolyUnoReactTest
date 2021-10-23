
const Field = ({field, fieldChanged, type, value}) => {
    return (
        <div key={field._uid} className='px-2 py-2'>
            <label htmlFor={field._uid} className="block text-gray-700 text-sm font-bold mb-2">{field.label}</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={type || field.component}
                id={field._uid}
                name={field._uid}
                value={value}
                onChange={(e)=> {
                    fieldChanged(field._uid, e.target.value)
                }}
            />
        </div>
    )
}
export default Field