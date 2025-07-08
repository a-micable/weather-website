const { chromium } = require('playwright');

async function searchCity(page, cityName) {
    try {
        // Wait for the search bar to be visible
        await page.waitForSelector('input[name="search"]', { timeout: 90000 });

        console.log("Search bar found.");

        // Type the city name into the search bar
        await page.fill('input[name="search"]', cityName);
        console.log(`Searching for weather in ${cityName}...`);

        // Press Enter to search
        await page.press('input[name="search"]', 'Enter');

        // Wait for network idle after submitting the search
        await page.waitForLoadState('networkidle');

    } catch (error) {
        console.error(`Error searching for city: ${error}`);
    }
}

module.exports = { searchCity };
