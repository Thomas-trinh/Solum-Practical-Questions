# Login Page

A simple, production-style login page built with **React + TypeScript + Vite**.

* All validation is done **on the client-side**.
* User credentials are **hard-coded** (as required).
* Includes:

  * Email + password validation
  * Strong password rules
  * Friendly error messages
  * Password visibility toggle (eye icon)
  * Disabled copy/paste/right-click on password field
  * Simple login/logout flow with welcome screen

---

## 1. Prerequisites

Make sure you have:

* **Node.js** ≥ 18
* **npm** (comes with Node)

You can check:

```bash
node -v
npm -v
```

---

## 2. Install & Setup

```bash
# Install dependencies
npm install
```

This project uses:

* `react`, `react-dom`
* `vite` (bundler & dev server)
* `typescript`
* `lucide-react` (for the eye/eye-off icons)

If needed, you can manually install the icon library:

```bash
npm install lucide-react
```

---

## 3. Run the App (Development)

Start the dev server:

```bash
npm run dev
```

Then open the URL printed in the terminal, usually:

```text
http://localhost:5173
```

Any code changes will hot-reload automatically.

---

## 4. How It Works

### 4.1 Hardcoded Users

The app uses a fixed list of valid users:

```ts
const VALID_USERS = [
  { username: "test", email: "test@example.com", password: "Abc123!@" },
  { username: "user", email: "user@company.com", password: "Secure#123" },
];
```

No API calls. No backend. This is intentional.

### 4.2 Validation Rules

On **Login** submit:

1. **Required fields**:

   * If email is empty → `Email is required.`
   * If password is empty → `Password is required.`
2. **Email lookup**:

   * If the email does not exist in `VALID_USERS` → `Email not found.`
3. **Password strength** (checked before matching):

   * Length: **8–16** characters
   * At least **one uppercase** letter
   * At least **one lowercase** letter
   * At least **one number**
   * At least **one symbol** (non-alphanumeric)
   * If any rule fails → specific error message shown
4. **Password match**:

   * If rules pass but password doesn’t match stored password → `Incorrect password.`
5. **Success**:

   * Shows a welcome screen:

     * `Welcome, {username} 👋`
     * Displays the logged-in email
   * Provides a **Logout** button.

### 4.3 Password Field Behavior

* Eye icon (👁 / 🚫) toggles between **hidden** and **visible** password.
* `copy`, `paste`, `cut`, and `right-click` are disabled on the password input to simulate stricter UX policies.

---

## 5. Demo Credentials

Use one of the following to log in:

```text
Email: test@example.com
Password: Abc123!@

Email: user@company.com
Password: Secure#123
```

Entering invalid values will trigger descriptive error messages as per the assignment.

---
