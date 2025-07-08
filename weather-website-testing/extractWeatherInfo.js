async function extractWeatherInfo(page) {
    try {
        console.log('Extracting weather information...');
        const weatherInfoSelector = 'div[data-testid="CurrentConditions"]';
        await page.waitForSelector(weatherInfoSelector, { state: 'visible', timeout: 30000 });
        const weatherInfo = await page.textContent(weatherInfoSelector);
        console.log('Weather Information:', weatherInfo);
    } catch (error) {
        console.error('Error extracting weather information:', error);
        throw error;
    }
}

module.exports = extractWeatherInfo;
