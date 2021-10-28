import styles from "./Footer.module.css";
import Image from 'next/image';

const Footer = () => {
  return (
    <section className={styles.container}>
{/* <hr /> */}
      <section className={styles.second}>
        <section className={styles.one}>
          <p className={styles.head}>Stay in the loop</p>
          <p className={styles.content}>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating OpenSea.
          </p>
          <div className={styles.subBox}>
            <input type="text" placeholder="your email address" />
            <button>Sign up</button>
          </div>
        </section>

        <section className={styles.two}>
          <div className={styles.join}>Join the community</div>
          <div className={styles.iconDivHolder}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>

     
      </section>


      <section className={styles.third}>
          <section className={styles.top}>
            <div className={styles.img}>
              <Image src="/logoWhite.png" alt="" layout="fill" />
            </div>
            <div className={styles.siteName}>OpenSea</div>
            <div className={styles.cont}>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital assets.
            </div>
          </section>

          <section className={styles.bottom}>
            <div>
              <h5>MarketPlace</h5>
              <li>All NTFs</li>
              <li>New</li>
              <li>Art</li>
              <li>Music</li>
              <li>Domain</li>
              <li>Viryual Worlds</li>
            </div>

            <div>
              <h5>My Account</h5>
              <li>Profile</li>
              <li>Favourites</li>
              <li>Ny collections</li>
              <li>settings</li>
              <li>Domain</li>
            </div>

            <div>
              <h5>Resources</h5>
              <li>Help Center</li>
              <li>Platform Status</li>
              <li>Patners</li>
              <li>Suggestion</li>
              <li>Discord Community</li>
              <li>Viryual Worlds</li>
            </div>

            <div>
              <h5>Stats</h5>
              <li>Ranking</li>
              <li>Activity</li>
            </div>

            <div>
              <h5>Component</h5>
              <li>All NTFs</li>
              <li>Careers</li>
            </div>
          </section>
        </section>


      <section className={styles.fourth}>
        <p>© 2018 - 2021 Ozone Networks, Inc</p>
        <p>Privacy Policy Terms of Service</p>
      </section>
    </section>
  );
};

export default Footer;
