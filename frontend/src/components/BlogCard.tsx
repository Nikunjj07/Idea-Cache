import { Link } from "react-router-dom";

interface BlogCardType {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id
    }: BlogCardType)=>{
    return <Link to={`/blog/${id}`}>
        <div className="border-b border-slate-200 p-4 w-screen max-w-2xl cursor-pointer ">
            <div className="flex pb-2">
                <div className="flex justify-center flex-col">
                    <Avatar name={authorName} size="small"/>
                </div>
                <div className="font-light pl-2 font-thin">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle/>
                </div>
                <div className="text-slate-400 pl-2 font-thin">
                    {publishedDate}
                </div>
            </div>
            <div className="font-bold text-xl">
                {title}
            </div>
            <div className="font-thin text-md">
                {content.slice(0,150)+"..."}
            </div>
            <div className="text-slate-400 text-xs pt-4">
                {`${Math.ceil(content.length/100)} Minute(s)`}
            </div>
        </div>
    </Link>
}

function Circle(){
    return <div className="bg-slate-600 h-0.5 w-0.5 rounded-full">

    </div>
}

export function Avatar({ name, size } : { name:string, size: "small" | "big" }){
    return <div className={`relative inline-flex items-center justify-center ${size == "small"? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500`}>
        <span className={`${size == "small" ? "text-xs" : "text-md"} font-thin text-gray-600 dark:text-slate-200`}>{name[0]}</span>
    </div>
}