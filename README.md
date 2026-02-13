# React Login Form with Tailwind CSS (Vite) 🔐

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/) 
[![Vite](https://img.shields.io/badge/Vite-4-purple?logo=vite)](https://vitejs.dev/) 
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.3-blue?logo=tailwind-css)](https://tailwindcss.com/)

A **clean, responsive login form** built with **React**, **Vite**, and **Tailwind CSS**.  
This project demonstrates **React functional components, state management with Hooks, controlled inputs, and conditional rendering**.

---

## 🌟 Features

- Controlled form inputs for **Email** and **Password**
- Displays **submitted values only after clicking the Enter button**
- Conditional rendering using React's `&&` operator
- Responsive and modern UI using **Tailwind CSS**
- Smooth focus and hover effects for inputs and buttons

---

## 🛠 Technologies Used

- **React 18** – Front-end JavaScript library
- **Vite** – Fast development bundler
- **Tailwind CSS** – Utility-first CSS framework
- **JavaScript (ES6+)**
- **HTML & JSX** – Component structure
- **CSS** – Styling enhancements

---

## 📁 Project Structure

react-login-tailwind/
│
├─ index.html
├─ package.json
├─ vite.config.js
├─ src/
│ ├─ main.jsx
│ ├─ App.jsx
│ └─ index.css
└─ README.md

yaml
Copy code

---

## 🚀 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/react-login-tailwind.git

2. **Navigate to the project folder**

bash
Copy code
cd react-login-tailwind

3. **Install dependencies**

bash
Copy code
npm install

4. **Start development server**

bash
Copy code
npm run dev

5. **Open in browser**

Visit the URL displayed in terminal (e.g., http://localhost:5173) to see the login form.
## Demo
(Screenshot 2026-02-13 191259.png)

## 🧠 Key Concepts Learned

### React Hooks
- `useState` for managing input and submitted values
- Conditional rendering with state (`show` variable)

### Controlled Components
- Inputs tied to React state
- Capturing input dynamically
- Snapshot of values on submission

### Event Handling
- `onChange` for input updates
- `onClick` for button events
- Using `e.target.value` to capture user input

### Conditional Rendering
- `&&` operator to display content only when conditions are met
- React ignores `false`, `null`, or `undefined` in JSX

### Tailwind CSS
- Utility classes for spacing, colors, borders, shadows, and rounded corners
- Focus and hover states
- Responsive layout with flexbox

---

## 📋 Usage

1. Type your email and password
2. Click the **Enter** button
3. Only **submitted values** are displayed below the form
4. User can continue typing without updating the displayed values

---

## 🔧 Next Steps / Improvements

- Add **form validation** (required fields, email format)
- Implement **password visibility toggle**
- Clear inputs automatically after submission
- Connect to a **backend API** for real login functionality
- Add animations for smoother UX

---

## ⚖️ License

This project is licensed under the [MIT License](LICENSE).
