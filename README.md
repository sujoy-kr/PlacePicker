# PlacePicker

A modern, mobile-responsive web application that allows users to curate a personal collection of travel destinations they wish to visit. The app intelligently sorts available locations based on the user's current geographic proximity and persists data via a backend API.

## 🚀 Live Demo

Check out the live application here: [https://place-picker-beige.vercel.app](https://place-picker-beige.vercel.app)

## 🌈 Preview

![App Screenshot](docs/app-screenshot.png)

## ✨ Features

-   **Location Intelligence**: Automatically sorts available places by distance using the browser's Geolocation API.
-   **Backend Persistence**: Your "wishlist" is stored on a backend server, ensuring your selections are saved across devices and browser sessions.
-   **Custom Hook for Data Fetching**: Uses a reusable `useFetch` hook to handle fetching, loading states, and error management for all API interactions.
-   **Interactive Management**: Seamlessly add new places to your list or remove them with a timed confirmation safety net.
-   **Mobile Responsive**: Designed to provide a fluid experience across all devices and screen sizes.

## 💻 Local Setup

```bash
npm install
npm run dev
```
