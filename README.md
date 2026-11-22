<div align="center">

# 🍲 Recipe Finder

### Search any dish. Discover recipes. Save your favourites.

A simple recipe search app built with **React + Vite**, powered by the free **TheMealDB API**.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![API](https://img.shields.io/badge/API-TheMealDB-E67E22?style=for-the-badge)

<img src="screenshot.png" alt="Recipe Finder screenshot" width="750">

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **Search** | Type any dish (e.g. *chicken*) and get matching recipes |
| 🖼️ **Recipe Cards** | Each recipe shows its picture, name, category and country |
| ❤️ **Favourites** | Save or remove recipes with one click |
| 💾 **localStorage** | Favourites stay saved even after refreshing the page |
| ⏳ **Loading State** | Shows *"Loading recipes..."* while waiting for the API |
| ⚠️ **Error State** | Shows a friendly message if something goes wrong |
| 🚫 **Empty State** | Shows *"No recipes found"* when nothing matches |

---

## 🛠️ Tech Stack

- **React**: builds the UI from reusable components
- **Vite**: creates and runs the React project fast
- **JavaScript (ES6+)**: `fetch`, `async/await`, `map`, `filter`, `find`, `some`
- **CSS3**: Flexbox and Grid layout
- **TheMealDB API**: free recipe data, no API key needed

---

## 🚀 Getting Started

### 1. How the project was created

```bash
npm create vite@latest . -- --template react
npm install
npm run dev
```

### 2. Run it on your computer

```bash
git clone https://github.com/ElmanTouhid/sd-HW.git
cd sd-HW
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser.

> 📌 Requires **Node.js** (LTS version) installed.

---

## 🌐 How the API Works

When you search, the app sends a request to TheMealDB:

```
https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
```

```
User types "chicken"  ➜  fetch() calls the API  ➜  recipes saved in state  ➜  map() shows one card per recipe
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx     # Search input + button
│   ├── RecipeCard.jsx    # Shows one recipe
│   └── Favorites.jsx     # List of saved recipes
├── App.jsx               # Main logic: state, API fetch, favourites
├── App.css               # App styling
├── index.css             # Global styles
└── main.jsx              # Puts App on the page
```

---

## 🧠 What I Learned

- Setting up a React project with **Vite**
- Managing data with **useState** and **useEffect**
- Fetching API data with **fetch** and **async/await**
- Handling **loading**, **error** and **empty** states
- Passing data between components with **props**
- Saving data in the browser with **localStorage**

---

<div align="center">

### 👨‍💻 Author

**Md. Elman Touhid**
CSE · International Islamic University Chittagong (IIUC)
Software Development I (CSE-2340)

⭐ *If you like this project, give it a star!*

</div>