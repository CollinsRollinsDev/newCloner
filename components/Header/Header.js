import styles from "./Header.module.css";
import Image from "next/image";
import {useState, useEffect} from 'react'
import { useWallet } from "../../contexts/WalletProvider";
import Link from 'next/link';

const Header = () => {
  const { wallet } = useWallet()
  const { updateWallet } = useWallet()
  const [toggling, setToggling] = useState(false)
  const [cText, setCText] = useState("Connect Wallet")

  const handleClick = () => {
    toggling ? setToggling(false) : setToggling(true)
    !toggling ? setCText("Close") : setCText("Connect Wallet")
    
  }

  console.log(wallet);

  const dispatchWallet = async(item) => {

   await updateWallet(item)
    
    console.log(wallet);
  }

const overlay = (
  <section className={styles.overlay}>
  <section className={styles.cardHolder}>
  <div className={styles.cardHead}>
     <p className={styles.info}>Connect to a wallet</p>
    </div>


    <Link href="/connect" passHref>
    <button onClick={() => dispatchWallet("Trust Wallet")} className={styles.card}>
      <div className={styles.imgSide}>
        <Image src="/twallet.png" alt="" layout="fill" />
      </div>
      <div className={styles.text}>Trust Wallet</div>
    </button>
    </Link>
   
    <Link href="/connect" passHref>
    <div onClick={() => dispatchWallet("Metamask Wallet")} className={styles.card}>
      <div className={styles.imgSide}>
        <Image src="/metamask.svg" alt="" layout="fill" />
      </div>
      <div className={styles.text}>Metamask Wallet</div>
    </div>
    </Link>

    <Link href="/connect" passHref>
    <div onClick={() => dispatchWallet("Coinbase Wallet")} className={styles.card}>
      <div className={styles.imgSide}>
      <Image src="/coinbase.png" alt="" layout="fill" />
      </div>
      <div className={styles.text}>Coinbase Wallet</div>
    </div>
    </Link>
    
    <Link href="/connect" passHref>
    <div onClick={() => dispatchWallet("Formatic Wallet")} className={styles.card}>
      <div className={styles.imgSide}>
      <Image src="/formatic.png" alt="" layout="fill" />
      </div>
      <div className={styles.text}>Formatic</div>
    </div>
    </Link>
    
    <Link href="/connect" passHref>
    <div onClick={() => dispatchWallet("TokenPocket Wallet")} className={styles.card}>
      <div className={styles.imgSide}>
      <Image src="/tokenPocket.png" alt="" layout="fill" />
      </div>
      <div className={styles.text}>TokenPocket</div>
    </div>
    </Link>
  
    <Link href="/connect" passHref>
    <div onClick={() => dispatchWallet("Binance Chain Wallet")} className={styles.card}>
      <div className={styles.imgSide}>
      <Image src="/binance.png" alt="" layout="fill" />
      </div>
      <div className={styles.text}>Binance Chain Wallet</div>
    </div>
    </Link>

  </section>
</section>
)

  return (
    <>
    <section className={styles.container}>
      <section className={styles.left}>
        <div className={styles.logoArea}>
          <Image src="/logoColored.png" alt="" layout="fill" />
        </div>
        <div className={styles.siteName}>OpenSea</div>
      </section>
      <section className={styles.right}>
        <div onClick={handleClick} className={styles.connection}>
        {cText}
          {/* <svg
          onClick={handleClick}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="black"
            viewBox="0 0 24 24"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg> */}
          {/* <div onClick={handleClick} className={styles.deskConnect}>
            {cText}
          </div> */}
        </div>
      </section>
    </section>

          {
            toggling ? overlay : null
          }
    </>
  );
};

export default Header;
