<script lang="ts">
	import { validator } from '@felte/validator-yup';
	import { createForm } from 'felte';
	import { setContext } from 'svelte';
	import type ObjectSchema from 'yup/lib/object';
	import type { AssertsShape, TypeOfShape } from 'yup/lib/object';
	import type { AnyObject } from 'yup/lib/types';

	export let validationSchema: ObjectSchema<any, AnyObject, TypeOfShape<any>, AssertsShape<any>>;

	const { form, errors } = createForm({
		onError: () => {
			console.log('Error occured submitting form value');
		},
		onSubmit: () => {
			console.log('On submit fired');
		},
		extend: validator({ schema: validationSchema })
	});

	setContext('form:errors', errors);
</script>

<form class="items" use:form>
	<slot />
</form>

<style lang="scss">
	.items {
		width: max-content;
	}
</style>
