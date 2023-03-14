<script>
	let records = [
		{
			name: 'Mercedes C220d',
			price: 1700000,
			photo:
				'https://www.thedrivershub.com/tdhclassifieds/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-08-at-7.10.04-PM-400x300.jpeg',
			postLink: 'https://www.thedrivershub.com/tdhclassifieds/listing/mercedes-c220d/'
		},
		{
			name: 'Skoda Octavia 1.8',
			price: 2090000,
			photo: 'https://classifieds.team-bhp.com/files/pictures/picture_289494.jpg',
			postLink: 'https://www.thedrivershub.com/tdhclassifieds/listing/mercedes-c220d/'
		},
		{
			name: 'Mercedes C220d',
			price: 1700000,
			photo:
				'https://www.thedrivershub.com/tdhclassifieds/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-08-at-7.10.04-PM-400x300.jpeg',
			postLink: 'https://www.thedrivershub.com/tdhclassifieds/listing/mercedes-c220d/'
		},
		{
			name: 'Skoda Octavia 1.8',
			price: 2090000,
			photo: 'https://classifieds.team-bhp.com/files/pictures/picture_289494.jpg',
			postLink: 'https://www.thedrivershub.com/tdhclassifieds/listing/mercedes-c220d/'
		}
	];

	/**
	 * @param {number} price
	 */
	function formatPrice(price) {
		return Intl.NumberFormat('en-IN', {
			style: 'currency',
			currency: 'INR'
		}).format(price);
	}
</script>

<div class="bg-slate-900 text-white flex flex-wrap p-20">
	{#each records as { price, name, photo, postLink }}
		<div class="text-center p-10">
			<img src={photo} alt="name" class="h-64 " />
			<a target="_blank" href={postLink} rel="noreferrer">
				<div class="text-ceter">{name}</div>
				<div>{formatPrice(price)}</div>
			</a>
		</div>
	{/each}
</div>
