# TechInsights

TechInsights is a modern, full-stack web application that delivers curated technology, programming, and web development news. It demonstrates my ability to design and build production-ready applications using React, Firebase, and MongoDB — complete with authentication, secure APIs, and an admin dashboard.

Live Demo: https://tech-insights-d2159.web.app

Demo Admin Account:
Email: rustark.winterfell@gmail.com
Password: Hello@123

---

## Project Overview

TechInsights is designed to provide tech enthusiasts and developers with up-to-date articles, insights, and resources. The platform features role-based authentication, a fully functional admin dashboard, and secure CRUD operations powered by JWT and Firebase.

---

## Frontend

### Key Features
- Authentication System
  - Firebase Authentication (Email/Password, Google, and GitHub login)
  - Custom AuthProvider & AuthContext with React Context API
- Smooth Navigation
  - Built with react-router-dom for dynamic client-side routing
- UI & UX
  - Responsive design for all screen sizes (mobile to desktop)
  - Global ThemeProvider for light/dark mode support
- Admin Dashboard
  - Manage articles, users, and categories
- Secure Environment
  - Environment variables for Firebase configuration
- API Integration
  - Fetches and modifies backend data with TanStack Query (React Query)

### Frontend Dependencies
- @tanstack/react-query
- react-hook-form
- aos
- swiper
- react-awesome-reveal
- lottie-react
- react-tooltip
- date-fns
- recharts
- react-simple-typewriter

---

## Backend

### Key Features
- Database
  - MongoDB for persistent data storage
  - Mongoose ODM for schema modeling
- CRUD Functionality
  - Create, Read, Update, Delete endpoints for articles and users
- Authentication & Security
  - JWT-based authentication
  - Tokens stored securely in localStorage
  - CORS and CookieParser for cross-origin handling
- Email Functionality
  - Nodemailer integration for sending emails
- Environment Variables
  - .env file used to store sensitive credentials securely
- Data Processing
  - MongoDB Aggregation Pipeline for data analytics and insights

### Backend Dependencies
- express
- mongoose
- jsonwebtoken
- cors
- cookie-parser
- nodemailer
- http-status-toolkit *(authored by me)*
- express-error-toolkit *(authored by me)*

---

## What This Project Demonstrates

This project highlights my ability to:
- Architect and build full-stack applications from scratch
- Implement secure authentication and role-based access
- Design scalable and maintainable APIs
- Manage state efficiently using React Query and Context
- Deliver responsive, animated, and user-friendly UIs

---

## Tech Stack Summary

| Layer | Technology |
|-------|-------------|
| Frontend | React, React Router, TanStack Query, Firebase |
| Backend | Node.js, Express, MongoDB, Mongoose |
| Auth | Firebase Auth, JWT |
| Tools & Utilities | Nodemailer, AOS, Recharts, Lottie, ThemeProvider |
| Deployment | Firebase Hosting |

---

## Developer Notes

This project also utilizes two open-source packages I developed:
- [express-error-toolkit](https://www.npmjs.com/package/express-error-toolkit): A structured error-handling toolkit for Express.js.
- [http-status-toolkit](https://www.npmjs.com/package/http-status-toolkit): A lightweight utility for managing HTTP status codes and messages.

---

## Getting Started

1. Clone the Repository
```
git clone https://github.com/dev-rashedin/techInsights-Project.git
cd techinsights
```

2. Install Dependencies
```
npm install
```

3. Setup Environment Variables
Create a .env file in both client and server directories with the necessary Firebase, MongoDB, and JWT credentials.

4. Run the App
```
npm run dev
```

---

## Contact

If you would like to connect, collaborate, or discuss opportunities:
Email: rashedinislam.06@gmail.com
Portfolio: https://www.rashedin.dev
LinkedIn: https://linkedin.com/in/dev-rashedin
