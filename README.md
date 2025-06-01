Chatlify - Full Stack Chat Application

Chatlify is a modern, full-stack real-time chat application built using React, Node.js, Express, MongoDB, and Socket.IO. It supports authentication, user profile management, media uploads, and real-time messaging.

Features

🔐 User Authentication (Login/Signup)

👤 User Profiles with image support via Cloudinary

💬 Real-Time Messaging with Socket.IO

🗃️ Message History Persistence (MongoDB)

☁️ Cloudinary Integration for media uploads

📦 Fully modular backend and frontend structure

Tech Stack

Frontend:

  React

  Tailwind CSS

  Axios

Backend:

  Node.js

  Express

  MongoDB with Mongoose

  Socket.IO

  Cloudinary (for media)

Getting Started

  Prerequisites

    Node.js >= 14

    MongoDB Atlas or Local MongoDB instance

    Cloudinary account (for image upload)

  Installation

  Clone the Repository

    git clone https://github.com/your-username/Chatlify.git
    cd Chatlify---Full-Stack-Chat-App-main

  Backend Setup

    cd backend
    npm install

  Create a .env file in the backend directory and add:

    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret

  Run the backend server:

    npm run dev

  Frontend Setup

    cd ../frontend
    npm install
    npm run dev

Folder Structure

    Chatlify---Full-Stack-Chat-App-main/
    ├── backend/
    │   ├── src/
    │   │   ├── controllers/
    │   │   ├── lib/
    │   │   ├── middleware/
    │   │   ├── models/
    │   │   ├── routes/
    │   │   └── index.js
    ├── frontend/
    │   ├── public/
    │   └── src/
    │       ├── components/
    │       ├── pages/
    │       ├── services/
    │       └── App.js

Screenshots

  Login Page:
    ![image](https://github.com/user-attachments/assets/32bf930e-d18f-440d-ad24-b1d79461f3f6)

  Sign Up Page:
    ![image](https://github.com/user-attachments/assets/0ce38f8f-6d5f-428f-b000-f1e86b5b1548)

  Profile Page:
    ![image](https://github.com/user-attachments/assets/664fb848-e236-4f73-a239-ed2b098513f1)

  Settings Page:
    ![image](https://github.com/user-attachments/assets/55a2e53f-238d-465f-bd9c-8a1984f82276)


Made by R. Narasimham
