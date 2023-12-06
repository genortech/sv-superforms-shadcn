import { z } from 'zod';

export const formSchema = z.object({
	// options: z.string().array().min(1, 'Please select at least one option')
	offArea: z.number(),
	offVA: z.number(),
	retArea: z.number(),
	retVA: z.number(),
	carArea: z.number(),
	carVA: z.number(),
	indArea: z.number(),
	indVA: z.number(),
	thtArea: z.number(),
	thtVA: z.number(),
	tavArea: z.number(),
	tavVA: z.number(),
	office: z.boolean().default(false),
	carpark: z.boolean().default(false),
	retail: z.boolean().default(false)
});

export type FormSchema = typeof formSchema;
