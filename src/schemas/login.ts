import {z} from 'zod';

export const loginSchema = z.object({
   username: z.string().min(1,{error:"user name is invalid"}),
   password: z.string().min(1,{error:"password is invalid"}),

});

export type LoginFields = z.infer<typeof loginSchema>;