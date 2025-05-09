import { Quote } from "../components/quote"
import { Auth } from "../components/Auth"


export const SignUp = ()=>{
    return <>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="px-10">
                <Auth type="signup"/>
            </div>
            <div className="hidden lg:block">
                <Quote/>
            </div>
        </div>
    </>
}