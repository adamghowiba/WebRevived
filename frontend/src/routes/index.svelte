<script lang="ts">
	let responseText: string = '';

	async function submitFormTest() {
		const response = await fetch('http://localhost:5000/api/form/1', {
			method: 'POST',
			body: JSON.stringify({tags: ['adam', 'joe'], name: "Adam", amount: 10}),
			headers: {
				'Content-Type': "application/json"
			}
		});	

		const result = await response.json();

		responseText = JSON.stringify(result);
		console.log(result)
	}
</script>

<section>
	<h1> Some updated changes in here </h1>
	<button on:click={submitFormTest}>Submit</button>
	<div class="response">{responseText}</div>
</section>

<style lang="scss">
	section {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.response {
		max-width: 70ch;
		text-align: left;
	}
	button {
		appearance: none;
		background-color: cornflowerblue;
		font-size: 15px;
		font-weight: 600;
		padding: 16px;
		border: none;
		color: white;
	}
</style>
