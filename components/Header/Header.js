import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <section className={styles.container}>
      <section className={styles.left}>
        <div className={styles.logoArea}>
          <Image src="/logoColored.png" alt="" layout="fill" />
        </div>
        <div className={styles.siteName}>OpenSea</div>
      </section>
      <section className={styles.right}>
        <div className={styles.connection}>
          {/* Connect Wallet */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="black"
            viewBox="0 0 24 24"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg> */}
          <div className={styles.deskConnect}>
            Connect Wallet
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
