import React, { createContext, useState, useContext } from 'react';

// Decoupled from Base44: this app now runs as a fully public, static site.
// No backend auth service is called. Every visitor is treated as a public,
// unauthenticated user, and there is no loading delay.
//
// If you later want real accounts (e.g. for a membership area), wire this
// up to your own auth provider (Supabase Auth, Auth0, Firebase Auth, etc.)
// and update login/logout/navigateToLogin below.

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user] = useState(null);
  const [isAuthenticated] = useState(false);
  const [isLoadingAuth] = useState(false);
  const [isLoadingPublicSettings] = useState(false);
  const [authError] = useState(null);
  const [authChecked] = useState(true);
  const [appPublicSettings] = useState(null);

  const logout = () => {
    console.warn('logout() is a no-op: this build has no connected auth backend.');
  };

  const navigateToLogin = () => {
    window.location.href = '/login';
  };

  const checkUserAuth = async () => {
    return null;
  };

  const checkAppState = async () => {
    return null;
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      authChecked,
      logout,
      navigateToLogin,
      checkUserAuth,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
