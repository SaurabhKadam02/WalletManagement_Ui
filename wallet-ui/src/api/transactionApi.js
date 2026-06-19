import axios from "axios";
import { BASE_URL } from "../utils/constants";


export const getTransactions = () => {
const TXN_URL = `${BASE_URL}/transactions`;

    const token = localStorage.getItem("token");

    return axios.get(TXN_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};