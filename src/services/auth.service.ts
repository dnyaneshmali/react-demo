export interface User {
  name: string;
  username: string;
  role?: string;
}

class AuthService {
  private userKey = 'user';

  /**
   * Checks if the user is currently logged in.
   * @returns boolean True if logged in, false otherwise.
   */
  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  /**
   * Retrieves the currently logged in user from local storage.
   * @returns User object or null if not logged in.
   */
  getUser(): User | null {
    const userStr = localStorage.getItem(this.userKey);
    if (!userStr) return null;
    
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }

  /**
   * Logs in a user by saving their details to local storage.
   * @param user The user details to save.
   */
  login(user: User): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  /**
   * Logs out the current user by removing them from local storage.
   */
  logout(): void {
    localStorage.removeItem(this.userKey);
  }
}

export const authService = new AuthService();
