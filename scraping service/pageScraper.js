const teamBhp = {
    url: 'https://classifieds.team-bhp.com/browse_by_body_style/Luxury+&+Niche/',
    async scraper(browser){
        let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
		await page.waitForSelector('.sr_info_mm');
		let urls = await page.$$eval('.sr_image', links => {
			links = links.map(el => {
				const res = {};
				let a = el.querySelector('a');
				res.url = a.href;
				res.imgUrl = a.querySelector('img').src.replace("thumb", "picture");
				return res;
			}) 
			return links;
		});
		let titles = await page.$$eval('.sr_info_mm', links => {
			links = links.map(el =>(el.querySelector('a')).text.trim()) 
			return links;
		});
		let prices=await page.$$eval('.jspriceformat', links => {
			links = links.map(el =>el.textContent.replace(/\D/g,'')) 
			return links;
		});
		urls.map((val, index) => {
			val.title = titles[index];
			val.price = prices[index];
		})
		await page.close();
		console.log(urls);
		//TODO: save to DB

    }
}

const driversHub = {
    url: 'https://www.thedrivershub.com/tdhclassifieds/listing-category/modified-cars/',
    async scraper(browser){
        let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
		// Wait for the required DOM to be rendered
		await page.waitForSelector('.hp-row');
		let urls = await page.$$eval('.hp-listing__image', links => {
			links = links.map(el => {
				const res = {};
				let a = el.querySelector('a');
				res.url = a.href;
				res.imgUrl = a.querySelector('img').src;
				res.title = a.querySelector('img').alt;
				return res;
			}) 
			return links;
		});

		const prices = await page.$$eval('.hp-listing__attribute.hp-listing__attribute--price', links => {
			return links.map(link => link.textContent.replace(/\D/g,''))
		});

		urls.map(((val, index) => {
			val.price=prices[index]
		}))
		await page.close();
		console.log(urls);
		//TODO: save to DB
    }
}

module.exports = [
	driversHub,
	teamBhp
];