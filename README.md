🌦️ Weather Website Automation with Playwright
A Node.js automation project using Playwright to interact with a weather website. This script automates the process of searching for weather data by city, capturing screenshots, verifying results, extracting details, and generating a PDF report — all with clean modular code.

Overview
This project showcases the power of browser automation for web scraping, UI testing, and reporting. It simulates a user navigating to a weather site, searching for weather in a city of your choice, validating the output, and saving it all for later review.

Features
avigate to Weather Website
Automatically opens and loads the specified weather site.

Search for City Weather
Enters a city name and initiates the weather search.

Verify Results
Checks whether the displayed data matches the search query.

Extract Weather Information
Scrapes current weather data like temperature, condition, etc.

Capture Screenshots
Saves a screenshot of the result for visual reference.

 Generate PDF Report
Compiles weather info into a professional-looking PDF report.

 Mock API Responses
Supports mocking for consistent testing without live API hits.

 Multiple Browser Contexts
Simultaneously tests different cities in isolated sessions.

 Prerequisites
Node.js (v16 or later)

Playwright (installed via npm)
