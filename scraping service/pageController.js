const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		console.log('Scraping '+pageScraper.length+' sites.....')
		for (const pS of pageScraper) {
			try {
				await pS.scraper(browser);
			} catch (error) {
				console.log(error)
			}
		}
		await browser.close();
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)