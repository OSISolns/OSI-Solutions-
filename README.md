# OSI Solutions Website

A modern Next.js website for OSI Solutions Ltd, showcasing IT solutions and services.

## Features

- Responsive design
- Contact form with EmailJS integration
- Google Analytics integration
- Modern UI with animations
- Mobile-friendly navigation
- Security headers and protection

## Tech Stack

- Next.js 14
- React 18
- EmailJS for form handling
- Font Awesome for icons
- Google Fonts

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd osi-solutions-next
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your EmailJS credentials:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

- `/pages` - Next.js pages and routing
- `/public` - Static assets
- `/styles` - Global CSS styles
- `/components` - Reusable React components

## License

© 2024 OSI Solutions Ltd. All rights reserved. 