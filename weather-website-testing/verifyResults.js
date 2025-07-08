async function verifyResults(page, city) {
    try {
        console.log('Verifying search results...');
        const resultSelector = 'div[data-testid="CurrentConditions"]';
        await page.waitForSelector(resultSelector, { state: 'visible', timeout: 30000 });
        const textContent = await page.textContent(resultSelector);
        if (textContent.includes(city)) {
            console.log(`Results verified for ${city}.`);
        } else {
            throw new Error(`Search results verification failed for ${city}.`);
        }
    } catch (error) {
        console.error('Error verifying results:', error);
        throw error;
    }
}

module.exports = verifyResults;
