<script lang="ts">
	import './styles.css';
	import type { LayoutData } from './$types';
	import StoreInfo from 'components/StoreInfo.svelte';

	export let data: LayoutData;
	const { storeData } = data;
</script>

<svelte:head>
	<title>{storeData.name}</title>
	<meta name="description" content={storeData.description} />
</svelte:head>

<section class="mx-auto max-w-5xl flex flex-col">
	<StoreInfo {storeData} />
	<slot />
</section>
