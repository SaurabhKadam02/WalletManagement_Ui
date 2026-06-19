import axios from "axios";
import { BASE_URL } from "../utils/constants";

const WALLET_URL = `${BASE_URL}/wallets`;

// JWT header
const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

// GET wallets
export const getWallets = () =>
  axios.get(WALLET_URL, authHeader());

// CREATE wallet
export const createWallet = (data) =>
  axios.post(WALLET_URL, data, authHeader());

// CREDIT
export const creditWallet = (id, amount) =>
  axios.post(`${WALLET_URL}/${id}/credit`, { amount }, authHeader());

// DEBIT
export const debitWallet = (id, amount) =>
  axios.post(`${WALLET_URL}/${id}/debit`, { amount }, authHeader());

// TRANSFER
export const transferMoney = (data) =>
  axios.post(`${WALLET_URL}/transfer`, data, authHeader());