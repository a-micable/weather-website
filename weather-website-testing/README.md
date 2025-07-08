# Weather Website Automation with Playwright

This repository contains a Node.js project that automates interaction with weather websites using Playwright. The script navigates to a weather website, searches for weather information for a specified city, verifies the results, takes screenshots, and generates a PDF report.

## Features

- **Navigate to Weather Website**: Automates navigation to a weather website.
- **Search for City Weather**: Searches for the weather in a specified city.
- **Verify Results**: Ensures the correct weather data is displayed.
- **Extract Weather Information**: Gathers and displays weather information.
- **Screenshots**: Captures screenshots of the weather data.
- **PDF Report**: Generates a PDF report containing the weather information.
- **Mock API Responses**: Supports API mocking for testing purposes.
- **Multiple Browser Contexts**: Allows testing across multiple cities in separate browser contexts.

## Prerequisites

- **Node.js**: Make sure Node.js is installed on your machine.
- **Playwright**: Installed via npm as a dependency.

**Outputs**:
    - **Screenshots**: Located in the project directory as `weather_screenshot.png`.
    - **PDF Report**: Saved as `Weather_Report.pdf`.

## Project Structure

- `index.js`: The main script that coordinates the entire process.
- `navigate.js`: Contains the function to navigate to the weather website.
- `searchCity.js`: Function for searching the weather of a specified city.
- `verifyResults.js`: Verifies that the correct weather data is displayed.
- `generatePDF.js`: Generates a PDF report of the weather data.
- `mockAPI.js`: Handles API mocking for controlled testing.
- `extractWeatherInfo.js`: Extracts weather details from the page.

## Troubleshooting

- **Timeout Errors**: If the script times out while waiting for elements, ensure the selectors in `verifyResults.js` and other relevant files are correct and up-to-date.
- **Navigation Errors**: Make sure the website URL in `navigate.js` is accessible and correct.
