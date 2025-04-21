import axios from "axios"
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = ()=>{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return  <div>
        <AppBar/>
        <div className="flex flex-row justify-center pt-6 px-6">
            <div className="max-w-screen-lg w-full">
                <textarea typeof="text" rows={2} className="text-4xl block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Title" onChange={(e)=>{
                    setTitle(e.target.value)
                }}></textarea>
                <TextEditor onChange={(e)=>{
                    setContent(e.target.value)
                }}/>
                <div className="flex w-full justify-between py-1.5">
                    <div className="flex gap-2">
                        <button onClick={async(e)=>{
                            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                                title: title,
                                content: content 
                            },{
                                headers:{
                                    Authorization: localStorage.getItem("token")
                                }
                            });
                            navigate(`/blog/${response.data.id}`)
                        }}
                            className="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div className="flex flex-row justify-center ">
            
        </div>
    </div>
}


function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}){
    return <div>
        <div className="relative pt-5">
            <div className="relative w-full">
                <textarea rows={16} onChange={onChange}
                className="text-lg peer h-full min-h-[100px] w-full !resize-none  rounded-[7px] border border-blue-gray-200 border-t- bg-transparent px-3 py-2.5 font-sans font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "></textarea>
                <label
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Tell your story
                </label>
            </div>
            
        </div>
    </div>
}