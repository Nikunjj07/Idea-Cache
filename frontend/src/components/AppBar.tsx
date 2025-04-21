import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
export const AppBar = ()=>{
    return <div className="flex justify-between  px-10 border-b h-14 w-screen">
        <Link to={"/blogs"} className="flex flex-col justify-center">
            <div className="text-xl font-semibold cursor-pointer">
                Idea Cache
            </div>
        </Link>
        <div className="flex items-center">
            <Link to={'/publish'}>
                <button type="button" className="align-middle mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">New</button>
            </Link>
            <Avatar size="big" name=""/>
        </div>
    </div>
}