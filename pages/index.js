import Form from "../components/form";
import {formData} from "../public/formData";

const Home = () => {
    return(
        <div className='w-full max-w-4xl mx-auto'>
            <Form
                formData={formData}
            />
        </div>
    )
}
export default Home