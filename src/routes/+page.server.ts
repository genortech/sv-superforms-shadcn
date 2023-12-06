import { superValidate, message } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

///// Load function /////

export const schema = z.object({
	options: z.string().array().min(1, 'Please select at least one option').default(['Office'])
});

export type FormSchema = typeof schema;

export const load: PageServerLoad = async () => {
	const form = await superValidate(schema);
	return { form, schema };
};

///// Form actions /////

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);

		console.log('POST', form);

		if (!form.valid) return fail(400, { form });

		return message(form, 'Form posted successfully!');
	}
};
