import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AuthService, type User } from "./services/AuthService";

const App: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const isLoggedIn = Boolean(currentUser);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    const result = AuthService.authenticate(email, password);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    setCurrentUser(result.user);
    setPassword("");
    setShowPassword(false);
    setError(null);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setError(null);
  };

  return (
    <div className="page">
      <div className="app-shell">
        {!isLoggedIn && (
          <section className="card">
            <header className="card-header">
              <h1 className="title" style={{ textAlign: "center" }}>
                Login
              </h1>
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
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <button
                    type="button"
                    className="icon-btn"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
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
              <h1 className="title" style={{ textAlign: "center" }}>
                Welcome, {currentUser.username} 👋
              </h1>
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
