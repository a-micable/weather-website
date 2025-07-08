async function mockAPI(page) {
    try {
        console.log('Mocking API responses...');
        
        // Intercept and mock the API response
        await page.route('**/api/weather', (route, request) => {
            // Define a mock response
            const mockResponse = {
                "city": "Addis Ababa",
                "temperature": "24°C",
                "condition": "Sunny"
            };
            
            // Send the mock response
            route.fulfill({
                contentType: 'application/json',
                body: JSON.stringify(mockResponse),
            });
        });

        console.log('API responses mocked.');
    } catch (error) {
        console.error('Error mocking API responses:', error);
        throw error;
    }
}

module.exports = mockAPI;
