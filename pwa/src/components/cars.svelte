<script>
	let records = [
		{
			url: 'https://www.thedrivershub.com/tdhclassifieds/listing/mercedes-c220d/',
			imgUrl:
				'https://www.thedrivershub.com/tdhclassifieds/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-08-at-7.10.04-PM-400x300.jpeg',
			title: 'Mercedes C220d',
			price: '1700000',
			postedOn: '2023-03-08 16:38:55',
			site: 'drivershub'
		},
		{
			url: 'https://www.thedrivershub.com/tdhclassifieds/listing/skoda-octavia-1-8/',
			imgUrl:
				'https://www.thedrivershub.com/tdhclassifieds/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-07-at-3.24.30-PM-1-400x300.jpeg',
			title: 'Skoda Octavia 1.8',
			price: '2090000',
			postedOn: '2023-03-07 18:55:56',
			site: 'drivershub'
		},
		{
			url: 'https://www.thedrivershub.com/tdhclassifieds/listing/abarth-punto-2/',
			imgUrl:
				'https://www.thedrivershub.com/tdhclassifieds/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-03-at-6.28.31-PM-1-400x300.jpeg',
			title: 'Abarth Punto',
			price: '640000',
			postedOn: '2023-03-04 14:43:04',
			site: 'drivershub'
		},
		{
			url: 'https://www.thedrivershub.com/tdhclassifieds/listing/vw-polo-1-5-tdi/',
			imgUrl:
				'https://www.thedrivershub.com/tdhclassifieds/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-9.33.11-AM-400x300.jpeg',
			title: 'VW Polo 1.5 TDI',
			price: '700000',
			postedOn: '2023-02-21 21:31:30',
			site: 'drivershub'
		},
		{
			url: 'https://www.thedrivershub.com/tdhclassifieds/listing/skoda-laura-2/',
			imgUrl:
				'https://www.thedrivershub.com/tdhclassifieds/wp-content/uploads/2023/02/IMG_7160-400x300.jpg',
			title: 'Skoda Laura',
			price: '800000',
			postedOn: '2023-02-09 17:37:35',
			site: 'drivershub'
		},
		{
			url: 'https://www.thedrivershub.com/tdhclassifieds/listing/skoda-laura/',
			imgUrl:
				'https://www.thedrivershub.com/tdhclassifieds/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-07-at-2.03.46-PM-400x300.jpeg',
			title: 'Skoda Laura',
			price: '600000',
			postedOn: '2023-02-07 13:12:57',
			site: 'drivershub'
		},
		{
			url: 'https://www.thedrivershub.com/tdhclassifieds/listing/abarth-punto/',
			imgUrl:
				'https://www.thedrivershub.com/tdhclassifieds/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-24-at-12.45.05-PM-400x300.jpeg',
			title: 'Abarth Punto',
			price: '770000',
			postedOn: '2023-01-24 08:28:44',
			site: 'drivershub'
		},
		{
			url: 'https://www.thedrivershub.com/tdhclassifieds/listing/vw-polo-1-0-tsi-mt/',
			imgUrl:
				'https://www.thedrivershub.com/tdhclassifieds/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-09-at-12.11.00-PM-400x300.jpeg',
			title: 'VW Polo 1.0 TSI MT',
			price: '950000',
			postedOn: '2023-01-10 21:07:44',
			site: 'drivershub'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70411/Gurgaon/2010/Mercedes-Benz/E-Class.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_294330.jpg',
			title: '2010 Mercedes-Benz E-Class',
			price: '725000',
			postedOn: '13-03-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70407/Bengaluru/2016/Audi/A6.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_294303.jpg',
			title: '2016 Audi A6',
			price: '2900000',
			postedOn: '13-03-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70388/New%20Delhi/2009/Mercedes-Benz/E-Class.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_294198.jpg',
			title: '2009 Mercedes-Benz E-Class',
			price: '585000',
			postedOn: '08-03-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70376/Chandigarh/2005/Mercedes-Benz/E-Class.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_294129.jpg',
			title: '2005 Mercedes-Benz E-Class',
			price: '300000',
			postedOn: '06-03-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70375/Delhi/2015/Audi/A3.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_294121.jpg',
			title: '2015 Audi A3',
			price: '1475000',
			postedOn: '06-03-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70335/Mumbai/2011/BMW/5-Series.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_293846.jpg',
			title: '2011 BMW 5-Series',
			price: '1451000',
			postedOn: '01-03-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70313/Pune/2010/Honda/Accord.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_293767.jpg',
			title: '2010 Honda Accord',
			price: '650000',
			postedOn: '27-02-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/69430/Bangalore/1973/Vintage---Classic/Mercedes-W115.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_288621.jpg',
			title: '1973 Vintage / Classic Mercedes W115',
			price: '300000',
			postedOn: '26-02-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70305/Chandigarh/2011/Skoda/Superb.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_293657.jpg',
			title: '2011 Skoda Superb',
			price: '585000',
			postedOn: '25-02-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70304/New%20Delhi/2015/BMW/7-Series.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_293655.jpg',
			title: '2015 BMW 7-Series',
			price: '2290000',
			postedOn: '25-02-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70296/Bengaluru/2015/Mercedes-Benz/GLA-Class.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_293610.jpg',
			title: '2015 Mercedes-Benz GLA-Class',
			price: '1975000',
			postedOn: '23-02-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70288/Pune/2011/Honda/Accord.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_293564.jpg',
			title: '2011 Honda Accord',
			price: '795000',
			postedOn: '22-02-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70279/Bengaluru/2010/Mercedes-Benz/E-Class.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_293514.jpg',
			title: '2010 Mercedes-Benz E-Class',
			price: '1250000',
			postedOn: '22-02-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70255/Bangalore/2011/Mercedes-Benz/S-Class.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_293366.jpg',
			title: '2011 Mercedes-Benz S-Class',
			price: '1950000',
			postedOn: '18-02-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70250/Bangalore/2007/BMW/3-Series.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_293383.jpg',
			title: '2007 BMW 3-Series',
			price: '1200000',
			postedOn: '18-02-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70249/Bangalore/2011/BMW/3-Series.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_293382.jpg',
			title: '2011 BMW 3-Series',
			price: '1500000',
			postedOn: '18-02-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70257/Faridabad,%20HR/2019/Mercedes-Benz/C-Class.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_293380.jpg',
			title: '2019 Mercedes-Benz C-Class',
			price: '4150000',
			postedOn: '18-02-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/70243/New%20Delhi/2013/Mercedes-Benz/A-Class.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_293316.jpg',
			title: '2013 Mercedes-Benz A-Class',
			price: '765000',
			postedOn: '17-02-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/69569/Chennai/2018/Volkswagen/Passat.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_289494.jpg',
			title: '2018 Volkswagen Passat',
			price: '2780000',
			postedOn: '15-02-2023',
			site: 'team-bhp'
		},
		{
			url: 'https://classifieds.team-bhp.com/buy-used-for-sale/69773/Bangalore/2013/BMW/7-Series.html/',
			imgUrl: 'https://classifieds.team-bhp.com/files/pictures/picture_290612.jpg',
			title: '2013 BMW 7-Series',
			price: '3650000',
			postedOn: '14-02-2023',
			site: 'team-bhp'
		}
	];

	/**
	 * @param {number | string} price
	 */
	function formatPrice(price) {
		if (typeof price === 'string') price = parseInt(price);
		return Intl.NumberFormat('en-IN', {
			style: 'currency',
			currency: 'INR'
		}).format(price);
	}
</script>

<div class="flex flex-wrap justify-center w-full max-w-screen-2xl">
    {#each records as { price, title, imgUrl, url,postedOn }}
	<div class="text-center p-6">
		<img src={imgUrl} alt={title} />
		<a target="_blank" href={url} rel="noreferrer">
			<div class="text-2xl sm:text-3xl font-light pt-2 sm:pt-4 pb-1 sm:pb-2">{title}</div>
            <div class="text-sm sm:text-base italic font-light text-gray-400">{postedOn}</div>
			<div class="text-xl sm:text-2xl font-normal text-gray-200">{formatPrice(price)}</div>
		</a>
	</div>
{/each}
</div>
