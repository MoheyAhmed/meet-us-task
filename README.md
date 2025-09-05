# Meet Us Task

This project is a coding assignment to implement a **login form + dashboard** based on a Figma design and a provided backend API.

## 🚀 Tech Stack
- [Next.js 13+ (App Router)](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Zustand](https://github.com/pmndrs/zustand) (state management)
- [Tailwind CSS](https://tailwindcss.com/)
- Authentication via **HttpOnly Cookies**

---

## 🎯 Features
- **Login Page**
  - Matches the provided Figma design.
  - Validates email format + non-empty password.
  - Disabled login button if input is invalid.
- **Authentication**
  - Calls backend API:
    - `POST /yeshtery/token` → to get access token.
    - `GET /user/info` → to get user info.
  - Token stored in **HttpOnly cookie** with expiration.
- **Dashboard**
  - Fetches user data from `/api/me`.
  - Displays: `id`, `name`, `email`, `organization_id`, `status`.
  - Simple layout, different from login page.
- **Logout**
  - Clears authentication cookie.
  - Redirects back to login page.
- **Redirect Logic**
  - Visiting `/` with valid cookie → redirects to `/dashboard`.
  - Visiting `/dashboard` without cookie → redirects to `/`.

---

## 📂 Project Structure

src/
├─ app/
│ ├─ api/
│ │ ├─ login/route.js # handles login
│ │ ├─ logout/route.js # handles logout
│ │ └─ me/route.js # fetches user info
│ ├─ dashboard/page.js # dashboard page
│ ├─ globals.css # global styles
│ ├─ layout.js # root layout
│ └─ page.js # login page
├─ components/
│ ├─ auth/LoginForm.client.js
│ └─ ui/Input.js, Button.js
├─ hooks/useClientAuth.js
└─ stores/useAuthStore.js