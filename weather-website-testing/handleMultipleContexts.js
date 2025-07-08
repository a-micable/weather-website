const { chromium } = require('playwright');

async function handleMultipleContexts(browser, cities) {
    try {
        console.log('Handling multiple browser contexts...');
        for (const city of cities) {
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto('https://weather.com', { waitUntil: 'networkidle', timeout: 120000 });
            await page.fill('input[name="search"]', city);
            await page.keyboard.press('Enter');
            await page.waitForTimeout(5000); // Wait for results to load
            console.log(`Weather info for ${city}:`, await page.textContent('div[data-testid="CurrentConditions"]'));
            await context.close();
        }
    } catch (error) {
        console.error('Error handling multiple contexts:', error);
        throw error;
    }
}

module.exports = handleMultipleContexts;
