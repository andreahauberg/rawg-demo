# RAWG Game Database

A full-stack web application for browsing and managing game data from the [RAWG API](https://rawg.io/apidocs). The project includes a **Node.js/Express backend**, a **React/Vite frontend**, and a **PostgreSQL database** for storing game information.

---

## 📌 Features

- **Seeder Script**: Populates the PostgreSQL database with game data (from JSON or RAWG API).
- **Backend API**: Provides RESTful endpoints to fetch games, genres, platforms, and stores.
- **Frontend**: Displays games in a user-friendly interface with filtering and search capabilities.
- **Deployment**: Fully deployable on [Render](https://rawg-frontend-xo67.onrender.com/).

---

## 🛠 Tech Stack

| Category       | Technologies                                                                 |
|----------------|------------------------------------------------------------------------------|
| **Backend**    | Node.js, Express, TypeORM, PostgreSQL                                        |
| **Frontend**   | React, Vite, TypeScript                                                      |
| **Database**   | PostgreSQL                                                                   |
| **Deployment** | Render (backend, frontend, and PostgreSQL database)                          |
| **Tools**      | Docker (optional), GitHub Actions (CI/CD)                                    |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL (local or cloud-based)
- A [RAWG API key](https://rawg.io/apidocs) (optional, for fetching live data)

---

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/andreahauberg/rawg-demo.git
cd rawg-demo
