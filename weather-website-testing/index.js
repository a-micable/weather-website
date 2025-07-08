const { navigateToWeather } = require('./navigate');
const searchCity = require('./searchCity');
const verifyResults = require('./verifyResults');
const handleMultipleContexts = require('./handleMultipleContexts');
const generatePDF = require('./generatePDF');
const mockAPI = require('./mockAPI');
const extractWeatherInfo = require('./extractWeatherInfo');

(async () => {
    try {
        //Navigate to the website
        console.log('Navigating to weather website...');
        const { browser, page } = await navigateToWeather();

        if (!browser || !page) {
            throw new Error('Failed to navigate to the weather website or browser/page is null');
        }

        // Mock API responses
        console.log('Mocking API responses...');
        await mockAPI(page);

        // Search for weather in a specific city
        console.log('Searching for weather in Addis Ababa...');
        await searchCity(page, 'Addis Ababa');

        // Verify the results
        console.log('Verifying search results...');
        await verifyResults(page, 'Addis Ababa');

        // Extract weather information
        console.log('Extracting weather information...');
        await extractWeatherInfo(page);

        // Check page content before taking the screenshot
        const content = await page.content();
        if (content.includes('Addis Ababa')) {
            console.log('Content verified, taking screenshot...');
            const screenshotPath = 'weather_screenshot.png';
            await page.screenshot({ path: screenshotPath, fullPage: true });
            console.log(`Screenshot saved at: ${screenshotPath}`);
        } else {
            console.log('Content verification failed, not taking screenshot.');
        }

        // Generate a PDF report
        console.log('Generating PDF report...');
        await generatePDF(page, 'Addis_Ababa_Weather.pdf');

        // Handle multiple browser contexts (optional)
        console.log('Handling multiple browser contexts...');
        await handleMultipleContexts(browser, ['Addis Ababa', 'New York', 'London']);

        // Close the browser
        await browser.close();
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
