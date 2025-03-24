# 🛠 React & Node.js Authentication System with SQLite
- This project is a React + Node.js (Express + SQLite) web application with:

- JWT Authentication (Login system with token-based security)

- Protected Routes (Dashboard & Map are accessible only after login)

- Interactive Map (Using Leaflet to display a map of India)

- SQLite Database (For storing users & authentication)

- RESTful APIs (Login, Dashboard data, and Map data)

## 📌 How to Login & Use the App

1. Register a user (or use the default user below).

2. Login at http://localhost:3000/login with:

    - Username: admin

    - Password: password123

3. Upon successful login, you will be redirected to the Dashboard.

4. Click on a dashboard card to navigate to the Map View.

5. Logout by clearing the token from localStorage.


## 📂 Project Structure

    ```bash

    /react-node-auth
    │── /backend
    │   │── server.js
    │   │── db.js
    │   │── .env
    │   └── package.json
    │
    │── /frontend
    │   │── /src
    │   │   │── /components
    │   │   │   │── Login.js
    │   │   │   │── Dashboard.js
    │   │   │   │── MapView.js
    │   │   │   │── PrivateRoute.js
    │   │   │── App.js
    │   │   │── index.js
    │   └── package.json
    │
    └── README.md
    ```

## 📌 Project Setup
- Clone the Repository
    ```bash
    git clone https://github.com/your-repo/react-node-auth.git
    cd react-node-auth
    ```

## ⚡ Backend (Node.js + SQLite)
 
1. Set Up Backend
    - Run these commands inside the /backend folder:
    
    ```bash
    mkdir backend && cd backend
    npm init -y
    npm install express sqlite3 cors dotenv bcryptjs jsonwebtoken
    ```
2. Set Up Frontend
    - Run these commands inside the /frontend folder:
    ```bash
    npx create-react-app frontend
    cd frontend
    npm install axios react-router-dom leaflet react-leaflet
    ```

## 🎯 Run the Project
- ✅ Start Backend:
    ```sh
    cd backend
    node server.js
    ```
- ✅ The backend will now be running on http://localhost:5000

- ✅ Start Frontend:
    ```sh
    cd frontend
    npm start
    ```
- ✅ The frontend will now be running on http://localhost:3000

## 📌 How to Login & Use the App

1. Register a user (or use the default user below).

2. Login at http://localhost:3000/login with:

    - Username: admin

    - Password: password123

3. Upon successful login, you will be redirected to the Dashboard.

4. Click on a dashboard card to navigate to the Map View.

5. Logout by clearing the token from localStorage.


## 📌 Features
- ✅ User authentication with JWT
- ✅ Protected routes in React (using PrivateRoute)
- ✅ SQLite database for user storage
- ✅ Interactive map (Leaflet)
- ✅ Secure API endpoints

## Deployment

- Backend Deployment
    - Live Demo: The application is hosted on Render
    - Access it here: https://recipe-app-waou.onrender.com


- Frontend Deployment

    - Live Demo: The application is hosted on Netlify.
    - Access it here: https://app-recipe-management.netlify.app/

## Live Demo
- Demo Video Link :

## 📌 Author
- 💻 Developed by Dhruv Jaiswal
- 🚀 Happy Coding! 🎉
