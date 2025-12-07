# Physical AI & Humanoid Robotics

Interactive educational platform for learning Physical AI and Humanoid Robotics, featuring a Docusaurus-based textbook with an integrated RAG-powered AI chatbot.

## Overview

This platform bridges digital AI and physical robotics, teaching students to design, simulate, and deploy humanoid robots using ROS 2, Gazebo, and NVIDIA Isaac. Features:

* **Interactive Textbook**: Docusaurus documentation with 5-Step Concept Loop pedagogy
* **RAG Chatbot**: AI assistant for textbook queries
* **Personalization**: User authentication, progress tracking, content translation

## Project Structure

```
docs/                 # Course content (MDX modules)
src/components/       # Chatbot & UI components
src/theme/            # Custom Docusaurus theme
backend/              # FastAPI backend
  src/api/            # REST endpoints
  src/services/       # RAG logic
  src/models/         # Data models
specs/                # Feature specifications
history/adr/          # Architecture decisions
.claude/              # Claude Code configuration
```

## Course Modules

| Module | Topic                     |
| ------ | ------------------------- |
| 1      | ROS 2 Fundamentals        |
| 2      | Gazebo & Unity Simulation |
| 3      | NVIDIA Isaac Platform     |
| 4      | Vision-Language-Action    |

## Tech Stack

**Frontend:** React 18 + TypeScript, Docusaurus 3.x, MDX, Custom theme

**Backend:** FastAPI + Python 3.12, Qdrant, Google Gemini API, Neon Postgres

## Quick Start

### Frontend

```bash
cd docs
npm install
npm run start
```

Local: [http://localhost:3000](http://localhost:3000)

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python run.py
```

API: [http://localhost:8000/docs](http://localhost:8000/docs)

### Ingest Content

```bash
curl -X POST http://localhost:8000/ingest -H "X-API-Key: your-api-key"
```

## Environment Variables

**Backend `.env`**

```ini
GEMINI_API_KEY=your-key
QDRANT_URL=https://...
QDRANT_API_KEY=...
NEON_DB_URL=postgres://...
API_KEY=...
```

**Frontend `.env`**

```ini
REACT_APP_API_URL=http://localhost:8000
```

## Features

| Spec | Feature                  | Status    |
| ---- | ------------------------ | --------- |
| 001  | RAG Chat UI Integration  | Completed |
| 002  | RAG Chatbot Backend      | Completed |
| 003  | Gemini API Migration     | Completed |
| 004  | RAG Vector Retrieval Fix | Completed |
| 005  | Website Redesign & UI    | Completed |

## Hardware Requirements

**Workstation:** GPU RTX 4070 Ti+, CPU i7/ Ryzen 9, RAM 64GB, Ubuntu 22.04
**Edge Kit (Optional):** Jetson Orin Nano, RealSense D435i, ReSpeaker Mic Array

## Development Agents

* `physical-ai-author` Textbook generation
* `fastapi-specialist` Backend development
* `react-frontend-specialist` UI components
* `rag-backend-engineer` RAG pipeline
* `docusaurus-architect-specialist` Site architecture

### Custom Commands

```bash
/sp.specify  # Generate spec
/sp.plan     # Create implementation plan
/sp.adr      # Generate ADR
```

## License

MIT

## Contributing

1. Create spec in `specs/`
2. Implement according to spec
3. Document in `history/adr/`
4. Submit PR with linked spec
