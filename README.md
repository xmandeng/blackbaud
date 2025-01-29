# Blackbaud Calendar QR Generator

A web application that generates QR codes for easy student calendar subscriptions in Blackbaud. Built with vanilla JavaScript, it fetches calendar data from Blackbaud's API and creates scannable QR codes that automatically configure calendar subscriptions on mobile devices. Features responsive card layout, optimized QR code generation, and user-friendly subscription instructions.

## Key Features
- Auto-generates webcal:// URLs with timestamp versioning
- High-quality QR codes with error correction
- Responsive grid layout for multiple student calendars
- Direct subscription button alternative
- Mobile-optimized scanning instructions

## Tech
- QRCode.js for QR generation
- Blackbaud API integration
- CSS Grid for responsive layout

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Setup

1. Clone the repository:

```bash
git clone git@github.com:xmandeng/cathedral-qr.git
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

The server will start on `http://localhost:3000`. You can access the QR code generator at:

- `http://localhost:3000/qr_generator.html`

## Project Structure

- `server.js` - Express server that serves static files and the calendar API endpoint
- `qr_generator.html` - Main QR code generator interface
- `sample_calendar_data_1.json` - Sample calendar data for local development
- `package.json` - Project dependencies and scripts

## Development

The server provides a local API endpoint at `/api/iCalRSS/iCalMyCalendarsGet` that returns sample calendar data. This allows you to develop and test the QR code generator without needing to authenticate with the school's website.

## Notes

- The server runs on port 3000 by default. You can change this by setting the `PORT` environment variable
- All static files in the root directory are served automatically
- The sample calendar data is loaded from `sample_calendar_data.json`
