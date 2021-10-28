import styles from '../Header/Header.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useWallet } from '../../contexts/WalletProvider';

const Connecting = () => {
    const router = useRouter()
    const { wallet } = useWallet()
    const { updateWallet } = useWallet()

    return (
        <section className={styles.overlay}>
        <section className={styles.cardHolder}>
        <div className={styles.cardHead}>
           <p className={styles.info}>Connect with one of our availble wallet providers below.</p>
          </div>
  
          <button className={styles.card}>
            <a href="http://localhost:3000/connect?items=trustwallet_wallet">
            <div className={styles.imgSide}>
              <Image src="/twallet.png" alt="" layout="fill" />
            </div>
            <div className={styles.text}>Trust Wallet</div>
            </a>
          </button>
         
          
          <div className={styles.card}>
          <a href="http://localhost:3000/connect?items=metamask">
            <div className={styles.imgSide}>
              <Image src="/metamask.svg" alt="" layout="fill" />
            </div>
            <div className={styles.text}>Metamask Wallet</div>
          </a>

          </div>
      
          <div className={styles.card}>
          <a href="http://localhost:3000/connect?items=coinbase">
            <div className={styles.imgSide}>
            <Image src="/coinbase.png" alt="" layout="fill" />
            </div>
            <div className={styles.text}>Coinbase Wallet</div>
            </a>
          </div>
          
          <div className={styles.card}>
          <a href="http://localhost:3000/connect?items=formatic">
            <div className={styles.imgSide}>
            <Image src="/formatic.png" alt="" layout="fill" />
            </div>
            <div className={styles.text}>Formatic</div>
            </a>
          </div>
          
          <div className={styles.card}>
          <a href="http://localhost:3000/connect?items=tokenpocket">
            <div className={styles.imgSide}>
            <Image src="/tokenPocket.png" alt="" layout="fill" />
            </div>
            <div className={styles.text}>TokenPocket</div>
            </a>
          </div>
        
          <div className={styles.card}>
          <a href="http://localhost:3000/connect?items=binance">
            <div className={styles.imgSide}>
            <Image src="/binance.png" alt="" layout="fill" />
            </div>
            <div className={styles.text}>Binance Chain Wallet</div>
            </a>
          </div>
        </section>
      </section>
    )
}

export default Connecting
