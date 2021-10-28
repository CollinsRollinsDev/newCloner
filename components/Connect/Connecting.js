import styles from '../Header/Header.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useWallet } from '../../contexts/WalletProvider';

const Connecting = () => {
    const router = useRouter()
    const { wallet } = useWallet()
    const { updateWallet } = useWallet()



    const dispatchItems = async(item) => {
        const yes = updateWallet(item)
        console.log("Moved")
        if(yes){
            router.push("/connect")
        }
      }

    return (
        <section className={styles.overlay}>
        <section className={styles.cardHolder}>
        <div className={styles.cardHead}>
           <p className={styles.info}>Connect with one of our availble wallet providers below.</p>
          </div>
      
          
          <button onClick={() => dispatchItems("Trust Wallet")} className={styles.card}>
            {/* <a href="http://localhost:3000/connect?item="> */}
            {/* <a href="http://localhost:3000/connect?items=working"> */}
            <div className={styles.imgSide}>
              <Image src="/twallet.png" alt="" layout="fill" />
            </div>
            <div className={styles.text}>Trust Wallet</div>
            {/* </a> */}
          </button>
         
          <div onClick={() => dispatchItems("Metamask Wallet")} className={styles.card}>
            <div className={styles.imgSide}>
              <Image src="/metamask.svg" alt="" layout="fill" />
            </div>
            <div className={styles.text}>Metamask Wallet</div>
          </div>
      
          <div onClick={() => dispatchItems("Coinbase Wallet")} className={styles.card}>
            <div className={styles.imgSide}>
            <Image src="/coinbase.png" alt="" layout="fill" />
            </div>
            <div className={styles.text}>Coinbase Wallet</div>
          </div>
          
          <div onClick={() => dispatchItems("Formatic Wallet")} className={styles.card}>
            <div className={styles.imgSide}>
            <Image src="/formatic.png" alt="" layout="fill" />
            </div>
            <div className={styles.text}>Formatic</div>
          </div>
          
          <div onClick={() => dispatchItems("TokenPocket Wallet")} className={styles.card}>
            <div className={styles.imgSide}>
            <Image src="/tokenPocket.png" alt="" layout="fill" />
            </div>
            <div className={styles.text}>TokenPocket</div>
          </div>
        
          <div onClick={() => dispatchItems("Binance Chain Wallet")} className={styles.card}>
            <div className={styles.imgSide}>
            <Image src="/binance.png" alt="" layout="fill" />
            </div>
            <div className={styles.text}>Binance Chain Wallet</div>
          </div>
      
        </section>
      </section>
    )
}

export default Connecting
