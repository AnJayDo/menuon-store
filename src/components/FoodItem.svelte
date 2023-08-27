<script lang="ts">
	import { random_hex_color_code } from '$lib/utils';
	import type { IFoodItem, ITag } from '../interfaces';
	import { tags } from '$lib/data';

	export let foodItem: IFoodItem;

	const mappedTags: ITag[] | any[] = foodItem.tags.map((item) => {
		const result = tags.find((tag) => tag.id === item);
		(result as any).color = random_hex_color_code();
		return result;
	});
</script>

<div class="food-item">
	<img class="rounded-lg object-cover aspect-video" src={'/foods/' + foodItem.imageSrc} alt="" />
	<div class="relative">
		<div class="absolute top-3 right-3">{foodItem.size}</div>
		<h1 class="text-2xl font-bold">{foodItem.name}</h1>
		<p>{foodItem.description}</p>
		<!-- <div class="flex flex-wrap">
			{#each mappedTags as tag}
				<div class="food-tag" style={`background-color: ${tag.color}`}>
					{tag.name}
				</div>
			{/each}
		</div> -->
		<div class="flex items-start text-xl price-tag">
			<strong class="text-orange-500">{foodItem.price}.000đ</strong>
			{#if !!foodItem.originalPrice}
				<span class="line-through ml-2">{foodItem.originalPrice}.000đ</span>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	.food-item {
		.price-tag {
			.line-through {
				font-size: 80%;
			}
		}
	}
</style>
