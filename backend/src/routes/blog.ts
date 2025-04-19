import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables:{
        userId: string
    }
}>();

// blogRouter.use('api/v1/blog/',async (c,next) => {
//     const header = c.req.header("authorization") || ""
//     const token = header.split("")[1];
//     const payload = await verify(token,c.env.JWT_SECRET);

//     if (!payload){
//         return c.json({
//             error:"Unauthorized"
//         })
//     }
//     console.log("jwt_payload",payload);//
//     c.set('userId',payload);
//     await next()
// });

blogRouter.use('*', async (c, next) => {  
    const authHeader = c.req.header("authorization") || "";

    if (!authHeader.startsWith("Bearer ")) {
      return c.json({ error: "Missing or invalid auth header" }, 401);
    }
  
    const token = authHeader.split(" ")[1];
    const payload = await verify(token, c.env.JWT_SECRET);
  
    if (!payload || !payload.id) {
      c.status(403);
      return c.json({ error: "Invalid token" });
    }
    // @ts-ignore
    c.set('userId', payload.id);
    await next();
});

blogRouter.post('/', async (c) => {
    const userId = c.get("userId");
    console.log("userId:",userId); //
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json()
    try{
        const post = await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                authorId: userId,
                
            }
        })
        return c.json({
            id: post.id
        });
    }catch(e){
        console.log(e);
        return c.text("Error Occured");
    }
})

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

    const body = await c.req.json();

    const blog = prisma.post.update({
        where: {
            id: body.id
        },
        data:{
            title: body.title,
            content: body.content
        }
    })
});

blogRouter.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    
    const blogs= await prisma.post.findMany();
    console.log(blogs)
    return c.json({
        blogs
    })
}) //add pagination

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

    const id = c.req.param("id")

    try{
        const blog = prisma.post.findFirst({
            where:{
                id: id
            },
        })
        return c.json({
            blog
        })
    }catch(e){
        console.log(e);
        c.status(411);
        return c.json({
            error: "Error while fetching the blog"
        })
    }

})