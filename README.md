# GoIT React Homework #8 - Phonebook App with Authentication (JWT)

This project is the final homework assignment within the GoIT React Developer program. It transforms the Phonebook application into a fully authenticated Single Page Application (SPA) using **JWT (JSON Web Tokens)** via the official GoIT Auth API, **Redux Toolkit**, **React Router (v6+)** with protected/restricted routes, and **Redux Persist**.

## 🚀 Live Demo
- [View Live Application on Vercel](https://goit-react-hw-08-six-navy.vercel.app/)

## 🛠️ Key Architecture & Features
1. **Authentication Slice (`src/redux/auth/`):**
   - Manages user state (`user`, `token`, `isLoggedIn`, `isRefreshing`).
   - Async Thunks (`operations.js`): Handles `register`, `login`, `logout`, and `refreshUser` (to restore sessions on page reload).
   - Persistence: Automatically stores and rehydrates the JWT token in `localStorage` using `redux-persist`.
2. **Protected & Restricted Routing (`src/components/`):**
   - `PrivateRoute`: Restricts access to the `/contacts` page, redirecting unauthenticated users to `/login`.
   - `RestrictedRoute`: Restricts access to `/register` and `/login` pages for already logged-in users, redirecting them to `/contacts`.
3. **Layout & Navigation:**
   - `AppBar`, `Navigation`, `AuthNav`, and `UserMenu` components dynamically render navigation links based on user authentication status.
4. **Contacts Management:**
   - Isolated per-user contact lists fetching data securely from the backend API using asynchronous thunks and memoized selectors.

## 📂 Project Structure
- `src/redux/auth/` — Auth slice, async operations, and selectors
- `src/redux/contacts/` — Contacts slice, operations, and memoized selectors
- `src/redux/filters/` — Filters slice and selectors
- `src/redux/store.js` — Redux store configuration and auth persistence
- `src/components/` — Modular components (`AppBar`, `Navigation`, `AuthNav`, `UserMenu`, `PrivateRoute`, `RestrictedRoute`, `ContactForm`, `ContactList`, `Contact`, `SearchBox`)
- `src/pages/` — Page components (`Home`, `Registration`, `Login`, `Contacts`)
- `src/App.jsx` — Root component coordinating route configuration and user session refreshing

## 🛠️ Technologies & Tools Used
- **React (v18+):** Functional components & hooks.
- **State Management:** Redux Toolkit & React Redux.
- **State Persistence:** Redux Persist.
- **Routing:** React Router DOM (v6+).
- **HTTP Client:** Axios.
- **Form Management & Validation:** Formik & Yup.
- **Bundler:** Vite.
- **Styling:** CSS Modules.
- **Deployment:** Vercel (with `vercel.json` SPA rewrite rules).