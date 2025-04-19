import { Link } from "react-router-dom"
import { LabelInput } from "./InputBox"
import { useState } from "react"
import { SignupType } from "@nik44/common-app"
import { SignButton } from "./Button"

export const Auth = ({type}:{type: "signup" | "signin"})=>{

    const [postInput,setPostInput] = useState<SignupType>({
        name : "",
        email: "",
        password: "",
    })


    return <div className="h-screen flex flex-col justify-center">
        <div className="flex  justify-center">
            <div >
                <div className="">
                    <div className="font-bold text-3xl text-center px-10">
                        Create an account
                    </div>
                    <div className="font text-slate-400 text-center mt-2">
                        Already have an account? <Link className="underline ml-1" to={"/signin"}>Login</Link>
                    </div>
                    <div className="mt-4">
                        <LabelInput label="Name" placeholder="Name" onChange={(e)=>{
                            setPostInput({
                                ...postInput,
                                name: e.target.value,
                            })
                        }}/>
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
                        <SignButton label={type == "signup"? "SignUp":"SignIn"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}