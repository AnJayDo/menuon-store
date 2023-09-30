<script lang="ts">
	import '../app.postcss';
	import './styles.css';
	import type { LayoutData } from './$types';
	import StoreInfo from 'components/StoreInfo.svelte';

	export let data: LayoutData;
	const { storeData } = data;
</script>

<svelte:head>
	<title>{storeData.name}</title>
	<meta name="description" content={storeData.description} />
	<link rel="icon" type="image/png" href={storeData.avatar} />
</svelte:head>

<div class="app">
	<main class="flex flex-col justify-center items-center w-full">
		<section class="mx-auto max-w-5xl flex flex-col">
			<StoreInfo {storeData} />
			<slot />
		</section>
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
