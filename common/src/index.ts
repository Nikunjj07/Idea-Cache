import z from "zod";

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional(),
});

export type SignupType = z.infer<typeof signupInput>;

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export type SigninType = z.infer<typeof signinInput>;

export const CreateBlogInput = z.object({
    title: z.string(),
    content: z.string()
})

export type CreateBlogType = z.infer<typeof CreateBlogInput>;

export const UpdateBlogInput = z.object({
    title: z.string(),
    content: z.string()
})

export type UpdateBlogType = z.infer<typeof UpdateBlogInput>;