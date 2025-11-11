export type User = {
    username: string;
    email: string;
    password: string;
  };
  
  export type AuthResult =
    | { 
        ok: true; 
        user: User 
    }
    | { 
        ok: false; 
        error: string 
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
  
  export class AuthService {
    static authenticate(email: string, password: string): AuthResult {
      const trimmedEmail = email.trim();
  
      if (!trimmedEmail) {
        return { ok: false, error: "Email is required." };
      }
  
      if (!password) {
        return { ok: false, error: "Password is required." };
      }
  
      const user = this.findUserByEmail(trimmedEmail);
      if (!user) {
        return { ok: false, error: "Email not found." };
      }
  
      const passwordFormatError = this.validatePasswordFormat(password);
      if (passwordFormatError) {
        return { ok: false, error: passwordFormatError };
      }
  
      if (password !== user.password) {
        return { ok: false, error: "Incorrect password." };
      }
  
      return { ok: true, user };
    }
  
    // ===== Internal helpers =====
  
    private static findUserByEmail(email: string): User | undefined {
      const normalized = email.trim().toLowerCase();
      return VALID_USERS.find(
        (user) => user.email.trim().toLowerCase() === normalized
      );
    }
  
    private static validatePasswordFormat(password: string): string | null {
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
  }
  