<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { formSchema, type FormSchema } from '$lib/config/zod-schema';
	import type { SuperValidated } from 'sveltekit-superforms';

	let officeMode = false;
	let retailMode = false;
	let carparkMode = false;
	let industrialMode = false;
	let tavernMode = false;
	let theatreMode = false;
	let officeTotal = 0;
	let retailTotal = 0;
	let carparkTotal = 0;
	let grandTotal = 0;

	export let data;

	let opt_menu = ['Office', 'Retail Shop', 'Carpark', 'Tavern', 'Industrial', 'Theatre'];

	export let form: SuperValidated<FormSchema>;

	function officeCalc() {
		let officeTotal = offArea * offVA;
		return officeTotal;
	}
	function retailCalc() {
		let retailTotal = retArea * retVA;
		return retailTotal;
	}
	function carparkCalc() {
		let carparkTotal = carArea * carVA;
		return carparkTotal;
	}

	function grandCalc() {
		let grandTotal = officeTotal + retailTotal + carparkTotal;
		return grandTotal;
	}
</script>

<!-- <SuperDebug data={$form} /> -->

<Form.Root method="POST" {form} schema={formSchema} let:config action="">
	{#each opt_menu as option}
		<Form.Field {config} name={option}>
			<Form.Item>
				<Form.Checkbox />
				<Form.Label>
					{option}
				</Form.Label>
			</Form.Item>
		</Form.Field>
	{/each}

	{#if true === officeMode}
		<p>Office Active</p>
		<Form.Field {config} name="offArea">
			<Form.Item>
				<Form.Label>Office Area</Form.Label>
				<Form.Input on:input={officeCalc} />
			</Form.Item>
		</Form.Field>

		<Form.Field {config} name="offVA">
			<Form.Item>
				<Form.Label>Office VA</Form.Label>
				<Form.Input on:input={officeCalc} />
			</Form.Item>
		</Form.Field>
		<p>Office Total: {officeTotal} VA</p>
	{/if}

	{#if true === retailMode}
		<p>Retail Active</p>
		<Form.Field {config} name="retArea">
			<Form.Item>
				<Form.Label>Office Area</Form.Label>
				<Form.Input on:input={retailCalc} />
			</Form.Item>
		</Form.Field>

		<Form.Field {config} name="retVA">
			<Form.Item>
				<Form.Label>Office VA</Form.Label>
				<Form.Input on:input={retailCalc} />
			</Form.Item>
		</Form.Field>
		<p>Retail Total: {retailTotal} VA</p>
	{/if}

	{#if true === carparkMode}
		<p>Carpark Active</p>
		<Form.Field {config} name="carArea">
			<Form.Item>
				<Form.Label>Office Area</Form.Label>
				<Form.Input on:input={carparkCalc} />
			</Form.Item>
		</Form.Field>

		<Form.Field {config} name="carVA">
			<Form.Item>
				<Form.Label>Office VA</Form.Label>
				<Form.Input on:input={carparkCalc} />
			</Form.Item>
		</Form.Field>
		<p>Carpark Total: {carparkTotal} VA</p>
	{/if}
	<p>Grand Total: {grandCalc} VA</p>
	<Form.Button>Submit</Form.Button>
</Form.Root>
