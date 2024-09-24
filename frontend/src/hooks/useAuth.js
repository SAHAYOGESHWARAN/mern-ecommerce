
import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const login = async (email, password) => {
    // Implement login logic with API call
  };
  const logout = () => {
    // Implement logout logic
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;
