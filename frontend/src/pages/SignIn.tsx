import { Quote } from "../components/quote"
import { Auth } from "../components/Auth"


export const SignIn = ()=>{
    return <>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="px-10">
                <Auth type="signin"/>
            </div>
            <div className="none lg:block">
                <Quote/>
            </div>
        </div>
    </>
}