import '../styles/globals.css'
import { WalletProvider } from '../contexts/WalletProvider'

function MyApp({ Component, pageProps }) {
  return(
    <WalletProvider>
      <Component {...pageProps} />
    </WalletProvider>
  ) 
}

export default MyApp
