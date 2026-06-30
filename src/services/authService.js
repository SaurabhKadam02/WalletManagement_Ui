import { registerUser, loginUser, getCurrentUser } from "../api/authApi";

export const authService = {
  register(data) {
    return registerUser(data);
  },

  login(data) {
    return loginUser(data);
  },
  getCurrentUser() {
    return getCurrentUser();
  },
};
