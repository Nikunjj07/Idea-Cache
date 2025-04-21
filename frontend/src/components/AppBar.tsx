import { Avatar } from "./BlogCard"

export const AppBar = ()=>{
    return <div className="flex justify-between  px-10 border-b h-14">
        <div className="flex flex-col justify-center">
            Idea Cache
        </div>
        
        <div className="flex flex-col justify-center">
            <Avatar size="big" name="Nikunj Kabra"/>
        </div>
    </div>
}