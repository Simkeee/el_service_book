// auth.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Implementirajte vašu logiku za prijavljivanje
    setUser(userData);
  };

  const logout = () => {
    // Implementirajte vašu logiku za odjavljivanje
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth mora biti korišćen unutar AuthProvider-a');
  }
  return context;
}

export { AuthProvider, useAuth };
