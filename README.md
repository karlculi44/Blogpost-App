# 📝 Blogspot App

A full-stack blog application built with **React**, **Node.js**, **Express**, and **MongoDB**.  
Users can register, log in securely with JWT (stored in cookies), and create blog posts.

---

## 🚀 Features
- User registration and login with JWT authentication (httpOnly cookies)
- Secure password hashing using bcrypt
- Create, read, update, and delete blog posts
- Responsive front-end with React + Bootstrap/Tailwind
- Protected routes (only logged-in users can access dashboard)
- Logout with cookie clearing

---

## 🧰 Tech Stack
**Frontend:** React, Axios, React Router  
**Backend:** Node.js, Express.js, MongoDB, Mongoose  
**Authentication:** JWT, bcrypt, cookie-parser  
**Other:** dotenv, cors  

---

## 📁 Folder Structure
project/
├── client/ # React frontend
│ ├── src/
│ └── public/
└── server/ # Express backend
├── routes/
├── models/
└── controllers/

---

## ⚙️ Installation Guide

1️⃣ Clone the repository
```bash
git clone https://github.com/karlculi44/blogspot-app.git
cd blogspot-app

2️⃣ Install dependencies

For the backend:

cd server
npm install


For the frontend:

cd ../client
npm install

3️⃣ Create a .env file in your server/ folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development

▶️ Run the App
Backend:
cd server
npm run dev

Frontend:
cd client
npm run dev

Then open:
👉 Frontend: http://localhost:5173
👉 Backend API: http://localhost:5000

🔑 Authentication Flow
1. User signs up → password hashed → user saved in DB

2. On login, JWT is created and sent as an HTTP-only cookie

3. Protected routes check the cookie for a valid JWT

4. Logout endpoint clears the cookie to end the session

🧪 Test Credentials 
Username: testuser
Password: 123456

📜 License

MIT License © 2025 Karl Zamora Culi


✨ Author
Developed by Karl Culi
