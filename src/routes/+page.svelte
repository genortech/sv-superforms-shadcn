<script lang="ts">
	import { page } from '$app/stores';
	import * as Form from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';

	let officeMode = false;
	let retailMode = false;
	let carparkMode = false;
	let industrialMode = false;
	let tavernMode = false;
	let theatreMode = false;

	export let data;
	let menu = ['Office', 'Retail Shop', 'Carpark', 'Tavern', 'Industrial', 'Theatre'];

	const { form, errors, enhance, message } = superForm(data.form, {
		clearOnSubmit: 'none'
	});
</script>

<SuperDebug data={$form} />

<Form.Root method="POST" let:config>
	<h2>Optkons</h2>

	<Form.Field>
		{#each menu as option}
			<Form.Item {config}>
				<Form.Checkbox />
				<Form.Label>
					<Input type="checkbox" bind:group={$form.options} name="options" value={option} />
					{option}
				</Form.Label>
			</Form.Item>
		{/each}
	</Form.Field>
	{#if $errors.options?._errors}<p>{$errors.options._errors}</p>{/if}

	{#if $message}<p>{$message}</p>{/if}
	

	{#if true === officeMode}
		<p>Office Active</p>
	{/if}

	{#if true === retailMode}
		<p>Retail Active</p>
	{/if}

	{#if true === carparkMode}
		<p>Office Active</p>
	{/if}

	{#if true === tavernMode}
		<p>Office Active</p>
	{/if}

	{#if true === theatreMode}
		<p>Office Active</p>
	{/if}

	{#if true === industrialMode}
		<p>Office Active</p>
	{/if}
	
<Form.Button>Submit</Form.Button>
</Form.Root>
