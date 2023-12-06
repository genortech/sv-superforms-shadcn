<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	let officeMode = false;
	let retailMode = false;
	let carparkMode = false;
	let industrialMode = false;
	let tavernMode = false;
	let theatreMode = false;

	export let data;
	let opt_menu = ['Office', 'Retail Shop', 'Carpark', 'Tavern', 'Industrial', 'Theatre'];
	const { form, errors, message } = superForm(data.form, {
		clearOnSubmit: 'none'
	});
</script>

<SuperDebug data={$form} />

<Form.Root method="POST" let:config>
	<Form.Field {config} name="options">
		{#each opt_menu as option}
			<Form.Item>
				<Form.Checkbox bind:group={$form.options} name="options" value={option} />
				<Form.Label>
					{option}
				</Form.Label>
			</Form.Item>
		{/each}
	</Form.Field>
	{#if $errors.options?._errors}<p>{$errors.options._errors}</p>{/if}

	{#if $message}<p>{$message}</p>{/if}

	{#if true === officeMode}
		<p>Office Active</p>
		<Label>Area</Label>
		<Input />
		<Label>VA</Label>
		<Input />
	{/if}

	{#if true === retailMode}
		<p>Retail Active</p>
		<Label>Area</Label>
		<Input />
		<Label>VA</Label>
		<Input />
	{/if}

	{#if true === carparkMode}
		<p>Carpark Active</p>
		<Label>Area</Label>
		<Input />
		<Label>VA</Label>
		<Input />
	{/if}

	{#if true === tavernMode}
		<p>Tavern Active</p>
		<Label>Area</Label>
		<Input />
		<Label>VA</Label>
		<Input />
	{/if}

	{#if true === theatreMode}
		<p>Theatre Active</p>
		<Label>Area</Label>
		<Input />
		<Label>VA</Label>
		<Input />
	{/if}

	{#if true === industrialMode}
		<p>Industrial Active</p>
		<Label>Area</Label>
		<Input />
		<Label>VA</Label>
		<Input />
	{/if}

	<Form.Button>Submit</Form.Button>
</Form.Root>
