<script lang="ts">
	import type { ITag, IStore } from 'interfaces';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function changeFoodList(item: ITag) {
		dispatch('changeMenuList', item);
	}

	export let menuList: ITag[];
</script>

<div class="grid-layout gap-3">
	{#each menuList as item}
		<button
			on:click={() => changeFoodList(item)}
			class="flex relative justify-center items-center h-36 md:h-48 overflow-hidden rounded-lg"
		>
			<img class="" src={item.imageSrc} alt="" />
			<div
				class="absolute w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.3)] text-white"
			>
				<h1>{item.name}</h1>
			</div>
		</button>
	{/each}
</div>
