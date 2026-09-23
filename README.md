# AI Based Government Scheme & Eligibility Assistant System

### AI-Powered Government Scheme Discovery, Eligibility Analysis & Citizen Assistance Platform

![Python](https://img.shields.io/badge/Python-3.10%2B-blue)
![React](https://img.shields.io/badge/React-18-61DAFB)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Frontend-38B2AC)
![Gemini](https://img.shields.io/badge/AI-Gemini-orange)
![Playwright](https://img.shields.io/badge/Web%20Scraping-Playwright-green)
![RAG](https://img.shields.io/badge/RAG-ChromaDB-purple)
![Project](https://img.shields.io/badge/Project-Major%20Project-red)

---

## 📌 Project Overview

**AI Based Government Scheme & Eligibility Assistant System** is an AI-powered platform designed to help citizens discover relevant government schemes and understand their eligibility requirements through a simple conversational interface.

The system allows users to provide information about their **age, occupation, income, location, family status, category and requirements** using natural language. The platform processes this information and identifies potentially relevant government schemes.

The system combines:

- AI-based user profile extraction
- Eligibility analysis
- Retrieval-Augmented Generation (RAG)
- Local government scheme knowledge base
- Web-based government scheme information retrieval
- Voice input and text-to-speech
- Document requirement guidance
- Conversational AI assistance

The primary goal of this project is to reduce the difficulty of finding and understanding government welfare schemes by providing citizens with a simple, accessible and intelligent interface.

---

## 🎯 Objectives

The major objectives of this project are:

1. Help citizens discover government schemes relevant to their profile.
2. Analyze eligibility requirements using user-provided information.
3. Convert natural-language queries into structured user profiles.
4. Retrieve relevant information from a local government-scheme knowledge base.
5. Fetch additional information from government websites when required.
6. Provide eligibility explanations in a simple and understandable format.
7. Display required documents and application-related information.
8. Support voice-based interaction for improved accessibility.
9. Reduce the information gap between citizens and government welfare programs.

---

## ✨ Key Features

### 🤖 AI-Powered Profile Analysis

The system extracts important information from natural-language queries, including:

- Age
- Gender
- Occupation
- Annual income
- State
- District
- Farmer/business/student status
- Family-related information
- User requirements

---

### 🎯 Eligibility Analysis

The eligibility engine compares the user's profile with available scheme requirements and provides relevant eligibility information.

The system can analyze conditions such as:

- Minimum and maximum age
- Income limits
- Occupation requirements
- Location/state restrictions
- Category requirements
- Other scheme-specific conditions

---

### 🔎 Government Scheme Discovery

The application maintains a local knowledge base containing information about government schemes covering areas such as:

- Agriculture
- Education
- Healthcare
- Housing
- Women & Child Welfare
- Employment
- Skill Development
- Loans & MSME
- Pensions
- Social Security
- Renewable Energy
- Rural Development

---

### 📚 Retrieval-Augmented Generation

The project uses a **Retrieval-Augmented Generation (RAG)** approach to retrieve relevant scheme information from locally processed scheme documents before generating AI responses.

This helps the system provide responses based on relevant scheme information available in its knowledge base.

---

### 🌐 Web Information Retrieval

When locally available information is insufficient, the system can retrieve additional information through web search and government website scraping mechanisms.

Technologies used include:

- Serper API
- Playwright
- Chromium
- Government website sources

---

### 🗣️ Voice Accessibility

The platform provides voice-related functionality including:

- Speech-to-Text
- Text-to-Speech
- Voice-based interaction

This can make the system more accessible to users who prefer speaking instead of typing.

---

### 📄 Document Checklist

For relevant schemes, the application provides information about documents that may be required during the application process.

---

### 💬 Conversational Interface

Users can interact with the system using natural language instead of navigating through complicated government portals.

Example:

> "I am a 25-year-old farmer from Madhya Pradesh with an annual income of ₹2 lakh. Which government schemes can I apply for?"

The system processes the query and provides relevant scheme information along with eligibility-related details.

---

# 🏗️ System Architecture

```text
                         ┌───────────────────────┐
                         │         USER          │
                         │   Text / Voice Query  │
                         └───────────┬───────────┘
                                     │
                                     ▼
                         ┌───────────────────────┐
                         │    React Frontend     │
                         │    + Tailwind CSS     │
                         └───────────┬───────────┘
                                     │
                                     ▼
                         ┌───────────────────────┐
                         │    FastAPI Backend    │
                         └───────────┬───────────┘
                                     │
                                     ▼
                         ┌───────────────────────┐
                         │   AI Orchestrator     │
                         └───────────┬───────────┘
                                     │
              ┌──────────────────────┼──────────────────────┐
              │                      │                      │
              ▼                      ▼                      ▼
      ┌───────────────┐      ┌───────────────┐      ┌───────────────┐
      │ Profile Agent │      │    RAG Agent  │      │   Web Agent   │
      └───────┬───────┘      └───────┬───────┘      └───────┬───────┘
              │                      │                      │
              │                      ▼                      ▼
              │               Local Scheme            Serper API /
              │               Knowledge Base          Playwright
              │
              ▼
      ┌───────────────────┐
      │ Eligibility Agent │
      └─────────┬─────────┘
                │
                ▼
      ┌───────────────────┐
      │ Counselor / AI    │
      │ Response Engine   │
      └─────────┬─────────┘
                │
                ▼
      ┌───────────────────┐
      │ User-Friendly     │
      │ Scheme Results    │
      └───────────────────┘






    AI & Retrieval Pipeline
User Query
    ↓
Profile Extraction
    ↓
Query Routing
    ↓
Local Knowledge Retrieval
    ↓
Eligibility Analysis
    ↓
Web Retrieval (if required)
    ↓
AI Response Generation
    ↓
Scheme Recommendations
    ↓
Eligibility + Documents + Guidance
🛠️ Technology Stack
Frontend
React
Vite
Tailwind CSS
JavaScript
Lucide Icons
Backend
Python
FastAPI
Uvicorn
Artificial Intelligence
Google Gemini API
AI-based profile extraction
Eligibility analysis
Multi-agent orchestration
Retrieval & Knowledge Base
Retrieval-Augmented Generation (RAG)
ChromaDB
Sentence Transformers
Local scheme documents
Web Retrieval
Serper API
Playwright
Chromium
Voice
Speech Recognition
Text-to-Speech
gTTS / Browser Speech APIs
📁 Project Structure
government-scheme-eligibility-assistant/
│
├── backend/
│   ├── data/
│   │   ├── processed/
│   │   ├── raw_pdfs/
│   │   └── all_schemes.json
│   │
│   ├── src/
│   │   ├── agents/
│   │   │   ├── counselor.py
│   │   │   ├── eligibility.py
│   │   │   ├── orchestrator.py
│   │   │   ├── profile_agent.py
│   │   │   ├── rag_agent.py
│   │   │   ├── router_agent.py
│   │   │   └── web_agent.py
│   │   │
│   │   ├── api/
│   │   │   └── main.py
│   │   │
│   │   ├── rag/
│   │   ├── tools/
│   │   └── utils/
│   │
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── Project Synopsis.pdf
├── proposal_implementation.md
├── synopsis.md
├── README.md
└── .gitignore
⚙️ Installation & Setup
Prerequisites

Make sure the following are installed:

Python 3.10+
Node.js 18+
npm
Git
Google Gemini API key
Serper API key
1. Clone the Repository
git clone https://github.com/shivampwr/government-scheme-eligibility-assistant.git
cd government-scheme-eligibility-assistant
🐍 Backend Setup

Navigate to the backend directory:

cd backend

Create a Python virtual environment:

Windows
python -m venv venv

Activate it:

.\venv\Scripts\Activate.ps1

Install backend dependencies:

pip install -r requirements.txt
🌐 Install Playwright Chromium
playwright install chromium
🔐 Environment Variables

Create a .env file inside the backend directory.

Use .env.example as a template.

HOST=0.0.0.0
PORT=8000
ENVIRONMENT=development

GEMINI_API_KEY=your_gemini_api_key
SERPER_API_KEY=your_serper_api_key

CHROMA_PERSIST_DIR=vectorstore
RAW_PDFS_DIR=data/raw_pdfs
PROCESSED_DATA_DIR=data/processed

COSINE_SIMILARITY_THRESHOLD=0.70
TOP_K_RESULTS=4
⚠️ Security

Never upload your actual .env file or API keys to GitHub.

The repository .gitignore is configured to prevent environment files and other sensitive/local files from being committed.

🚀 Run Backend

From the backend directory:

python -m src.api.main

The backend will run at:

http://localhost:8000

API health endpoint:

http://localhost:8000/api/health
💻 Frontend Setup

Open another terminal and navigate to the frontend:

cd frontend

Install dependencies:

npm install

Run the development server:

npm run dev

The frontend will be available at:

http://localhost:3000
🔌 API Endpoints
Endpoint	Purpose
/	API status
/api/health	Health check
/api/chat	AI conversational interaction
/api/schemes	Scheme information
/api/text-to-speech	Text-to-speech
/api/audio-to-text	Speech-to-text
🧪 Example Query

A user can ask:

I am a 25 year old farmer from Madhya Pradesh.
My annual income is around 2 lakh.
What government schemes can I apply for?

The system processes the user's profile and returns relevant government scheme information along with eligibility-related details.

👥 Project Team
🏆 Team Leader
Shivam Digarse

Enrollment No.: 0133CL231123

B.Tech — Artificial Intelligence & Machine Learning
Sagar Institute of Research & Technology, Bhopal

Team Members
Name	Enrollment Number	Role
Shivam Digarse	0133CL231123	Team Leader
Sachin Sahu	01323CL231116	Team Member
Siddharth Tiwari	01323CL231130	Team Member
Prashant Patel	0133CL231104	Team Member
Mahendra Shilpkar	01323CL243D08	Team Member
Project Mentor

Monika Mam

🎓 Academic Information
Field	Details
Project Title	AI Based Government Scheme & Eligibility Assistant System
Project Type	Major Project
Institute	Sagar Institute of Research & Technology, Bhopal
Department	Artificial Intelligence & Machine Learning
Program	B.Tech
Batch	2023–2027
Mentor	Monika Mam
Team Leader	Shivam Digarse
🌍 Social Impact

The project aims to improve accessibility to government welfare information by providing a conversational interface through which citizens can discover schemes and understand their eligibility requirements.

Potential areas of impact include:

Farmers
Students
Women
Senior citizens
Small businesses
Workers
Rural communities
Economically weaker sections

The platform is designed to simplify access to information and help users understand which government schemes may be relevant to their circumstances.

Users should verify the latest eligibility criteria, benefits and application procedures through the relevant official government source before applying.

🔒 Security & Privacy
API keys are stored using environment variables.
.env files are excluded from Git tracking.
API keys should never be committed to the repository.
Users should avoid entering unnecessary sensitive personal information.
Government scheme information should be verified through official sources before making decisions.
📚 Project Documentation

The repository contains additional project documentation:

Project Synopsis.pdf
synopsis.md
proposal_implementation.md

These documents contain project synopsis, planning and implementation-related information.

🙏 Attribution

This project is an academic adaptation and customization based on an existing open-source Government Scheme Discovery & Eligibility Assistant project.

The original project is acknowledged as the source from which the initial application structure and implementation were obtained.

This repository contains project-specific customization, user-interface modifications, academic documentation and team/institution information for the Sagar Institute of Research & Technology, Bhopal Major Project.

Original Source Repository

https://github.com/vgarg05/Government-Scheme-Discovery-Eligibility-Assistant

⚠️ Disclaimer

This application is intended for educational and informational purposes.

Government scheme eligibility criteria, benefits, application procedures and availability may change over time. Users should verify the latest information through official government portals before applying for any scheme or making financial decisions.

⭐ Project
AI Based Government Scheme & Eligibility Assistant System

B.Tech Major Project

Department of Artificial Intelligence & Machine Learning

Sagar Institute of Research & Technology, Bhopal

Team Leader: Shivam Digarse
Batch: 2023–2027