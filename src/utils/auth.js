export const registerUser = (user) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.some(
    (existingUser) => existingUser.username === user.username
  );

  if (userExists) {
    return {
      success: false,
      message: "This username already exists.",
    };
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  return {
    success: true,
    message: "Registered successfully!",
  };
};

export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

export const login = (user) => {
  localStorage.setItem("token", "logged_in");
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("currentUser");
};

export const isAuthenticated = () => {
  return localStorage.getItem("token") === "logged_in";
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
};