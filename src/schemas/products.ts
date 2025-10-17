import {z} from "zod";

// const API_URL = import.meta.env.VITE_API_URL;
// const tenantId =import.meta.env.VITE_TENANT_ID;

export const productSchema = z.object({
    id: z.coerce.number().int(),
    name: z.string().min(1, {error: "Required"}),
    slug: z.string().min(1, {error: "Required"})
        .regex(/^[a-z0-9-]+$/, {error: "only latin letters and numbers"}),
    description: z.string().optional,
    image: z.string().optional,
    price: z.coerce.number().nonnegative({error: "must be a non-negative number"}),
    is_active:z.boolean(),
    is_favorite: z.boolean(),
    sort:z.coerce.number().int().nonnegative({error: "must be a non-negative number"}),
    category: z.coerce.number().int()

})

export type Product = z.infer<typeof productSchema>;