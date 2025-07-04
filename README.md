![Cart-Craft](https://socialify.git.ci/samyakrajgruhi/Cart-Craft/image?custom_language=React&font=Raleway&language=1&name=1&owner=1&pattern=Transparent&theme=Dark)


# Cart-Craft

## 🚀 Overview

Cart-Craft is a sleek, responsive, and fully functional frontend for an eCommerce platform, developed using React, Tailwind CSS, and JavaScript. This frontend communicates seamlessly with a custom-built backend API hosted on AWS EC2, enabling dynamic product listings, cart management, and order processing.

The backend is developed separately using Node.js and Express.js and is deployed independently. This separation of concerns ensures scalability, maintainability, and ease of integration for future cloud-native enhancements.


## 🧠 Key Features

- 🛍️ Product Catalog — Displays items fetched via REST API from a live backend

- 🛒 Cart System — Add/remove products, update quantity, and calculate totals in real-time

- 🧾 Checkout Interface — View detailed purchase summary

- 💻 Frontend Hosted Independently — Works with live backend over API

- 🌐 AWS Integration — Backend hosted on EC2 instance, delivering production-ready data

- 📱 Fully Responsive — Designed with mobile-first architecture using Tailwind CSS


## 🛠️ Tech Stack

| Layer          | Technology                              |                    
| -------------- | --------------------------------------- | 
| **Frontend**   | React.js, Tailwind CSS, JavaScript      
| **Backend**    | Node.js, Express.js (hosted separately) 
| **API Comm**   | Axios / Fetch (REST APIs)               
| **Deployment** | Frontend local / Vite                   |
| **Versioning** | Git + GitHub                            

## 📁 Project Structure


```bash
Cart-Craft/
├── public/                  # Static files and index.html
├── src/
│   ├── pages/               # Page-level components
│   │   └── components       # Reusable UI components
│   └── App.jsx              # Main app entry
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite dev server configuration
├── package.json
└── README.md
```

## 🔗 Backend API Details

- The backend for Cart-Craft is not included in this repository.

- It is hosted on an AWS EC2 instance.

- For backend source code, refer to this repo:
```link
    https://github.com/samyakrajgruhi/Ecom-Backend
```
## ⚙️ Getting Started

1. Clone the Frontend Repository
```bash
git clone https://github.com/samyakrajgruhi/Cart-Craft.git
cd Cart-Craft
```

2. Install Dependencies
```bash
npm install
```

3. Start the Frontend Server
```bash
npm run dev
```

Visit http://localhost:5173 to access the frontend.
## 👨‍💻 Author

Developed independently by Samyak Rajgruhi.
Backend, frontend, deployment — all handcrafted for learning and mastery.

