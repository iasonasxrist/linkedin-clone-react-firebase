# LinkedIn Clone with Firebase Authentication

![LinkedIn Logo](linkedin_logo.png) ![Firebase Logo](firebase_logo.png) ![React Logo](react_logo.png) ![Sass Logo](sass_logo.png)

## Overview

This project is a clone of LinkedIn, a professional networking platform, built using React for the frontend, Firebase for authentication, and Sass for styling.

## Features

- **User Authentication:** Users can sign up, log in, and log out securely using Firebase authentication.
- **Profile Creation:** Users can create and customize their profiles, including adding personal details, education, work experience, and skills.
- **News Feed:** Users can view and interact with a feed of posts from other users, similar to LinkedIn's news feed.
- **Messaging:** Users can connect with other users through direct messaging.
- **Search Functionality:** Users can search for other users, companies, jobs, and content.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Firebase:** A platform provided by Google for building web and mobile applications without server-side programming.
- **Sass:** A CSS preprocessor that adds power and elegance to the basic CSS syntax.

## Getting Started

To run this project locally:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/linkedin-clone.git

   cd linkedin-clone

   npm install
   
Set up Firebase:

Create a Firebase project on the Firebase Console (https://console.firebase.google.com/).

Enable Authentication with email/password in the Firebase Authentication section.

Obtain your Firebase config object.

Create .env file in the root directory and add your Firebase config:
  
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id

Run the project:

    npm start
Open your browser and go to http://localhost:3000 to view the app.
