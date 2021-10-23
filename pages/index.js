import Form from "../components/form";
import {QuestionData} from "../public/questionData";

const Home = () => {
    return(
        <div className='w-full max-w-4xl mx-auto'>
            {
                QuestionData.map(question => {
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
    )
}
export default Home