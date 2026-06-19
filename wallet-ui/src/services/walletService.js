// import {
//   getWallets,
//   createWallet,
//   creditWallet,
//   debitWallet,
//   transferMoney
// } from "../api/walletApi";

// // IMPORTANT: named exports must exist here
// export const walletService = {
//   getWallets,
//   createWallet,
//   creditWallet,
//   debitWallet,
//   transferMoney
// };
import {
  getWallets,
  createWallet,
  creditWallet,
  debitWallet,
  transferMoney
} from "../api/walletApi";

// Export individual functions
export {
  getWallets,
  createWallet,
  creditWallet,
  debitWallet,
  transferMoney
};

// Export service object
export const walletService = {
  getWallets,
  createWallet,
  creditWallet,
  debitWallet,
  transferMoney
};