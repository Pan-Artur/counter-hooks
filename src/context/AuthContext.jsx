import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [logins] = useState([
    {
      login: "User1",
      password: "1234",
    },
    {
      login: "User2",
      password: "2222",
    },
    {
      login: "User3",
      password: "7777",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const username = form.elements.login.value.trim();
    const password = form.elements.password.value.trim();

    const isValid = logins.some(
      (user) => user.login === username && user.password === password
    );

    if (isValid) {
      setIsLogin(true);

      form.reset();
    }
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLogin, logins, handleSubmit, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
