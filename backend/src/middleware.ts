import { verify } from "hono/jwt";
export default function inintMiddleware(app){
    app.use('/api/v1/blog/*',async (c,next)=>{
        const header = c.req.header("authorization") || ""
        const token = header.split(" ")[1]
        const response = await verify(token,c.env.JWT_SECRET);

        if (!response){
            return c.json({
                error:"Unauthorized"
            })
        }
        c.set('userId',response.id);
        await next()

    })
};
