import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";

export const Blog = ()=>{
    const {id} = useParams();
    const {loading, blog} = useBlog({
        id : id || ""
    });

    if(loading || !blog){
        return <div className="h-screen flex flex-col justify-center px-4">
            <div className="flex justify-center">
                <Spinner/>
            </div>
        </div>
    }

    return <>
        <div>
                <FullBlog blog={blog}/>
        </div>
    </>
}