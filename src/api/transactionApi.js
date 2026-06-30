import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const getTransactions = (page = 0, size = 8) => {

  const TXN_URL = `${BASE_URL}/transactions?page=${page}&size=${size}`;

  const token = localStorage.getItem("token");

  return axios.get(TXN_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};