import styles from "./Layer2.module.css";
import Image from "next/image";

const Layer2 = () => {
  return (
    <section className={styles.container}>
      <p className={styles.head}>Create and sell your NFTs</p>
      <section className={styles.boxModel}>
        <div className={styles.card1}>
          <div className={styles.imgArea}></div>
          <div className={styles.title}>Set up your wallet</div>
          <div className={styles.content}>
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner. Learn about the
            wallets we support.
          </div>
        </div>

        <div className={styles.card2}>
          <div className={styles.imgArea}></div>
          <div className={styles.title}>Create your collection</div>
          <div className={styles.content}>
            Click My Collections and set up your collection. Add social links, a
            description, profile and banner images, and set a secondary sales
            fee.
          </div>
        </div>

        <div className={styles.card3}>
          <div className={styles.imgArea}></div>
          <div className={styles.title}>Add your NFTs</div>
          <div className={styles.content}>
            Upload your work (image, video, audio, or 3D art), add a title and
            description, and customize your NFTs with properties, stats, and
            unlockable content.
          </div>
        </div>

        <div className={styles.card4}>
          <div className={styles.imgArea}></div>
          <div className={styles.title}>List them for sale</div>
          <div className={styles.content}>
            Choose between auctions, fixed-price listings, and declining-price
            listings. You choose how you want to sell your NFTs, and we help you
            sell them!
          </div>
        </div>
      </section>
    </section>
  );
};

export default Layer2;
