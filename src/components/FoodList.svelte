<script lang="ts">
	import FoodItem from './FoodItem.svelte';
	import type { IFoodItem } from '../interfaces';

	export let foodList: IFoodItem[];
</script>

<div class="grid-layout gap-3">
	{#each foodList as foodItem}
		<FoodItem {foodItem} />
	{/each}
</div>
