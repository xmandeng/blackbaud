# Cathedral QR Code Generator

A web application that generates QR codes for calendar subscriptions. This local development version uses sample calendar data to allow for testing without requiring authentication to the school's website.

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Setup

1. Clone the repository:
```bash
git clone [your-repository-url]
cd cathedral-qr
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The server will start on http://localhost:3000. You can access the QR code generator at:
- http://localhost:3000/qr_generator.html

## Project Structure

- `server.js` - Express server that serves static files and the calendar API endpoint
- `qr_generator.html` - Main QR code generator interface
- `sample_calendar_data_1.json` - Sample calendar data for local development
- `package.json` - Project dependencies and scripts

## Development

The server provides a local API endpoint at `/api/iCalRSS/iCalMyCalendarsGet` that returns sample calendar data. This allows you to develop and test the QR code generator without needing to authenticate with the school's website.

## Notes

- The server runs on port 3000 by default. You can change this by setting the `PORT` environment variable.
- All static files in the root directory are served automatically.
- The sample calendar data is loaded from `sample_calendar_data.json`. 