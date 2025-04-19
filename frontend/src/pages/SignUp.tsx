import { Quote } from "../components/quote"
import { Auth } from "../components/Auth"


export const SignUp = ()=>{
    return <>
        <div className="grid grid-cols-2">
            <div>
                <Auth type="signup"/>
            </div>
            <div className="invisible lg:visible">
                <Quote/>
            </div>
        </div>
    </>
}