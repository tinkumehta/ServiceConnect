# ServiceConnect 🚀

**Your one-stop platform to find and connect with trusted local service providers.**

---

## 📌 Overview

**ServiceConnect** is a full-stack web app that helps users easily find electricians, plumbers, tutors, and other local professionals — all in one place.

---

##  🚀 Full-Stack Auth App with JWT, Cloudinary & React Context

This project is a **full-stack authentication system** built with:
- **Node.js + Express** for the backend API
- **MongoDB + Mongoose** for data storage
- **JWT (JSON Web Tokens)** for secure authentication
- **Cloudinary** for file uploads (user avatars)
- **React + Vite** for the frontend
- **React Context API** for global auth state
- **Axios** for HTTP requests
- **Tailwind CSS** for styling (optional)

---

## 📌 **Features**

✅ User **Registration** with avatar upload to **Cloudinary**  
✅ User **Login** with JWT  
✅ **Protected Routes** — only logged-in users can access certain pages  
✅ **Global AuthContext** — keeps auth state in sync across the app  
✅ **Dynamic Navbar** — shows `Login`/`Logout` based on auth state  
✅ **Profile Page** with user details & Cloudinary avatar  
✅ **Postman Collection** provided for testing all routes  
✅ Clean **error handling** & secure password hashing

---

## ⚙️ **Tech Stack**

- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Cloudinary SDK
- **Frontend:** React, Vite, Axios, React Router DOM, Tailwind CSS
- **Other:** Postman for API testing

---

## 🚦 **How to Run Locally**

### 1️⃣ Clone the repo
```bash
git clone https://github.com/tinkumehta/ServiceConnect.git
cd ServiceConnect
```
📁 server \
 ┣ 📂 controllers\
 ┣ 📂 models\
 ┣ 📂 routes\
 ┣ 📂 middlewares\
 ┣ 📜 server.js

📁 client\
 ┣ 📂 src\
 ┃ ┣ 📂 context (AuthContext.jsx)\
 ┃ |  
 ┃ ┣ 📂 components ()\
 |    |-📂 Footer   
 |    |-📂 Header   
 |    |-📂 Login  (Login.jsx, Register.jsx, Profile.jsx)\
 ┃ ┣ 📜 App.jsx\
 ┃ ┣ 📜 main.jsx
