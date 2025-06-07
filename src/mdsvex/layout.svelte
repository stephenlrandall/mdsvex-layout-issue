<script module>
	import p from "./components/Paragraph.svelte";

	export { p };
</script>

<script>
	let { children } = $props();
</script>

{@render children()}