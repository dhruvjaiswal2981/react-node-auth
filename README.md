# 🚀 React & Node.js Authentication System with JWT and SQLite

- This is a full-stack application built with **React (frontend)** and **Node.js (backend) with Express and SQLite**.  
It includes **user authentication (JWT), a protected dashboard, and a map view**.

## 📌 How to Login & Use the App

1. Register a user (or use the default user below).
2. Login at https://react-node-auth.netlify.app/  with:
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
    git clone https://github.com/dhruvjaiswal2981/react-node-auth.git
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
    - Access it here: https://react-node-auth-azq8.onrender.com

- Frontend Deployment

    - Live Demo: The application is hosted on Netlify.
    - Access it here: https://react-node-auth.netlify.app/

## Live Demo
- Demo Video Link : https://drive.google.com/file/d/1U9j5bP1m_SmUQjooujEiwFqGb3rbLkzO/view?usp=sharing

## 📌 Author
- 💻 Developed by Dhruv Jaiswal
- 🚀 Happy Coding! 🎉
