import { Navigate } from 'react-router-dom';
import { authService } from './auth.service';
import { type ReactNode } from 'react';

interface AuthGuardProps {
  children: ReactNode;
  requiredRole?: string;
}

const AuthGuard = ({ children, requiredRole }: AuthGuardProps) => {
  const isLoggedIn = authService.isLoggedIn();
  const user = authService.getUser();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    // User does not have the required role. Redirecting to home page.
    // You could also redirect to a dedicated "Unauthorized" page.
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
