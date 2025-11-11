import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type User = {
  username: string;
  email: string;
  password: string;
};

const VALID_USERS: User[] = [
  {
    username: "test",
    email: "test@example.com",
    password: "Abc123!@",
  },
  {
    username: "user",
    email: "user@company.com",
    password: "Secure#123",
  },
];

function validatePasswordFormat(password: string): string | null {
  if (password.length < 8 || password.length > 16) {
    return "Password must be 8–16 characters long.";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must include at least one uppercase letter.";
  }
  if (!/[a-z]/.test(password)) {
    return "Password must include at least one lowercase letter.";
  }
  if (!/[0-9]/.test(password)) {
    return "Password must include at least one number.";
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    return "Password must include at least one symbol.";
  }
  return null;
}

function findUserByEmail(email: string): User | undefined {
  const normalized = email.trim().toLowerCase();
  return VALID_USERS.find(
    (user) => user.email.trim().toLowerCase() === normalized
  );
}

const App: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Email is required.");
      return;
    }

    if (!password) {
      setError("Password is required.");
      return;
    }

    const user = findUserByEmail(trimmedEmail);
    if (!user) {
      setError("Email not found.");
      return;
    }

    const passwordFormatError = validatePasswordFormat(password);
    if (passwordFormatError) {
      setError(passwordFormatError);
      return;
    }

    if (password !== user.password) {
      setError("Incorrect password.");
      return;
    }

    setCurrentUser(user);
    setPassword("");
    setError(null);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setEmail("");
    setPassword("");
    setError(null);
    setShowPassword(false);
  };

  const isLoggedIn = Boolean(currentUser);

  return (
    <div className="page">
      <div className="app-shell">
        {!isLoggedIn && (
          <section className="card">
            <header className="card-header">
              <h1 className="title">Login</h1>
              <p className="subtitle">
                Sign in with one of the demo accounts. Validation is handled on
                the client only.
              </p>
            </header>

            <form onSubmit={handleSubmit} className="form" noValidate>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>

              <div className="field">
                <label htmlFor="password">Password</label>

                <div className="password-input-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    onPaste={(e) => e.preventDefault()}
                    onDrop={(e) => e.preventDefault()}
                    onCopy={(e) => e.preventDefault()}
                    onCut={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                  <button
                    type="button"
                    className="icon-btn"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    tabIndex={0}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <p className="hint">
                  8–16 chars, at least one uppercase, lowercase, number, and
                  symbol.
                </p>
              </div>

              {error && <div className="error">{error}</div>}

              <button type="submit" className="btn primary">
                Login
              </button>

              <button
                type="button"
                className="link-btn"
                onClick={() =>
                  alert(
                    "This is a frontend-only demo. Forgot password is not implemented."
                  )
                }
              >
                Forgot password?
              </button>
            </form>
          </section>
        )}

        {isLoggedIn && currentUser && (
          <section className="card">
            <header className="card-header">
              <h1 className="title">Welcome, {currentUser.username} 👋</h1>
              <p className="subtitle">
                You are logged in as <strong>{currentUser.email}</strong>.
              </p>
            </header>

            <button className="btn outline" onClick={handleLogout}>
              Logout
            </button>
          </section>
        )}

        <footer className="footer-note">
          <span>All checks run on the frontend. No network requests.</span>
        </footer>
      </div>
    </div>
  );
};

export default App;
