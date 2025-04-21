import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

interface BlogType{
    content: string,
    title: string,
    publishedDate: string,
    author: {name: string | null}
}

export const Blogs = ()=>{

    const {loading, blogs} = useBlogs();

    if(loading){
        return <div className="flex flex-row content-middle h-screen w-screen">
            <div className="flex flex-col justify-center font-semibold text-xl w-full text-center">
                Loading...
            </div>
        </div>
    }

    return <>
        <AppBar />
                {
                    blogs.map(blog=>
                        <div className="flex justify-center">
                            <div className="w-full min-w-xl max-w-xl flex justify-center">
                                <BlogCard 
                                    authorName="Obi Wan"//{blog.author.name}
                                    title={blog.title}
                                    content={blog.content}
                                    publishedDate={blog.publishedDate}
                                />
                            </div>
                        </div>
                    )
                }
    </>
}