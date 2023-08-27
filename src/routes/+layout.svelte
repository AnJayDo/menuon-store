<script>
	import '../app.postcss';
</script>

<div class="app">
	<main class="flex flex-col justify-center items-center w-full">
		<slot />
	</main>

	<footer>
		<p>Build on © 2023 <a href="https://www.menuon.site">MenuOn</a></p>
	</footer>
</div>

<style lang="postcss">
	footer {
		opacity: 0.3;
		display: flex;
		justify-content: center;
		justify-items: center;
		padding: 10px 5px 5px;
		color: #606060;

		a {
			text-decoration: none !important;
			color: #000000 !important;
		}
	}
</style>
