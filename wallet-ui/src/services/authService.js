import { registerUser, loginUser } from "../api/authApi";

export const authService = {

    register(data) {
        return registerUser(data);
    },

    login(data) {
        return loginUser(data);
    }

};