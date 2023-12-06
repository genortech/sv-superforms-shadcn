import { superValidate, message } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

import type { Actions, PageServerLoad } from './$types';
import { formSchema } from '$lib/config/zod-schema';

///// Load function /////

export const load: PageServerLoad = async () => {
	return { form: superValidate(formSchema) };
};

///// Form actions /////

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, formSchema);

		console.log('POST', form);

		if (!form.valid) return fail(400, { form });

		return message(form, 'Form posted successfully!');
	}
};
