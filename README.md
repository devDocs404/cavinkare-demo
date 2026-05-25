# CavinKare Web Application Demo

This repository contains a high-fidelity, responsive frontend demo for the CavinKare website, developed as part of an interview project submission. The project focuses on delivering a premium user experience with smooth animations, accessible design, and pixel-perfect layouts.

## 🚀 Key Features

*   **Interactive Homepage**: Features a premium entry splash screen, subtle staggered entry animations via Framer Motion, News & Events cards, Company Statistics, and Brand Showcases.
*   **Media & Recognition**: A dedicated responsive Media feed page and dynamic Article Detail pages to showcase press releases and recognitions.
*   **Research & Development**: A dedicated layout detailing the R&D process with refined typography, brand colors, and active page navigation.
*   **Advanced Navigation**: Full-width mega menus for primary sections and discrete popup-style submenus, fully responsive across mobile and desktop devices.
*   **Accessibility First**: Comprehensive WCAG 2.1 AA compliant semantic HTML, including ARIA labels and full keyboard-only navigation support.
*   **Premium Motion & Interactions**: Micro-animations on hover states, cascading fade-ins, and animated statistics cards utilizing modern CSS transitions and Framer Motion.

## 🛠️ Technology Stack

*   **Framework**: React (with Vite for fast bundling)
*   **Language**: TypeScript (Strict Mode)
*   **UI Components**: shadcn/ui
*   **Animations**: Framer Motion
*   **Architecture**: Turborepo (Monorepo setup)
*   **Package Manager**: pnpm

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v20+) and [pnpm](https://pnpm.io/) installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd cavinkare-demo
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    ```

3.  Start the development server:
    ```bash
    pnpm run dev
    ```

4.  Open your browser and navigate to the local development URL (typically `http://localhost:5173`).

## 🗺️ Key Pages to Review

*   **`/` (Home)**: Landing page showcasing the hero layout, stats, and mega menu.
*   **`/media`**: The main media feed featuring news and recognition cards.
*   **`/media/:id`**: An example of a dynamic article detail view.
*   **`/research-and-development`**: A specialized page demonstrating typography and layout consistency.

## 🎨 Design Philosophy

This project strictly adheres to modern web design principles:
*   **Rich Aesthetics**: Avoidance of generic colors, utilizing harmonious palettes.
*   **Dynamic UI**: Interfaces feel alive with responsive feedback to user interactions without compromising performance.
*   **Strict Typing & Code Quality**: Enforcement of TypeScript strict mode, reusable components, and rigorous separation of concerns.
