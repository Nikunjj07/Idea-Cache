import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks"

export const Blogs = ()=>{

    const {loading, blogs} = useBlogs();

    if(loading){
        return <div>
            <AppBar/>
            <div className="flex justify-center">
                <div className="">
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                </div>
            </div>
        </div>
    }

    return <>
        <AppBar />
                {
                    blogs.map(blog=>(
                        <div className="flex justify-center px-4">
                            <BlogCard 
                                id ={blog.id}
                                authorName={blog.author.name || "Anonymous User"}
                                title={blog.title}
                                content={blog.content}
                                publishedDate={"25th May 2025"}
                            />
                        </div>
                    
                    ))
                }
    </>
}