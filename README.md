# 📚 LearnHub — Learning Management System

A modern, responsive Learning Management System (LMS) frontend built with React. Students can browse courses, view course details, enroll, track progress, and manage their profile — all with a polished, professional UI.

**Live Demo:** [https://learnhub-plum.vercel.app/]
**GitHub Repository:** [https://github.com/ABman-FireBird/learnhub]

---

## ✨ Features

- **Course Catalog** — Browse all available courses with search and category/difficulty filtering
- **Course Details** — Dedicated page per course with full info (instructor, rating, price, level, duration)
- **Enrollment System** — Enroll in courses with instant toast confirmation
- **Student Dashboard** — Live stats (enrolled courses, completed courses, learning hours, overall progress), per-course progress bars, and a recent activity feed
- **Profile Management** — View and edit student profile with controlled form inputs and validation
- **Data Persistence** — Enrolled courses, progress, profile, recent activity, and theme preference all persist via `localStorage`
- **Dark Mode** — Full light/dark theme toggle, persisted across sessions
- **Toast Notifications** — Feedback on enrollment and profile updates
- **Fully Responsive** — Mobile, tablet, and desktop layouts throughout
- **404 Page** — Custom not-found route for unmatched paths

---

## 🛠 Technologies Used

- **React 19** — component-based UI
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — utility-first styling, including class-based dark mode
- **React Router v7** — client-side routing and dynamic route params
- **localStorage (Web Storage API)** — client-side data persistence

---

## 🧠 React Concepts Used

- Functional components and component composition
- Props and reusable components (`Button`, `CourseCard`, `Category`)
- `useState` for enrollment, search, filters, form state, theme, and toast messages
- `useEffect` for syncing state to `localStorage`, loading saved data on mount, applying the dark-mode class, and auto-dismissing toasts
- React Router's `<Outlet>` + `useOutletContext` to share app-wide state (enrolled courses, profile, toast handler) across nested routes without prop drilling
- Dynamic routing with `useParams` (`/courses/:id`)
- Controlled form inputs with validation (Profile edit form)
- Conditional rendering (empty states, edit vs. view mode, loading states)

---

## 📁 Project Structure
learnhub/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── Button.jsx
│ │ ├── CourseCard.jsx
│ │ ├── Categories.jsx
│ │ └── Hero.jsx
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Courses.jsx
│ │ ├── CourseDetails.jsx
│ │ ├── Dashboard.jsx
│ │ ├── Profile.jsx
│ │ └── NotFound.jsx
│ │
│ ├── data/
│ │ └── courses.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── public/
├── package.json
└── README.md

---

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone git@github.com:ABman-FireBird/learnhub.git
cd learnhub

# Install dependencies
npm install

# Run the development server
npm run dev
```

The app will be running at `http://localhost:5173`.

---

## 📸 Screenshots

> Add screenshots here — Desktop, Tablet, and Mobile views. Example:

| Desktop | Tablet | Mobile |
|---|---|---|
| ![Desktop](./screenshots/desktop.png) | ![Tablet](./screenshots/tablet.png) | ![Mobile](./screenshots/mobile.png) |

---

## 👤 Author

**Abdullah Farooq** — Internship Project, TechTide Corporation