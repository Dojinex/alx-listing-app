# ALX Listing App

An Airbnb clone project focused on creating a beautiful and functional property listing page. This project is built with Next.js, TypeScript, TailwindCSS, and follows best practices for code organization and maintainability.

## Project Overview

The ALX Listing App is a modern web application that allows users to browse, search, and book vacation rentals. The application features a responsive design, reusable components, and a clean architecture.

## Features

- **Property Listings**: Display properties with images, descriptions, pricing, and ratings
- **Filtering & Search**: Filter properties by location, price range, dates, and amenities
- **Responsive Design**: Fully responsive UI that works on mobile, tablet, and desktop
- **Type Safety**: Built with TypeScript for improved developer experience
- **Modern Styling**: Styled with TailwindCSS for rapid UI development

## Project Structure

alx-listing-app/
├── components/
│ ├── common/
│ │ ├── Button.tsx # Reusable Button component
│ │ └── Card.tsx # Reusable Card component for properties
├── interfaces/
│ └── index.ts # TypeScript interfaces and types
├── constants/
│ └── index.ts # Application constants and configuration
├── pages/
│ ├── index.tsx # Home page
│ └── \_app.tsx # Next.js app wrapper
├── public/
│ └── assets/
│ ├── images/ # Property images
│ └── icons/ # SVG icons
├── styles/
│ └── globals.css # Global styles
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json # TypeScript configuration
├── next.config.js # Next.js configuration
└── package.json # Dependencies and scripts

text

### Directory Details

- **components/common/**: Contains reusable UI components like Card and Button
- **interfaces/**: TypeScript interfaces for type safety across the application
- **constants/**: Application-wide constants, configuration, and UI text
- **public/assets/**: Static assets including images and icons
- **pages/**: Next.js page components and routing

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd alx-listing-app
   Install dependencies:
   ```

bash
npm install

# or

yarn install
Run the development server:

bash
npm run dev

# or

yarn dev
Open your browser and navigate to http://localhost:3000

Development
Available Scripts
npm run dev - Start the development server

npm run build - Build the application for production

npm start - Start the production server

npm run lint - Run ESLint to check code quality

Code Quality
TypeScript: Strict type checking enabled

ESLint: Configured with Next.js and TypeScript rules

Prettier: Code formatting (if configured)

Technologies Used
Next.js: React framework with server-side rendering

TypeScript: Type-safe JavaScript

TailwindCSS: Utility-first CSS framework

React: UI library

ESLint: Code linting

Contributing
Fork the repository

Create a feature branch

Commit your changes

Push to the branch

Open a Pull Request

License
This project is created for educational purposes as part of the ALX program.

Contact
For questions or feedback, please refer to the project repository.

text

## 5. Update Package.json Scripts

Make sure the package.json has the correct scripts:

**package.json** (relevant part):

```json
{
  "name": "alx-listing-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "autoprefixer": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest",
    "postcss": "latest",
    "tailwindcss": "latest",
    "typescript": "latest"
  }
}
6. Create Additional Files
pages/_app.tsx:

tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
next.config.js:

javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
7. Run and Verify the Project
Now let me run the project to verify everything works:

bash
cd alx-listing-app
npm install
npm run dev
The project should now be running on http://localhost:3000 with:

A responsive layout using TailwindCSS

TypeScript enabled

ESLint configured

All required directories and files created

Basic components (Card and Button) ready for use

TypeScript interfaces defined

Constants properly organized

README with setup instructions




```
