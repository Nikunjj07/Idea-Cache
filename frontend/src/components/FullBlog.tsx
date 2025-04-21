import { BlogType } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog}:{blog:BlogType})=>{

    return <>
        <AppBar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl pt-12">
                <div className="col-span-8">
                    <div className="text-4xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-400 font-semibol d">
                        Posted on {"25th May 2025"}
                    </div>
                    <div className="pt-6 text-slate-600">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 pl-3">
                    <div className="font-semibold text-slate-600">
                        Author
                    </div>
                    <div className="flex flex-row">
                        <div className="pt-2">
                            <Avatar name={blog.author.name||"Anonymus User"} size="big"/>
                        </div>
                        <div>
                            <div className="flex flex-row text-xl font-bold p-3">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="text-slate-600 pl-2">
                                Do not go gentle into that good night
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}