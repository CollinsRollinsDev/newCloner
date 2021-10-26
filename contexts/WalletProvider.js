import {createContext, useContext} from 'react'
import {useState, useEffect} from 'react'
//comment: creating context for Wallet...
const WalletContext = createContext();

// comment: function to use Wallet...
export const useWallet = () => {
  return useContext(WalletContext);
};

// comment: setting up WALLET provider
export const WalletProvider = ({ children }) => {

  const [wallet, setWallet] = useState("");

  const updateWallet = async(payload) => {
    await setWallet(payload)
  };

  return (
    <WalletContext.Provider value={{ wallet, updateWallet }}>
      {children}
    </WalletContext.Provider>
  );
};