
export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return getToken() === "logged_in";
};

export const login = () => {
  localStorage.setItem("token", "logged_in");
};

export const logout = () => {
  localStorage.removeItem("token");
};