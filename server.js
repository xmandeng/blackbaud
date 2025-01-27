const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static('.'));

// API endpoint to serve the calendar data
app.get('/api/iCalRSS/iCalMyCalendarsGet', async (req, res) => {
    try {
        const data = await fs.readFile('sample_calendar_data_1.json', 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        console.error('Error reading calendar data:', error);
        res.status(500).json({ error: 'Failed to load calendar data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 