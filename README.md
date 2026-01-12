# Meditechnology Website

This is the official corporate website repository for **Meditechnology**, an Australian IT Managed Service Provider specialising in the healthcare sector.

## Project Overview

This is a modern Single Page Application (SPA) built for performance, security, and scalability. It replaces the legacy CMS with a static-first architecture.

**Live Site:** [https://www.meditechnology.com.au](https://www.meditechnology.com.au) (Once DNS is connected)

### Technology Stack
* **Framework:** React 18 + TypeScript
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **UI Components:** shadcn/ui + Lucide React Icons
* **Hosting:** Netlify (Recommended)

---

## Local Development Setup

If you need to make changes to the code, follow these steps to run the project locally.

### Prerequisites
* Node.js (Version 18 or higher)
* npm (comes with Node.js)

### Installation
1.  Clone the repository:
    ```bash
    git clone [https://github.com/Meditechnology-Assets/meditechnology.git](https://github.com/Meditechnology-Assets/meditechnology.git)
    ```
2.  Navigate to the project folder:
    ```bash
    cd meditechnology
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
5.  Open your browser to the local URL provided (usually `http://localhost:8080`).

---

## Building for Production

To create the optimised files for the live server:

```bash
npm run build

The output files will be generated in the dist/ folder. These files are ready to be deployed to Netlify, Vercel, or any static hosting provider.

Deployment
This project is configured for continuous deployment via Netlify. Any changes pushed to the main branch will automatically trigger a new build and deployment.

© 2026 Meditechnology Assets
