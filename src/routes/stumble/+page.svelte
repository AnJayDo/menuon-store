<script lang="ts">
	import FoodList from 'components/FoodList.svelte';
	import { Tabs, TabItem } from 'flowbite-svelte';
	import type { ICategory, IFoodItem, ITag } from 'interfaces';
	import MenuList from 'components/MenuList.svelte';
	import { Search, Button } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;

	let searchInput = '';

	let menuList: ITag[] = data.tags;

	let foodList: IFoodItem[] = data.foods;

	let menuCategories: ICategory[] = data.categories;

	let activeCatagoriesId = '1';
	let isShowedFoodList = false;

	function handleChangeCatagory(id: string) {
		activeCatagoriesId = id;
		const chosenMenu = menuCategories.find((item) => item.id === id);
		if (chosenMenu) updateFoodListByCat(chosenMenu?.id);
		if (chosenMenu && chosenMenu.ifOnlyFoods) {
			isShowedFoodList = true;
		} else {
			isShowedFoodList = false;
		}
	}

	function updateFoodListByCat(menuCatId: string) {
		foodList = data.foods.filter((item: IFoodItem) => item.categories.includes(menuCatId));
	}

	function handleChangeMenuList(event: any) {
		console.log(event);
		foodList = data.foods.filter((item: IFoodItem) => item.tags.includes(event.detail.id));
		isShowedFoodList = true;
	}

	function handleSearch(event: KeyboardEvent | MouseEvent | Event) {
		if (!!searchInput && (event.type === 'click' || (event as KeyboardEvent)?.key === 'Enter')) {
			const searchRegex = new RegExp(
				[...searchInput.toLocaleLowerCase()]
					.map((item) => '[' + searchInput.toLocaleLowerCase() + ']')
					.join(''),
				'g'
			);
			foodList = [...data.foods].filter((item) => {
				return searchRegex.test(item.name.toLocaleLowerCase());
			});
			isShowedFoodList = true;
		} else if (
			searchInput === '' &&
			(event.type === 'click' || (event as KeyboardEvent)?.key === 'Enter')
		) {
			resetState();
		}
	}

	function resetState() {
		activeCatagoriesId = '1';
		isShowedFoodList = false;
	}
</script>

<div class="w-full px-2 py-2 bg-white">
	<Search
		bind:value={searchInput}
		class="py-3"
		placeholder="Tìm món"
		on:keydown={(event) => handleSearch(event)}
	>
		<Button class="-mr-1.5" on:click={(event) => handleSearch(event)}
			><Icon name="search-outline" class="w-5 h-5 mr-3" />Search</Button
		>
	</Search>
</div>
<div class="w-full bg-white px-3 pt-2 pb-4 rounded-b-lg">
	<Tabs style="pill">
		{#each menuCategories as item}
			<TabItem open={activeCatagoriesId === item.id} on:click={() => handleChangeCatagory(item.id)}>
				<span slot="title">{item.title}</span>
				{#if activeCatagoriesId === item.id && !isShowedFoodList}
					<MenuList on:changeMenuList={handleChangeMenuList} {menuList} />
				{:else if activeCatagoriesId === item.id && isShowedFoodList}
					<FoodList {foodList} />
				{/if}
			</TabItem>
		{/each}
	</Tabs>
</div>

<style>
</style>
