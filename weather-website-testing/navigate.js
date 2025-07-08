const { chromium } = require('playwright');

async function navigateToWeather() {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    try {
        console.log('Navigating to weather.com...');
        
        // Attempt to navigate with retries
        for (let i = 0; i < 3; i++) {
            try {
                await page.goto('https://weather.com/', { waitUntil: 'load', timeout: 120000 });
                console.log('Successfully navigated to weather.com.');
                
                // Wait for a specific element to ensure the page is loaded
                await page.waitForSelector('.CurrentConditions--phraseValue--2xXSr', { timeout: 60000 });
                console.log('Page loaded successfully and the expected element is visible.');
                break;
            } catch (error) {
                if (i === 2) {
                    throw new Error('Failed to load the page after multiple attempts');
                }
                console.log(`Attempt ${i + 1} failed. Retrying...`);
            }
        }

    } catch (error) {
        console.error(`Error navigating to weather.com: ${error.message}`);
        await browser.close();
        return { browser: null, page: null };
    }

    return { browser, page };
}

module.exports = { navigateToWeather };
