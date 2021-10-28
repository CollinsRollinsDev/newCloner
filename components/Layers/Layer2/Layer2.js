import styles from "./Layer2.module.css";
import Image from "next/image";

const Layer2 = () => {
  return (
    <section className={styles.container}>
      <p className={styles.head}>Create and sell your NFTs</p>
      <section className={styles.boxModel}>
        <div className={styles.card1}>
          <div className={styles.imgArea}>
            <Image src="https://www.psdgraphics.com/wp-content/uploads/2011/02/wallet-icon.jpg" alt="" layout="fill" />
          </div>
          <div className={styles.title}>Set up your wallet</div>
          <div className={styles.content}>
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner. Learn about the
            wallets we support.
          </div>
        </div>

        <div className={styles.card2}>
          <div className={styles.imgArea}>
          <Image src="https://image.freepik.com/free-vector/hand-drawn-trendy-cartoon-badge-collection_23-2149095458.jpg" alt="" layout="fill" />
          </div>
          <div className={styles.title}>Create your collection</div>
          <div className={styles.content}>
            Click My Collections and set up your collection. Add social links, a
            description, profile and banner images, and set a secondary sales
            fee.
          </div>
        </div>

        <div className={styles.card3}>
          <div className={styles.imgArea}>
          <Image src="https://static.vecteezy.com/system/resources/previews/002/877/055/non_2x/cartoon-illustration-of-nft-coin-free-vector.jpg" alt="" layout="fill" />

          </div>
          <div className={styles.title}>Add your NFTs</div>
          <div className={styles.content}>
            Upload your work (image, video, audio, or 3D art), add a title and
            description, and customize your NFTs with properties, stats, and
            unlockable content.
          </div>
        </div>

        <div className={styles.card4}>
          <div className={styles.imgArea}>
          <Image src="https://nwcsa.org/wp-content/uploads/2020/11/sale-tag.png" alt="" layout="fill" />

          </div>
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
