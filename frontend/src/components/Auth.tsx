import { Link, useNavigate } from "react-router-dom"
import { LabelInput } from "./InputBox"
import { useState } from "react"
import { SignupType } from "@nik44/common-app"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth = ({type}:{type: "signup" | "signin"})=>{

    const navigate = useNavigate();
    const [postInput,setPostInput] = useState<SignupType>({
        name : "",
        email: "",
        password: "",
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup": "signin"}`, postInput);
            const jwt = response.data;
            localStorage.setItem("token",jwt);
            navigate("/blogs");

        }catch(e){
            console.log(e);
        }
    }

    return <div className="h-screen flex flex-col justify-center">
        <div className="flex  justify-center">
            <div >
                <div className="">
                    <div className="font-bold text-3xl text-center px-10">
                        {type == "signin"? "Welcome Back!":"Create an Account"}
                    </div>
                    <div className="font text-slate-400 text-center mt-2">
                        {type == "signin"? "Don't have an account?":"Already have an account?"} 
                        <Link className="underline ml-1" to={type == "signin"? "/signup":"/signin"}>
                            {type == "signin"?"Signup":"Login"}
                        </Link>
                    </div>
                    <div className="mt-4">
                        {type == "signup"? <LabelInput label="Name" placeholder="Name" onChange={(e)=>{
                            setPostInput({
                                ...postInput,
                                name: e.target.value,
                            })
                        }}/> : null }
                        <LabelInput label="Username" placeholder="Username" onChange={(e)=>{
                            setPostInput({
                                ...postInput,
                                email: e.target.value,
                            })
                        }}/>
                        <LabelInput label="Password" type="password" placeholder="Password" onChange={(e)=>{
                            setPostInput({
                                ...postInput,
                                password: e.target.value,
                            })
                        }}/>
                        <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full">{type == "signup"? "Sign Up":"Sign In"}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}