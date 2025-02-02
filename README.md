# Blackbaud Calendar QR Generator

A modern, responsive web application that generates QR codes for easy student calendar subscriptions in Blackbaud. Built with vanilla JavaScript, it fetches calendar data from Blackbaud's API and creates scannable QR codes for desktop users while providing a streamlined mobile experience. The application automatically adapts its interface based on the user's device, ensuring optimal usability across all platforms.

## Key Features
- Adaptive interface that automatically detects device type
- Desktop: High-quality QR codes with error correction
- Mobile: Streamlined direct subscription buttons
- Auto-generates webcal:// URLs with timestamp versioning
- Responsive card layout optimized for all screen sizes
- Smart loading: QR code library only loads on desktop devices
- Efficient resize handling with debouncing
- Mobile-first design principles

## Tech Stack
- Vanilla JavaScript for core functionality
- QRCode.js (conditional loading for desktop only)
- CSS Grid and Media Queries for responsive layout
- Blackbaud API integration
- Performance-optimized asset loading

## Mobile Optimizations
- Automatic device detection
- Simplified UI for mobile users
- Removed QR codes and related instructions on mobile
- Enhanced touch targets for better mobile interaction
- Optimized button sizing and spacing
- Reduced unnecessary asset loading
- Responsive typography and spacing

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

The server will start on `http://localhost:3000`. Access the QR code generator at:
- `http://localhost:3000/qr_generator.html`

## Project Structure
- `qr_generator.html` - Main responsive interface with mobile detection
- `server.js` - Express server for static files and API endpoint
- `sample_calendar_data_1.json` - Sample calendar data for development
- `package.json` - Project dependencies and scripts

## Development Notes

### Device Detection
The application uses JavaScript to detect the device type and window size, adjusting the interface accordingly:
- Desktop (>768px): Full interface with QR codes
- Mobile (≤768px): Simplified interface with direct subscription buttons

### Performance Considerations
- QRCode.js is only loaded for desktop users
- Responsive images and optimized assets
- Debounced resize handling to prevent performance issues
- Conditional rendering based on device type

### Testing
When testing, ensure to check:
1. Desktop to mobile transitions
2. QR code generation on desktop
3. Direct subscription flow on mobile
4. Layout responsiveness across breakpoints
5. Performance on various devices

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Notes
- The server runs on port 3000 by default (configurable via PORT environment variable)
- Static files are served from the root directory
- Sample calendar data is loaded from `sample_calendar_data.json`
- The interface automatically adapts to screen size changes