# 📌User Authentication and Authorization with Bearer Token 

## 📖 Project Overview  
The **user authentication and authorization** is a **Node.js** application built with **Express.js** and **MongoDB** (via Mongoose) that provides a secure way to manage authentication and authorization. The API supports **JWT authentication**.

## 🚀 Features  
✅ **User Registration & Login**  
✅ **JWT Authentication (Bearer Token)**  
✅ **Protected Routes with Authorization**  
✅ **Error Handling & Input Validation**  

---

## 🛠️ Technologies Used  
- **Node.js** - Backend runtime environment  
- **Express.js** - Web framework for handling API requests  
- **MongoDB & Mongoose** - NoSQL database and ODM for schema modeling  
- **JSON Web Tokens (JWT)** - Secure user authentication  
- **bcrypt.js** - Password hashing for security  
- **dotenv** - Environment variable management  

---

## 📂 Project Structure  
📦 user-management-api
┣ 📂 config/         # Database configuration
┣ 📂 controllers/    # Business logic for users
┣ 📂 middlewares/    # Authentication and validation
┣ 📂 models/         # Mongoose schema definitions
┣ 📂 routes/         # API route definitions
┣ 📜 .env            # Environment variables
┣ 📜 server.js       # Main server entry point
┗ 📜 README.md       # Project documentation

---

## ⚡ Installation & Setup  
### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/yourusername/user-management-api.git
cd user-management-api