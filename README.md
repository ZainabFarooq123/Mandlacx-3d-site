# MandlacX 3D Landing Page

This is a 3D promotional landing page built with **React Three Fiber**, showcasing the MandlacX Edge Processor. The design includes smooth model animations, dark theme styling, and modern web technologies.

---

## 🌟 Features

- 🖼️ 3D `.glb` Model Viewer with lighting and rotation  
- 🌐 Dark Mode Layout using TailwindCSS  
- 🎮 Interactive OrbitControls  
- 🌊 Smooth Floating Animation  
- ⚡ Built with Vite + React for fast development  

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/mandlacx-3d-site.git
cd mandlacx-3d-site
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🧩 Project Structure
```
mandlacx-3d-site/
│
├── public/
│   └── SmartSight Product Model.glb      # The 3D model file
│
├── src/
│   ├── components/
│   │   ├── FloatingModel.jsx             # Handles 3D model rotation and animation
│   │   └── ModelCanvas.jsx               # Canvas with lighting and environment
│   ├── App.jsx                           # Main app entry
│   └── main.jsx                          # Vite entry point
│
├── .gitignore
├── tailwind.config.js
├── README.md
└── package.json
```

---

## 🛠️ Tech Stack

- **React** (with Vite)  
- **React Three Fiber** for 3D rendering  
- **Drei** for helpers like `OrbitControls` and `Environment`  
- **TailwindCSS** for styling  
- **GLTFLoader** (from drei) for loading `.glb` models  

---

## 📄 .gitignore Example
```gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*

# Dependency directories
node_modules/

# Build output
dist/
dist-ssr/

# Environment files
.env

# IDE and system files
.vscode/*
.DS_Store
.idea/
```
