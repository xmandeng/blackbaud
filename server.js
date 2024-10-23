const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Serve static files from the public folder
app.use(express.static('public'));
app.use(bodyParser.json());

// Define a route for the token extraction
app.post('/get-token', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        // Launch Puppeteer using Chrome with the necessary flags
        const browser = await puppeteer.launch({
            headless: false, // Run in non-headless mode for visual confirmation
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', // Path to Chrome on macOS
            userDataDir: '/Users/xaviermandeng/Library/Application Support/Google/Chrome/Profile 1', // Path to your Chrome profile
            args: [
                '--disable-features=StrictOriginWhenCrossOrigin',
                '--disable-web-security', // Disable same-origin policy
                '--allow-running-insecure-content' // Allow running insecure content
            ]
        });

        // Log the arguments being passed to Chrome
        console.log(await browser.process().spawnargs);

        const page = await browser.newPage();

        // Intercept requests and modify headers
        await page.setRequestInterception(true);

        page.on('request', interceptedRequest => {
            const headers = interceptedRequest.headers();
            console.log('Request Headers Before Modification:', headers);

            // Modify headers if needed (e.g., remove origin or referer)
            headers['referer'] = '';
            headers['origin'] = '';

            interceptedRequest.continue({ headers }); // Continue with modified headers
        });

        // Visit the target URL
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Extract cookies and log them for inspection
        const cookies = await page.cookies();
        console.log('Cookies:', cookies);

        // Look for the 't' token in cookies
        const tToken = cookies.find(cookie => cookie.name === 't');

        // Close the browser after extracting the token
        await browser.close();

        // Return the token if found, otherwise return an error message
        if (tToken) {
            return res.json({ token: tToken.value });
        } else {
            console.log('No token found in cookies:', cookies);
            return res.json({ token: 'No token found' });
        }
    } catch (error) {
        console.error('Error extracting token:', error);
        return res.status(500).json({ error: 'Failed to extract token', details: error.toString() });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
