# ⛰️ ROCK APP

![Static Badge](https://img.shields.io/badge/npm-red?style=plastic&logo=npm&color=CB3837)
![Static Badge](https://img.shields.io/badge/React-blue?style=plastic&logo=react&color=61DBFB)
![Static Badge](https://img.shields.io/badge/JavaScript-yellow?style=plastic&logo=javascript)
![Static Badge](https://img.shields.io/badge/Bootstrap-blue?style=plastic&logo=bootstrap&color=563d7c)
![Static Badge](https://img.shields.io/badge/CSS3-blue?style=plastic&logo=css&color=2965f1)
![Static Badge](https://img.shields.io/badge/Git-blue?style=plastic&logo=git&color=f14e32)

An interactive React-based educational app that helps users explore and identify common rock types.
Designed for amateur geologists, hikers, students, and curious minds, this app makes geology accessible, engaging, and fun.

---

## 🌍 Project Vision

The **Rock App** empowers users to explore and identify rocks through an intuitive, visually engaging interface. Designed with accessibility and scientific clarity in mind, it blends interactive filtering, search functionality, and personalized collection tools to foster curiosity about geology and natural history.

---

## 🚀 Features

- 🔍 **Search & Filter**  
  Browse rocks by name, type (igneous, sedimentary, metamorphic), texture, color, and origin using an intuitive interface.
- 🪨 **Rock Gallery**  
  Explore a dynamic collection of rock cards with detailed info and fun facts. Click any card to open a modal with deeper insights.
- 📘 **Rock Detail Modal**  
  View high-resolution images, geological context, and identification tips—all without leaving the gallery.
- ➕ **Collection Manager**  
  Save, tag, and annotate rocks in your personal collection. Perfect for field notes or study references.
- 🧠 **Quiz Mode**  
  Test your knowledge with a “Rock Quiz” game. Great for learners and enthusiasts alike.
- 🧭 **Modular Navigation**  
  Clean routing between Home, Explore, Collection, Quiz, and Settings—wrapped in a consistent layout.
- 💾 **Local Storage** *(coming soon)*  
  Persist your collection across sessions for offline use and long-term tracking.
- 🎨 **Responsive Design** *(coming soon)*  
  Optimized layout and interactions for both desktop and mobile devices.

---

## 🧪 Technologies Used

- **React** (with Hooks)
- **JavaScript** (ES6+)
- **CSS** (global stylesheet)
- **React Router** 
- **JSON** (rock and quiz data source)
- **Local Storage API**

---

## 📁 Project Structure
```bash
src/
├── app/
│   └── assets/
│       └── img/
├── components/
│   ├── CollectionManager.js
│   ├── FilterPanel.js
│   ├── Footer.js
│   ├── Header.js
│   ├── RockCard.js
│   ├── RockDetailModal.js
│   └── SearchBar.js
├── data/
│   ├── quiz.json
│   └── rocks.json
├── pages/
│   ├── Quiz.js
│   ├── RockCollection.js
│   └── RockGallery.js
├── App.js
└── index.js
```
---

## 📚 Data Sources

- [USGS Rock Identification Basics](https://www.usgs.gov/special-topic/education/rock-identification)
- [Geology.com Rock Gallery](https://geology.com/rocks/)
- [Mindat.org](https://www.mindat.org/)
- [Minerals Education Coalition](https://mineralseducationcoalition.org/minerals-database/)
- [Rock Scanner](https://www.rockscanner.com/rocks)

---

## 🛠️ Installation & Setup
```bash
git clone https://github.com/Do0ky/RockApp.git
npm install
npm start
```
---

## 💡 Potential Future Enhancements
- 📚 Learn Page (glossary terms and visual guides to understand geology fundamentals and rock classification)
- 📊 Fetch more data from an API
- 📸 Image upload for rock identification
- 🗺️ Map integration to show rock locations
- 🧑‍🤝‍🧑 User submissions and community features

---

## 👨‍💻 Authors
Co-created by:
- **Claire Peyre**  
- **Aaron Escobar**  