export const Skeleton = ()=>{
    return <div role="status" className="max-w-full animate-pulse">
        <div className="border-b border-slate-200 p-4 w-screen max-w-2xl cursor-pointer ">
            <div className="flex pb-2">
                <div className="flex justify-center flex-col">
                    <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                </div>
                <div className="font-light pl-2 font-thin">
                    <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="text-slate-400 pl-2 font-thin">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            </div>
            <div className="font-bold text-xl">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="font-thin text-md">
                <div className="h-2 bg-gray-200 rounded-full"></div>
            </div>
            <div className="text-slate-400 text-xs pt-4">
                <div className="h-2 bg-gray-200 rounded-full"></div>
            </div>
        </div>  
                
        <span className="sr-only">Loading...</span>
    </div>
}