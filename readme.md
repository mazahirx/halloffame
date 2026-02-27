# 🏆 Hall Of Fame

A full-stack CRUD web application built using **Node.js, Express, MongoDB, and EJS**.

This project allows users to:

- ✅ Add new users
- 📖 View all users
- ✏️ Edit existing users
- ❌ Delete users

The application demonstrates dynamic routing, MongoDB integration, and server-side rendering using EJS.

---

## 🚀 Features

- Create users with:
  - Name
  - Email
  - Image URL
- Display users in a responsive card layout
- Update user information using dynamic route parameters
- Delete users from MongoDB database
- Server-side rendering with EJS templates
- Clean UI styled with Tailwind CSS

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** EJS, Tailwind CSS
- **Architecture Pattern:** Basic MVC structure

---

## 📂 Project Structure

```
halloffame/
│
├── modals/
│   └── user.js
│
├── views/
│   ├── index.ejs
│   ├── read.ejs
│   └── edit.ejs
│
├── public/
│
├── app.js
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/mazahirx/halloffame.git
cd halloffame
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start MongoDB locally

```bash
mongod
```

### 4️⃣ Run the application

```bash
node app.js
```

Server runs at:

```
http://localhost:3000
```

---

## 📌 Application Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page |
| GET | `/read` | View all users |
| POST | `/create` | Create a new user |
| GET | `/edit/:id` | Load edit page for specific user |
| POST | `/edit/:id` | Update specific user |
| GET | `/delete/:id` | Delete specific user |

---

## 🧠 Concepts Practiced

- Express routing
- Dynamic route parameters (`:id`)
- CRUD operations with MongoDB
- Mongoose models & schema
- Form handling in Express
- EJS templating
- Redirect flow after database operations

---

## 🌟 Future Improvements

- Add authentication (Login / Register)
- Add form validation
- Convert DELETE and UPDATE to RESTful methods (PUT / DELETE)
- Add confirmation modal before deletion
- Deploy to cloud (Render / Railway / Vercel)
- Convert frontend to React (Full MERN stack)

---

## 👨‍💻 Author

**Mazahir Mehdi**  
Computer Science Student  
Full Stack Engineer  

---

## 📄 License

This project is licensed under the MIT License.