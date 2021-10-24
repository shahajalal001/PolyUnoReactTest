import uniqueString from "unique-string";
import {useEffect} from "react";

const {useState} = require("react");
const Tabs = ({ color , setTab}) => {
    const [openTab, setOpenTab] = useState(1);
    return (
        <>
            <div className="flex flex-wrap flex-col">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                    setTab(1);
                                }}
                                data-toggle="tab"
                                href="#fields"
                                role="tablist"
                            >
                                Fields
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                    setTab(2);
                                }}
                                data-toggle="tab"
                                href="#open"
                                role="tablist"
                            >
                                Open
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                    setTab(3);
                                }}
                                data-toggle="tab"
                                href="#selection"
                                role="tablist"
                            >
                                Selection
                            </a>
                        </li>

                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 4
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                    setTab(4);
                                }}
                                data-toggle="tab"
                                href="#file"
                                role="tablist"
                            >
                                File
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="fields">
                                    <div key={'simple_text-input_field'} className='px-2 py-2'>
                                        <label htmlFor={'simple_input_field_id'} className="block text-gray-700 text-sm font-bold mb-2">Simple</label>
                                        <input
                                            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type='text'
                                            id={'simple_text-input_field'}
                                            name={'simple_text-input_field'}
                                        />
                                    </div>
                                    <div key={'simple_textarea-input_field'} className='px-2 py-2'>
                                        <label htmlFor={'simple_textarea-input_field'} className="block text-gray-700 text-sm font-bold mb-2">Multiline</label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id={'simple_textarea-input_field'}
                                            name={'simple_textarea-input_field'}
                                        />
                                    </div>
                                    <div className='px-2 py-2'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Options</label>
                                        <label className="inline-flex items-center px-2 py-2">
                                            <input
                                                className="form-radio"
                                                type='radio'
                                            />
                                            <span className="ml-2">Option 1</span>
                                        </label>
                                        <label className="inline-flex items-center px-2 py-2">
                                            <input
                                                className="form-radio"
                                                type='radio'
                                            />
                                            <span className="ml-2">Option 2</span>
                                        </label>
                                        <label className="inline-flex items-center px-2 py-2">
                                            <input
                                                className="form-radio"
                                                type='radio'
                                            />
                                            <span className="ml-2">Option 3</span>
                                        </label>
                                    </div>

                                    <div>
                                        <label className="inline-flex items-center px-2 py-2">
                                            <input
                                                className="form-radio"
                                                type='checkbox'
                                            />
                                            <span className="ml-2">We support checkbox also</span>
                                        </label>
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="selection">
                                    <div key={'simple_textarea-input_field'} className='px-2 py-2'>
                                        <label htmlFor={'simple_textarea-input_field'} className="block text-gray-700 text-sm font-bold mb-2">Multiline</label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id={'simple_textarea-input_field'}
                                            name={'simple_textarea-input_field'}
                                        />
                                    </div>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="open">
                                    <div className='px-2 py-2'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Options</label>
                                        <label className="inline-flex items-center px-2 py-2">
                                            <input
                                                className="form-radio"
                                                type='radio'
                                            />
                                            <span className="ml-2">Option 1</span>
                                        </label>
                                        <label className="inline-flex items-center px-2 py-2">
                                            <input
                                                className="form-radio"
                                                type='radio'
                                            />
                                            <span className="ml-2">Option 2</span>
                                        </label>
                                        <label className="inline-flex items-center px-2 py-2">
                                            <input
                                                className="form-radio"
                                                type='radio'
                                            />
                                            <span className="ml-2">Option 3</span>
                                        </label>
                                    </div>
                                </div>
                                <div className={openTab === 4 ? "block" : "hidden"} id="open">
                                    <div className='px-2 py-2'>
                                        <label htmlFor={'simple_file_field_id'} className="block text-gray-700 text-sm font-bold mb-2">File</label>
                                        <input
                                            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type='file'
                                            id={'simple_file_field_id'}
                                            name={'simple_file_field_id'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tabs