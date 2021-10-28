import styles from "./Header.module.css";
import Image from "next/image";
import {useState, useEffect} from 'react'
import { useWallet } from "../../contexts/WalletProvider";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const { wallet } = useWallet()
  const { updateWallet } = useWallet()
  const [toggling, setToggling] = useState(false)
  const [cText, setCText] = useState("Connect Wallet")

  const handleClick = () => {
    toggling ? setToggling(false) : setToggling(true)
    !toggling ? setCText("Close") : setCText("Connect Wallet")
    
  }

  console.log(wallet);

  const dispatchTrust = (item) => {
    // alert("preparing to push") 
    updateWallet("Trust Wallet")
    // alert("ready to push") 
    router.push("/connect")
    router.push("/connect")
    router.push("/connect")
    router.push("/connect")
    router.push("/connect")
    router.push("/connect")
    router.push("/connect")
    router.push("/connect")

    console.log(wallet);
  }

  const dispatchMetaMask = (item) => {
    // alert("preparing to push") 
    updateWallet("MetaMask Wallet")
    // alert("ready to push") 

    console.log(wallet);
  }
  const dispatchCoinbase = (item) => {
    // alert("preparing to push") 
    updateWallet("Coinbase Wallet")
    // alert("ready to push") 
    router.push("/connect")
    console.log(wallet);
  }
  
  const dispatchFormatic = (item) => {
    // alert("preparing to push") 
    updateWallet("Formatic Wallet")
    // alert("ready to push") 
    router.push("/connect")
    console.log(wallet);
  }

  const dispatchTokenPocket = (item) => {
    // alert("preparing to push") 
    updateWallet("TokenPocket Wallet")
    // alert("ready to push") 
    router.push("/connect")
    console.log(wallet);
  }

  const dispatchBinance = (item) => {
    // alert("preparing to push") 
    updateWallet("Binance Chain Wallet")
    // alert("ready to push") 
    router.push("/connect")
    console.log(wallet);
  }



const overlay = (
  <section className={styles.overlay}>
  <section className={styles.cardHolder}>
  <div className={styles.cardHead}>
     <p className={styles.info}>Connect with one of our availble wallet providers below.</p>
    </div>


    <Link href="/connect" passHref>
    <button onClick={dispatchTrust} className={styles.card}>
      <div className={styles.imgSide}>
        <Image src="/twallet.png" alt="" layout="fill" />
      </div>
      <div className={styles.text}>Trust Wallet</div>
    </button>
    </Link>
   
    <Link href="/connect" passHref>
    <div onClick={dispatchMetaMask} className={styles.card}>
      <div className={styles.imgSide}>
        <Image src="/metamask.svg" alt="" layout="fill" />
      </div>
      <div className={styles.text}>Metamask Wallet</div>
    </div>
    </Link>

    <Link href="/connect" passHref>
    <div onClick={dispatchCoinbase} className={styles.card}>
      <div className={styles.imgSide}>
      <Image src="/coinbase.png" alt="" layout="fill" />
      </div>
      <div className={styles.text}>Coinbase Wallet</div>
    </div>
    </Link>
    
    <Link href="/connect" passHref>
    <div onClick={dispatchFormatic} className={styles.card}>
      <div className={styles.imgSide}>
      <Image src="/formatic.png" alt="" layout="fill" />
      </div>
      <div className={styles.text}>Formatic</div>
    </div>
    </Link>
    
    <Link href="/connect" passHref>
    <div onClick={dispatchTokenPocket} className={styles.card}>
      <div className={styles.imgSide}>
      <Image src="/tokenPocket.png" alt="" layout="fill" />
      </div>
      <div className={styles.text}>TokenPocket</div>
    </div>
    </Link>
  
    <Link href="/connect" passHref>
    <div onClick={dispatchBinance} className={styles.card}>
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
