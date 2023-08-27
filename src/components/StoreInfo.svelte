<script lang="ts">
	import { Eye, EyeSlash, MapPin, Phone, Wifi } from 'svelte-heros-v2';
	import type {IStore} from 'interfaces';

	const iconSize = '24';

	let isShowedPassword = false;
	
	function toggleShowedPassword(event : MouseEvent) {
		isShowedPassword = !isShowedPassword;
	}

	export let storeData:IStore;
</script>

<div class="w-full max-h-96 flex items-center overflow-hidden">
	<img
		class="w-full h-auto flex"
		src={storeData.cover}
		alt={storeData.name + ' store cover image.'}
	/>
</div>
<div
	class="-mt-5 rounded-t-xl flex md:flex-row flex-col pt-2 pb-3 bg-white shadow-[0px_-3px_8px_-3px_rgba(20,20,20,0.2)] w-full"
>
	<div
		class="p-0.5 rounded-full border border-slate-300 w-fit h-fit bg-white -mt-16 mx-auto md:mx-7"
	>
		<img
			class="flex rounded-full w-48 h-auto"
			src={storeData.avatar}
			alt={storeData.name + ' store avatar image.'}
		/>
	</div>
	<div class="flex flex-col items-center md:items-start pb-3">
		<h1>{storeData.name}</h1>
		<a href={"http://maps.google.com/?q="+storeData.location} target="_blank" class="info-row">
			<MapPin class="icon" size={iconSize} />
			{storeData.location}
		</a>
		<a href={'tel:'+storeData.phoneNumber} target="_blank" class="info-row">
			<Phone class="icon" size={iconSize} />
			{storeData.phoneNumber}
		</a>
		<div class="info-row">
			<Wifi class="icon" size={iconSize} />
			{storeData.wifiName}
			<div class="ml-3">
				{#if !isShowedPassword}
					<Eye on:click={toggleShowedPassword} size={iconSize} />
				{:else}
					<div class="flex items-center" on:click={toggleShowedPassword}>
						<a><EyeSlash size={iconSize} /></a>
						<b class="ml-3">{storeData.wifiPassword}</b>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
