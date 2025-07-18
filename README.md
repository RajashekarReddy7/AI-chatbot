 # 🤖 Chitti 2.0 – AI Chatbot

Chitti 2.0 is a sleek and smart AI chatbot built using **Flask** and **Google Gemini API**. It interacts like a human, answers user queries in real-time, and features an intuitive glassmorphic UI with emoji-enhanced chat bubbles.

---

## 🚀 Features

- 💬 Real-time AI responses via Gemini API
- 🤖 Interactive chat interface with emojis (🧑‍💻 You / 🤖 Chitti)
- 🌐 Responsive and modern UI (glassmorphic style)
- 🔐 Secure API key management using `.env`
- 📜 Scrollable chat box with auto-scrolling
- 📦 Clean and modular folder structure

---
## 🧠 Tech Stack

| Layer        | Technology            |
|--------------|------------------------|
| Frontend     | HTML, CSS, JavaScript  |
| Backend      | Python (Flask)         |
| AI Model     | Google Gemini API      |
| Styling      | Glassmorphism UI       |
| Version Ctrl | Git & GitHub           |

---
chitti-2.0/
├── static/
│ ├── style.css
│ └── script.js
├── templates/
│ └── index.html
├── .env
├── .gitignore
├── app.py
└── README.md

---
## 🔧 Getting Started

### 1. Clone the repository
bash
git clone https://github.com/your-username/chitti-2.0.git
cd chitti-2.0

python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate

---

Add your API key to .env
Create a .env file and paste:

GOOGLE_API_KEY=your_api_key_here

---
python app.py
Then visit http://127.0.0.1:5000 in your browser.


