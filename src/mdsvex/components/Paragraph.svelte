<script>
	let { children } = $props();
</script>

<p>{@render children()}</p>

<style>
	p {
		font-family: Georgia, 'Times New Roman', Times, serif;
		color: rgb(40, 129, 201);
	}
</style>